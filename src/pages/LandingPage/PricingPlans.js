// src/pages/LandingPage.js (continued)
import { Grid, Typography, Box, Button, Card, CardContent, CardActions } from "@mui/material";

const PricingPlans = () => {
  const plans = [
    {
      id: 1,
      name: "Free",
      price: "Free",
      features: ["5GB Storage", "Basic File Sharing", "Limited Support"],
    },
    {
      id: 2,
      name: "Pro",
      price: "$9.99/mo",
      features: ["1TB Storage", "Priority Support", "Enhanced Security"],
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Contact Us",
      features: ["Custom Storage", "Advanced Features", "Dedicated Support"],
    },
  ];

  return (
    <Box sx={{ padding: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom color="white">
        Choose Your Plan
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {plans.map((plan) => (
          <Grid item xs={12} sm={6} md={4} key={plan.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {plan.name}
                </Typography>
                <Typography variant="h6" color="primary">
                  {plan.price}
                </Typography>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  href="/signup"
                >
                  Get Started
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingPlans;
