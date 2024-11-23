// src/pages/LandingPage.js (continued)
import { Avatar, Grid, Paper } from "@mui/material";
import { Typography, Box } from "@mui/material";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      feedback: "TeraDrive makes file management seamless. Highly recommended!",
      image: "/assets/user1.jpg", // Replace with your image paths
    },
    {
      id: 2,
      name: "John Smith",
      feedback: "Simple, secure, and reliable cloud storage. A lifesaver!",
      image: "/assets/user2.jpg",
    },
    {
      id: 3,
      name: "Emily Johnson",
      feedback: "Great for teams and individuals alike. Love the Pro features!",
      image: "/assets/user3.jpg",
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" textAlign="center" gutterBottom color="white">
        What our users say
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
            <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{ width: 80, height: 80, marginX: "auto", marginBottom: 2 }}
              />
              <Typography variant="body1" fontStyle="italic">
                "{testimonial.feedback}"
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                - {testimonial.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
