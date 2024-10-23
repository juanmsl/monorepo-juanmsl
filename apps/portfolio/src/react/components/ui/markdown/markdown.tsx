import { Typography } from 'juanmsl/ui';
import { ErrorBoundary } from 'react-error-boundary';
import MarkdownComponent from 'react-markdown';
import { Link } from 'react-router-dom';

const components = {
  h1: ({ className, children, ...props }) => (
    <Typography variant='header1' className={className} {...props} noPadding>
      {children}
    </Typography>
  ),
  h2: ({ className, children, ...props }) => (
    <Typography variant='header2' className={className} {...props} noPadding>
      {children}
    </Typography>
  ),
  h3: ({ className, children, ...props }) => (
    <Typography variant='header3' className={className} {...props} noPadding>
      {children}
    </Typography>
  ),
  h4: ({ className, children, ...props }) => (
    <Typography variant='header4' className={className} {...props} noPadding>
      {children}
    </Typography>
  ),
  h5: ({ className, ...props }) => <h5 className={className} {...props} />,
  h6: ({ className, ...props }) => <h6 className={className} {...props} />,
  a: ({ className, href, ...props }) => <Link className={className} to={href} {...props} />,
  p: ({ className, children, ...props }) => (
    <Typography variant='body' className={className} {...props} noPadding>
      {children}
    </Typography>
  ),
  ul: ({ className, ...props }) => <ul className={className} {...props} />,
  ol: ({ className, ...props }) => <ol className={className} {...props} />,
  li: ({ className, children, ...props }) => (
    <li {...props} className={className}>
      <Typography variant='body' noPadding>
        {children}
      </Typography>
    </li>
  ),
  blockquote: ({ className, children, ...props }) => (
    <Typography variant='small' className={className} {...props}>
      {children}
    </Typography>
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className={className} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className='my-4 border-zinc-200 md:my-8' {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className='w-full my-6 overflow-y-auto'>
      <table className={className} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => <tr className={className} {...props} />,
  th: ({ className, ...props }) => <th className={className} {...props} />,
  td: ({ className, ...props }) => <td className={className} {...props} />,
  pre: ({ className, ...props }) => <pre className={className} {...props} />,
  code: ({ className, ...props }) => <code className={className} {...props} />,
};

type MarkdownProps = {
  children: string;
};

export const Markdown = ({ children }: MarkdownProps) => {
  return (
    <ErrorBoundary fallbackRender={error => <div>Error: {JSON.stringify(error)}</div>}>
      <MarkdownComponent components={components}>{children}</MarkdownComponent>
    </ErrorBoundary>
  );
};
