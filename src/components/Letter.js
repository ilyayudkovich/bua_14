import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink,
    CardDeck, CardColumns,
    CardImgOverlay
  } from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';

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
            <CardDeck>
                <Card body outline bg="success" color="success" className="my-2 container text-center">
                <CardTitle tag="h2"  className="mb-2">Welcome, class of '14!</CardTitle>
                {/* <CardImg width='auto' src={joey} alt='Waffles/'></CardImg> */}
                </Card>
                {/* <Card body outline color="success" className="my-2 container text-center">
                    {/* <Iframe
                        url="https://docs.google.com/document/d/e/2PACX-1vT7FlDrvXG2nB54KVC2sQa9AoVVd60daqbDOe87wgb0DNM5blXFNyOpXQYlvLH1eFHdCGAAKKdrjAZb/pub?embedded=true"
                        allowFullScreen 
                        /> */}

                    {/* <AliceCarousel autoPlay responsive={this.response} infinite={true} autoPlayInterval="3000" disableButtonsControls={true} disableDotsControls={false}>
                        <img src={image1} className="sliderimg"/>
                        <img src={image2} className="sliderimg"/>
                        <img src={image3} className="sliderimg"/>
                        <img src={image5} className="sliderimg"/>
                        <img src={image6} className="sliderimg"/>
                        <img src={image4} className="sliderimg"/>
                    </AliceCarousel> */}
                {/* </Card> */}
            </CardDeck>
        )
    }
}

export default Letter;