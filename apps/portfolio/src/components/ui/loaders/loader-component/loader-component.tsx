import {LoaderComponentStyle} from "@/components/ui/loaders/loader-component/loader-component.style.ts";
import {Icon} from "@juanmsl/ui";

type LoaderComponentProps = {
  isPending: boolean;
  children: React.ReactNode;
};

export const LoaderComponent = ({
  isPending,
  children
}: LoaderComponentProps) => {
  if (isPending) {
    return (
      <LoaderComponentStyle>
        <Icon name='spinner' className='loader-icon' />
      </LoaderComponentStyle>
    );
  }

  return children;
};
