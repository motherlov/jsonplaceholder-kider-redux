import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      imgSrc: 'https://via.placeholder.com/200',
      title: 'First Blog Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      imgSrc: 'https://via.placeholder.com/200',
      title: 'Second Blog Post',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
        id: 3,
        imgSrc: 'https://via.placeholder.com/200',
        title: 'Third Blog Post',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 4,
        imgSrc: 'https://via.placeholder.com/200',
        title: 'Four Blog Post',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      },
    // Add more blog posts as needed
  ];

  return (
    <Grid container spacing={2}>
      {blogPosts.map((post) => (
    
        <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              sx={{ height: 140 }}
              image={post.imgSrc}
              alt="blog post image"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Blog;
