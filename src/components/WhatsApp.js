import React from 'react';
import { Link } from '@mui/material'
import { WhatsappOutlined } from '@mui/icons-material';

const WhatsApp = () => {
  return (
    <Link href='https://wa.me/send?phone=5491144076977' className='WhatsApp'>
      <WhatsappOutlined />
    </Link>
  );
}
export default WhatsApp;
