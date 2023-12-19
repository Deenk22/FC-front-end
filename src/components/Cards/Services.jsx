import { Box, Paper, Typography, styled } from '@mui/material';
import ButtonDesign from '../../ui/ButtonDesign';
import './Style.css';

const text = 'Me interesa';

export default function Services({ ...service }) {
  const { title, description, src } = service;

  const Img = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  });

  return (
    <Paper elevation={7} className="animation-cards" sx={{ mt: 4 }}>
      <Img src={src} alt={title} />
      <Box p={2}>
        <Typography
          variant="h5"
          component={'h1'}
          color={'primary'}
          mt={-2}
          mb={1}
        >
          {title}
        </Typography>
        <Typography variant="body2" color={'paragraph.main'} mb={4}>
          {description}
        </Typography>
        <ButtonDesign text={text} />
      </Box>
    </Paper>
  );
}
