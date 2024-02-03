import { FileCardSC, InputFileSC } from './input-file.style';
import { Icon, IconNameT } from '../../../contexts';
import { FileResolvedT, FileTypeEnum, useFileReader } from '@juanmsl/hooks';
import { withController } from '../with-controller';
import { InputProps } from '../types';
import { useEffect, useId, useMemo, useState } from 'react';
import {formatBytes} from "@juanmsl/helpers";

type InputFileProps = {
  accept?: string;
  multiple?: boolean;
  limitSize?: number;
  errorTimeout?: number;
};

export const InputFile = ({
  name,
  className = '',
  style = {},
  setValue,
  onBlur,
  value = [],
  accept,
  label = 'Click to upload or drag and drop',
  multiple = false,
  limitSize = 5000000,
  errorTimeout = 3000,
}: InputProps<InputFileProps, Array<File>>) => {
  const [error, setError] = useState<string | null>(null);
  const fileList = useFileReader(value);
  const id = useId();

  useEffect(() => {
    let intervalId: ReturnType<typeof setTimeout> | null = null;

    if (error !== null) {
      intervalId = setTimeout(() => {
        setError(null);
      }, errorTimeout);
    }

    return () => {
      if (intervalId !== null) {
        clearTimeout(intervalId);
      }
    };
  }, [error, errorTimeout]);

  const saveFiles = (files: FileList) => {
    const finalFiles = Array.isArray(value) ? value : [];

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (!file) {
        continue;
      }
      if (file.size < limitSize) {
        finalFiles.push(file);
      } else {
        setError(`File '${file.name}' size is larger than ${formatBytes(limitSize)}`);
      }
    }

    setValue(finalFiles);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    files && saveFiles(files);
  };

  const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length) {
      saveFiles(e.dataTransfer.files);
    }
  };

  const getIconType = (type: FileTypeEnum): IconNameT => {
    const iconTypes: Record<FileTypeEnum, IconNameT> = {
      [FileTypeEnum.PNG]: 'warning',
      [FileTypeEnum.PDF]: 'warning',
    };

    return iconTypes[type] ?? 'warning';
  };

  const deleteFile = (index: number) => {
    const prevValue = [...value];
    prevValue.splice(index, 1);
    setValue(prevValue);
  };

  const deleteAll = () => {
    setValue([]);
  };

  const totalSize = useMemo(() => fileList.reduce((prev, { size }) => prev + size, 0), [fileList]);

  const renderFileToCard = (file: FileResolvedT, key: number) => (
    <FileCardSC key={key}>
      <section className="file-card--image">
        <Icon name={getIconType(file.type)} />
      </section>
      <section className="file-card--data">
        <p className="file-card--name">{file.name}</p>
        <p className="file-card--size" title={`${file.size} bytes`}>
          {file.formatSize}
        </p>
      </section>
      <section className="file-card--delete" onClick={() => deleteFile(key)}>
        <Icon name="trash-can" />
      </section>
    </FileCardSC>
  );

  return (
    <InputFileSC>
      {fileList.length > 0 && (
        <>
          <span className="total-info">
            <span>
              {fileList.length} files - {formatBytes(totalSize)}
            </span>
            <span className="total-info--delete" onClick={deleteAll}>
              <Icon name="trash-can" />
            </span>
          </span>
          <section className="input-file--files">
            <section className="input-file--files--content">{fileList.map(renderFileToCard)}</section>
          </section>
        </>
      )}
      <section className="input-file--box" onDrop={handleDrop}>
        <section className="input-file--box--icon">
          <Icon name="magnifying-glass" />
        </section>
        <section className="input-file--box--text">
          <label className="input-file--box--label" htmlFor={id}>
            {label}
          </label>
          <span className="input-file--box--restrictions">Max size ({formatBytes(limitSize)})</span>
        </section>
        <input
          id={id}
          type="file"
          accept={accept}
          multiple={multiple}
          name={name}
          onBlur={onBlur}
          className={className}
          onChange={handleChange}
          style={style}
          value=""
        />
      </section>
      {error !== null && <span className="error">{error}</span>}
    </InputFileSC>
  );
};

export const InputFileController = withController<InputFileProps, Array<File>>(InputFile, []);
