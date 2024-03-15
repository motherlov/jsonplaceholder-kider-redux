import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const BlogDetails = ({ imgSrc, title, description, price, duration, subject }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={imgSrc}
          alt="blog post image"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <div gutterBottom variant="h5" component="div">
            {title}
          </div>
          <div variant="body2" color="text.secondary">
            {description}
          </div>
          <div variant="body2" color="text.secondary">
            Price: {price}
          </div>
          <div variant="body2" color="text.secondary">
            Duration: {duration}
          </div>
          <div variant="body2" color="text.secondary">
            Subject: {subject}
          </div>
        </CardContent>
      
    </Grid>
  );
};

const BlogDetails1 = () => {
  const blogPost = {
    id: 1,
    imgSrc: 'https://via.placeholder.com/200',
    title: 'Sample Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$10',
    duration: '1 hour',
    subject: 'Sample Subject',
  };

  return (
    <Grid container spacing={2}>
      <BlogDetails
        key={blogPost.id}
        imgSrc={blogPost.imgSrc}
        title={blogPost.title}
        description={blogPost.description}
        price={blogPost.price}
        duration={blogPost.duration}
        subject={blogPost.subject}
      />
    </Grid>
  );
};

export default BlogDetails1;
