import { formatBytes } from '../helpers';
import { useEffect, useState } from 'react';

export enum FileTypeEnum {
  PNG = 'image/png',
  PDF = 'application/pdf',
}

export type FileResolvedT = {
  name: string;
  size: number;
  formatSize: string;
  type: FileTypeEnum;
  url: FileReader['result'];
};

export const useFileReader = (inputFiles: Array<File>) => {
  const [files, setFiles] = useState<Array<FileResolvedT>>([]);

  useEffect(() => {
    const fileReaders: Array<FileReader> = [];
    let isCancel = false;

    if (!Array.isArray(inputFiles) || inputFiles.length === 0) {
      setFiles([]);
    } else {
      const promises = inputFiles.map((file) => {
        return new Promise<FileResolvedT>((resolve, reject) => {
          const fileReader = new FileReader();
          fileReaders.push(fileReader);
          fileReader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target?.result) {
              resolve({
                name: file.name,
                size: file.size,
                formatSize: formatBytes(file.size),
                type: file.type as FileTypeEnum,
                url: e.target.result,
              });
            }
          };
          fileReader.onabort = () => {
            reject(new Error('File reading aborted'));
          };
          fileReader.onerror = () => {
            reject(new Error('Failed to read file'));
          };
          fileReader.readAsDataURL(file);
        });
      });

      Promise.all(promises)
        .then((files) => {
          if (!isCancel) {
            setFiles(files);
          }
        })
        .catch((reason) => {
          console.log(reason);
        });
    }

    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formatBytes, inputFiles.length]);

  return files;
};
