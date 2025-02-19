import { createContext, useCallback, useContext, useRef, useState } from 'react';

import { Button, ButtonProps } from '../../buttons';
import { Icon, IconNameT } from '../../icon';
import { Typography } from '../../typography';
import { ModalProps } from '../modal-provider';

import { ModalStyle, ActionModalStyle } from './action-modal.style';

import { PositionContainer } from '@polpo/helpers';
import { useClassNames } from '@polpo/hooks';

type ActionModalContextType = {
  onClose: () => void;
  isActionInProgress: boolean;
  setIsActionInProgress: (isActionInProgress: boolean) => void;
};

const ActionModalContext = createContext<ActionModalContextType | null>(null);

const useActionModalContext = () => {
  const context = useContext(ActionModalContext);

  if (!context) {
    throw new Error('useActionModalContext must be used within a ActionModal');
  }

  return context;
};

export type ActionModalProps = Omit<
  ModalProps,
  'id' | 'animation' | 'closeAnimationClassName' | 'position' | 'rootStyle'
> & {
  onClose: () => void;
  actionRequired?: boolean;
  icon?: IconNameT;
  noCloseButton?: boolean;
  lineOnTop?: boolean;
  backCard?: boolean;
  noPadding?: boolean;
};

export const ActionModal = ({
  onClose,
  actionRequired,
  icon,
  noCloseButton,
  lineOnTop = false,
  backCard = false,
  noPadding = false,
  children,
  isVisible,
  className = '',
  style = {},
  modalState,
  ...backdropProps
}: ActionModalProps) => {
  const [isActionInProgress, setIsActionInProgress] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const remainAction = useCallback(() => {
    ref.current?.classList.add('shake-animation');
    setTimeout(() => {
      ref.current?.classList.remove('shake-animation');
    }, 500);
  }, []);

  const actionModalClassName = useClassNames({
    'back-card': backCard,
    'line-on-top': lineOnTop,
    'no-padding': noPadding,
  });

  return (
    <ActionModalContext.Provider value={{ onClose, isActionInProgress, setIsActionInProgress }}>
      <ModalStyle
        id='action-modal'
        animation='bounce'
        opacity={0.8}
        isVisible={isVisible}
        {...backdropProps}
        modalState={modalState}
        backdropOnClick={actionRequired ? remainAction : onClose}
        position={PositionContainer.CENTER}
      >
        <section ref={ref} className='modal-content'>
          <ActionModalStyle className={actionModalClassName}>
            {!noCloseButton && !actionRequired && (
              <section className='close-modal-button' onClick={() => onClose()}>
                <Icon name='cross' inCircle />
              </section>
            )}
            {icon ? (
              <Typography variant='header4' className='action-modal-icon'>
                <Icon name={icon} />
              </Typography>
            ) : null}
            <section className='action-modal-body'>
              <section className={`action-modal-content ${className}`} style={style}>
                {children}
              </section>
            </section>
          </ActionModalStyle>
        </section>
      </ModalStyle>
    </ActionModalContext.Provider>
  );
};

type ActionButtonProps = Omit<ButtonProps, 'onClick'> & {
  onClick: (() => Promise<void>) | (() => void);
};

const ActionButton = ({ onClick, children, isLoading: manualIsLoading, ...buttonProps }: ActionButtonProps) => {
  const { onClose, isActionInProgress, setIsActionInProgress } = useActionModalContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleAction = useCallback(() => {
    setIsLoading(true);
    setIsActionInProgress(true);
    const result = onClick();

    if (result instanceof Promise) {
      result.then(() => {
        onClose();
        setIsLoading(false);
        setIsActionInProgress(false);
      });
    } else {
      onClose();
      setIsLoading(false);
      setIsActionInProgress(false);
    }
  }, [onClick, onClose, setIsActionInProgress]);

  if (!isLoading && isActionInProgress) {
    return null;
  }

  return (
    <Button {...buttonProps} onClick={handleAction} isLoading={manualIsLoading || isLoading}>
      {children}
    </Button>
  );
};

ActionModal.ActionButton = ActionButton;
