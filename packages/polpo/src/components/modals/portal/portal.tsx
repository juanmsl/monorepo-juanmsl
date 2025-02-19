import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { useDomContainer } from '@polpo/hooks';

type PortalProps = {
  id: string;
  children: ReactNode;
};

const PortalComponent = ({ children, id }: PortalProps, ref: ForwardedRef<HTMLElement>) => {
  const root = useDomContainer(id, ref);

  return createPortal(children, root);
};

export const Portal = forwardRef(PortalComponent);
