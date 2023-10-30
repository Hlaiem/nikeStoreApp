import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import carousel1 from '../assets/carousel/téléchargement (4).jpg'
import carousel2 from '../assets/carousel/images (4).jpg'
import carousel3 from '../assets/carousel/images (5).jpg'
import carousel4 from '../assets/carousel/images (8).jpg'
import carousel5 from '../assets/carousel/images (9).jpg'
import carousel6 from '../assets/carousel/images (12).jpg'
import { Container } from 'react-bootstrap';

export default function CarousselMain() {
  return (
    <Container style={{width:'950px', height:'300px'}}>
    <Carousel style={{marginBottom:'80px'}}>
      <Carousel.Item >
        <img src={carousel1} style={{width:'950px', height:'300px'}} alt="carousel-img" />
      
        <div  style={{position:'absolute', width:'600px', height:'350px', top:'150px', left:'200px', borderRadius:'20px', opacity: '0.5'}}>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel2} style={{width:'950px', height:'300px'}} alt="carousel-img" />
     
        <div  style={{position:'absolute', width:'600px', height:'350px', top:'150px', left:'400px', borderRadius:'20px', opacity: '0.5'}}>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel3} style={{width:'950px', height:'300px'}} alt="carousel-img" />
      
        <div  style={{position:'absolute', width:'600px', height:'350px', top:'150px', left:'200px', borderRadius:'20px', opacity: '0.5'}}>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel4} style={{width:'950px', height:'300px'}} alt="carousel-img" />
      
        <div  style={{position:'absolute', width:'600px', height:'350px', top:'150px', left:'200px', borderRadius:'20px', opacity: '0.5'}}>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel5} style={{width:'950px', height:'300px'}} alt="carousel-img" />
       
        <div  style={{position:'absolute', width:'600px', height:'350px', top:'150px', left:'200px', borderRadius:'20px', opacity: '0.5'}}>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel6} style={{width:'950px', height:'300px'}} alt="carousel-img" />
    
        <div  style={{position:'absolute', width:'600px', height:'350px', top:'150px', left:'200px', borderRadius:'20px', opacity: '0.5'}}>
        </div>
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}
