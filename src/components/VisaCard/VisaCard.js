import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Row, Col } from 'antd';
import { Button } from '@indiefin/galaxy-button'
import Back from './back'
import Next from './next'
import Copy from '../Copy'
import './style.css'



const contentStyle = {
    alignContent: 'center',
  };

const contentStyle1 = {
    alignContent: 'center',
};
const buttontStyle = {
    paddingTop: '50px',
    border: 'none',
    background: '#fff',
  };  

   

function VisaCard() {
    return (
        <div>
            <CarouselProvider
                naturalSlideWidth={30}
                naturalSlideHeight={25}
                totalSlides={3}
            >
                <Row>
                    <Col style={contentStyle} span={8}>
                        <ButtonBack style={buttontStyle}><Back/></ButtonBack>
                    </Col>    
                    <Col style={contentStyle} span={8}>
                        <Slider>
                            <Slide index={0}> 

                            <div className='slide'>
                                <div className='amount'><Copy fontType="H2" weight="bold" className='amount'> R2 300.00</Copy> <br/></div>
                                <div className='cardNumber'>***6559</div>
                                <div className='visa'>Visa</div>
                            </div>
                            </Slide>
                            <Slide index={1}> 
                            <div className='slide'>
                                <div className='amount'><Copy fontType="H2" weight="bold"> R2 300.00</Copy></div> 
                                <div className='cardNumber'>***6559</div>
                                <div className='visa'>Visa</div>
                            </div>
                            </Slide>
                            <Slide index={2}> 
                            <div className='slide'>
                                <div className='amount'><Copy fontType="H2" weight="bold"> R5 000.00</Copy></div>
                                <div className='cardNumber'>***6559</div>
                                <div className='visa'>Visa</div>
                            </div>
                            </Slide>
                        </Slider>
                    </Col>
                    <Col style={contentStyle1} span={8}>
                        <ButtonNext style={buttontStyle}><Next/></ButtonNext>
                    </Col>
                </Row>

                <Row >
                    <Col span={6}></Col>
                    <Col span={4}> <Button kind="fab"/></Col>
                    <Col span={4}> <Button kind="fab"/></Col>
                    <Col span={4}> <Button kind="fab"/></Col>
                    <Col span={6}></Col>
                </Row>
            </CarouselProvider>
        </div>
    )
}

export default VisaCard
