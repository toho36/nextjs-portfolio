import React, { useState } from 'react';

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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    let formValid = true;
    const newErrors = {
      name: '',
      phone: '',
      email: '',
      message: '',
    };
    if (formData.name.trim() === '') {
      formValid = false;
      newErrors.name = 'Name is required';
    }

    if (formData.phone.trim() === '') {
      formValid = false;
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{9}$/.test(formData.phone.trim())) {
      formValid = false;
      newErrors.phone = 'Phone number must have 9 digits';
    }

    if (formData.email.trim() === '') {
      formValid = false;
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      formValid = false;
      newErrors.email = 'Invalid email format';
    }

    if (formData.message.trim() === '') {
      formValid = false;
      newErrors.message = 'Message is required';
    }

    if (formValid) {
      // Submit the form
      console.log('Form submitted:', formData);
    } else {
      // Update the errors state
      setErrors(newErrors);
    }
  };
  return (
    <ContactForm
      action="https://getform.io/f/d6b81625-7b16-4d25-b5b9-2cde4a63eaad"
      method="POST"
      encType="multipart/form-data"
      id="contactForm"
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Phone Number"
            fullWidth
            variant="outlined"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Subject"
            fullWidth
            variant="outlined"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
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
