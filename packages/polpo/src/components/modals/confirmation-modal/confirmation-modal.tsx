import { Typography } from '../../typography';
import { ActionModal, ActionModalProps } from '../action-modal';

import { ConfirmationModalStyle } from './confirmation-modal.style';

type ConfirmationModalProps = ActionModalProps & {
  title: string;
  onAccept: (() => Promise<void>) | (() => void);
  onReject?: (() => Promise<void>) | (() => void);
  acceptText: string;
  rejectText: string;
  isLoading?: boolean;
};

export const ConfirmationModal = ({
  title,
  onAccept,
  onReject = () => null,
  acceptText,
  rejectText,
  children,
  isLoading,
  ...actionModalProps
}: ConfirmationModalProps) => {
  return (
    <ActionModal {...actionModalProps} backCard>
      <ConfirmationModalStyle>
        <Typography variant='header4'>{title}</Typography>
        <section>{children}</section>
        <section className='confirmation-modal-actions'>
          {!isLoading && (
            <ActionModal.ActionButton variant='ghost' onClick={onReject}>
              {rejectText}
            </ActionModal.ActionButton>
          )}
          <ActionModal.ActionButton isLoading={isLoading} onClick={onAccept}>
            {acceptText}
          </ActionModal.ActionButton>
        </section>
      </ConfirmationModalStyle>
    </ActionModal>
  );
};
