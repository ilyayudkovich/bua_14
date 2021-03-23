import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink,
    CardDeck, CardColumns,
    CardImgOverlay
  } from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';

import SlideShow  from './SlideShow'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Letter.css'

import cardpic from '../assets/background.jpg'

import joey from '../assets/joey.jpg'

import Iframe from 'react-iframe'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import image2 from '../assets/slideshow/slide_1.jpg'
import image1 from '../assets/slideshow/slide_2.jpg'
import image3 from '../assets/slideshow/slide_3.jpg'
import image4 from '../assets/slideshow/slide_5.jpg'
import image5 from '../assets/slideshow/slide_7.jpg'
import image6 from '../assets/slideshow/slide_8.jpg'



class Letter extends Component {

    constructor() {
        super();
        this.response = {
            0: {
                items: 1,
            }
        }
    }



    render() {
        return(
            <div className="content">
                <SlideShow/>
            </div>
        )
    }
}

export default Letter;