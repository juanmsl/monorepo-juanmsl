import { ForwardedRef, forwardRef, ReactNode, useMemo } from 'react';
import { createPortal } from 'react-dom';

import { useDomContainer } from '@polpo/hooks';

type PortalProps = {
  id: string;
  children: ReactNode;
};

const PortalComponent = ({ children, id }: PortalProps, ref: ForwardedRef<HTMLElement>) => {
  const uuid = useMemo(() => crypto.randomUUID(), []);
  const root = useDomContainer(`${id}-${uuid}`, ref);

  if (root === null) {
    return null;
  }

  return createPortal(children, root);
};

export const Portal = forwardRef(PortalComponent);
