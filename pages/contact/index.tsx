import { styled } from '@mui/system';
import {
  Container,
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from '@mui/material';
import ContactCard from '../../components/ContactCard';
import ContactFormCard from '../../components/ContactFormCard';

const ContactContainer = styled(Container)`
  && {
    background-color: #ffffff;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact" sx={{ minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ py: 4 }}>
        Get In Touch
      </Typography>
      <Grid container spacing={8}>
        {/* left */}
        <Grid item xs={12} lg={6}>
          <ContactCard></ContactCard>
        </Grid>

        {/* right */}
        <Grid item xs={12} lg={6}>
          <ContactFormCard />
        </Grid>
      </Grid>
    </ContactContainer>
  );
};

export default Contact;
