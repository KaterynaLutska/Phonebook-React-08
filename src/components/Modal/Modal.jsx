import React from 'react';
import { Modal } from '@material-ui/core';
import useStyles from '../../styles';

export default function MуМodal({ modal, onCloseModal, children }) {
  const classes = useStyles();
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modal}
        onClose={() => onCloseModal()}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.paper}>{children}</div>
      </Modal>
    </>
  );
}
