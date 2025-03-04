import { forwardRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { useDomContainer } from '@polpo/hooks';

type PortalProps = {
  id: string;
  children: ReactNode;
};

const PortalComponent = ({ children, id }: PortalProps) => {
  const root = useDomContainer(id);

  if (root === null) {
    return null;
  }

  return createPortal(children, root);
};

export const Portal = forwardRef(PortalComponent);
