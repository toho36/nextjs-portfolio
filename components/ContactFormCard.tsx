import React from 'react';

import { styled } from '@mui/system';
import {
  Container,
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from '@mui/material';

const ContactForm = styled('form')`
  && {
    width: 100%;
    margin-top: 16px;
  }
`;

function ContactFormCard() {
  return (
    <ContactForm
      action="https://getform.io/f/d6b81625-7b16-4d25-b5b9-2cde4a63eaad"
      method="POST"
      encType="multipart/form-data"
      id="contactForm"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField label="Name" fullWidth variant="outlined" name="name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Phone Number"
            fullWidth
            variant="outlined"
            name="phone"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email" fullWidth variant="outlined" name="email" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Subject"
            fullWidth
            variant="outlined"
            name="subject"
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            placeholder="Message"
            minRows={15}
            style={{
              width: '100%',
              borderColor: '#ccc',
              borderRadius: '4px',
            }}
            name="message"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            type="submit"
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </ContactForm>
  );
}

export default ContactFormCard;
