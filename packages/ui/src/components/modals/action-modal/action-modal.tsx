import { useClassNames } from '@juanmsl/hooks';
import { createContext, useCallback, useContext, useRef, useState } from 'react';

import { Button, ButtonVariant } from '../../buttons';
import { Icon, IconNameT } from '../../icon';
import { Typography } from '../../typography';
import { Modal } from '../modal';

import { ActionModalContainerStyle, ActionModalStyle } from './action-modal.style';

export type ActionModalProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  actionRequired?: boolean;
  icon?: IconNameT;
  noCloseButton?: boolean;
  className?: string;
  style?: React.CSSProperties;
  lineOnTop?: boolean;
  backCard?: boolean;
};

type ActionModalContextEntity = {
  onClose: () => void;
};

const ActionModalContext = createContext<ActionModalContextEntity | null>(null);

const useActionModal = () => {
  const context = useContext(ActionModalContext);

  if (context === null) {
    throw new Error('useActionModal must be used with in a ActionModal');
  }

  return context;
};

export const ActionModal = ({
  children,
  isOpen,
  onClose,
  actionRequired,
  icon,
  noCloseButton,
  className = '',
  style = {},
  lineOnTop = false,
  backCard = false,
}: ActionModalProps) => {
  const ref = useRef<HTMLElement>(null);

  const handleOnClose = useCallback((callback: () => void) => {
    ref.current?.classList.remove('open-animation');
    ref.current?.classList.add('close-animation');
    setTimeout(() => {
      callback();
      ref.current?.classList.remove('close-animation');
    }, 490);
  }, []);

  const remainAction = useCallback(() => {
    ref.current?.classList.remove('open-animation');
    ref.current?.classList.add('shake-animation');
    setTimeout(() => {
      ref.current?.classList.remove('shake-animation');
    }, 500);
  }, []);

  const actionModalClassName = useClassNames({
    'back-card': backCard,
    'line-on-top': lineOnTop,
  });

  const contentClassName = useClassNames({
    'action-modal-content': true,
    [className]: Boolean(className),
  });

  return (
    <Modal
      id='action-modal'
      opacity={0.8}
      isOpen={isOpen}
      zIndex={9999}
      onClick={actionRequired ? remainAction : () => handleOnClose(onClose)}
    >
      <ActionModalContext.Provider value={{ onClose: () => handleOnClose(onClose) }}>
        <ActionModalContainerStyle>
          <section ref={ref} className='open-animation'>
            <ActionModalStyle className={actionModalClassName}>
              {!noCloseButton && !actionRequired && (
                <section className='close-modal-button'>
                  <Icon name='cross' onClick={() => handleOnClose(onClose)} />
                </section>
              )}
              {icon ? (
                <Typography variant='header4' className='action-modal-icon'>
                  <Icon name={icon} />
                </Typography>
              ) : null}
              <section className='action-modal-body'>
                <section className={contentClassName} style={style}>
                  {children}
                </section>
              </section>
            </ActionModalStyle>
          </section>
        </ActionModalContainerStyle>
      </ActionModalContext.Provider>
    </Modal>
  );
};

type ActionButtonProps = {
  onClick: (() => Promise<void>) | (() => void);
  children: string;
  variant?: `${ButtonVariant}`;
  isLoading?: boolean;
  disabled?: boolean;
};

const ActionButton = ({ onClick, children, variant, disabled, isLoading: manualIsLoading }: ActionButtonProps) => {
  const { onClose } = useActionModal();
  const [isLoading, setIsLoading] = useState(false);

  const handleAction = useCallback(() => {
    setIsLoading(true);
    const result = onClick();

    if (result instanceof Promise) {
      result.then(() => {
        onClose();
        setIsLoading(false);
      });
    } else {
      onClose();
      setIsLoading(false);
    }
  }, [onClick, onClose]);

  return (
    <Button variant={variant} onClick={handleAction} isLoading={manualIsLoading || isLoading} disabled={disabled}>
      {children}
    </Button>
  );
};

ActionModal.ActionButton = ActionButton;
