import React from 'react';
import './Video.css';
import VideoBg from './Background.mp4';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, Grid, Pagination } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import image1 from "./Assets/image1.jpeg"
import image2 from "./Assets/image2.jpeg"
import image3 from "./Assets/image3.jpeg"
import image4 from "./Assets/image4.jpeg"
const Video = () => {

  // Change slide every 3 seconds (3000 milliseconds)


  // const useStyles = makeStyles((theme) => ({
  //   carouselImage: {
  //     maxWidth: '100%',
  //     maxHeight: '400px',
  //     margin: 'auto',
  //     display: 'block',
  //   },
  // }));

  const carouselImageStyle = {
    maxWidth: '100%',
    maxHeight: '400px',
    margin: 'auto',
    display: 'block',
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    image1,
    image2,
    image3,
    image4
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handlePageChange = (event, value) => {
    setCurrentIndex(value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div>
      <div className='overlay'></div>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center' }}>
            {images.map((_, index) => (
              <span
                key={index}
                style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: index === currentIndex ? 'blue' : 'gray',
                  margin: '0 5px',
                  cursor: 'pointer',
                }}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </Grid>
      </Grid>
      <div className='content'>
        <h1 className="glow">Welcome to CommunityHUB360</h1>
        <h3>Your Gateway to Connected Communities</h3>
      </div>
      <div>
        <div className="button-container">
          <Link to="/login" style={{marginRight:10}} >
            <Button variant='contained' >Login</Button>
          </Link>
          <Link to='/signup' style={{marginRight:10}}>
            <Button variant='contained'  >signup</Button>
          </Link>

          <Link to='/aboutus'  >
            <Button variant='contained'>About us</Button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Video;