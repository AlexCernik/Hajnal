import React from 'react';
import { Link } from '@mui/material'
import { WhatsappOutlined } from '@mui/icons-material';

const WhatsApp = () => {
  return (
    <Link href='https://wa.me/541144076977' target='_blank' className='WhatsApp'>
      <WhatsappOutlined />
    </Link>
  );
}
export default WhatsApp;
