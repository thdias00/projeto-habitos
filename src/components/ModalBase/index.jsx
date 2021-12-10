import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '85%',
  maxHeight: '85%',
  overflowY: 'auto',
  overflowX: 'hidden',
  textAlign: "center",
  bgcolor: 'var(--green)',
  border: '2px solid white',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

export default function ModalBase({ labelToCallModal, titleModal, children }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button onClick={handleOpen}>{labelToCallModal}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {titleModal}
          </Typography>
          {/* {children} */}
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {children}
          </Typography> */}
          <Box>
            {children}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
