import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink,
    CardImgOverlay
  } from 'reactstrap';

import cardpic from '../assets/background.jpg'
import buapic from '../assets/bua_logo.png'
import joey from '../assets/joey.jpg'

import '../css/Letter.css'

export default class Letter extends Component {

    render() {
        return(
            <Card className="border-0">
                <CardImg width='50%'src={joey} alt='Waffles/'></CardImg>
                <div className="container">
                    <CardImgOverlay className=" d-flex align-items-top">
                        <CardTitle className=" h2 text-black mb-2">Welcome, class of '14!</CardTitle>
                        <CardText>How you doing?</CardText>
                        {/* <Button>Survey is here!</Button> */}
                    </CardImgOverlay>
                </div>
            </Card>
        )
    }
}