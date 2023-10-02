import {TagStyle} from "./tag.style";
import {Typography} from "../typography";

type TagProps = {
  children: string;
  className?: string;
}

export const Tag = ({
  children,
  className = ''
}: TagProps) => {
  return (
    <TagStyle className={className}>
      <Typography variant='label'>
        {children}
      </Typography>
    </TagStyle>
  );
};
