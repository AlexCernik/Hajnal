import React, { useState } from 'react';
import { Backdrop, Box, Modal, Fade, IconButton } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';

const boxStyle = {
  position: 'absolute',
  top: 0,
  left: '50%',
  bottom: 0,
  right: 0,
  transform: 'translate(-50%, 0%)',
  boxShadow: 24,
};
// const boxStyle = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   transform: 'translate(-50%, -50%)',
//   maxHeight: '100vh',
//   maxWidth: '100%',
//   boxShadow: 24,
// };
const buttonStyle = {
  color: '#FFFFFF',
  backgroundColor: 'rgba(0, 0, 0, .4)',
  position: 'absolute',
  right: 10,
  top: 10,
  zIndex: 1
}

const ImageModal = ({ image, alt }) => {
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(e => !e);

  return (
    <>
      <IconButton color="primary" onClick={handleModal} style={buttonStyle}>
        <FullscreenIcon />
      </IconButton>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: { backgroundColor: 'rgba(0, 0, 0, .8)' }
        }}
      >
        <Fade in={open}>
          <Box sx={boxStyle}>
            <IconButton color="primary" onClick={handleModal} style={buttonStyle}>
              <CloseIcon />
            </IconButton>
            <img src={image} alt={alt} style={{ height: '100%', width: '100%', objectFit: 'contain', borderRadius: 6 }} />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
export default ImageModal;