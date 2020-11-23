import React, { useContext } from 'react'
import TransactionContext from '../../context/transations'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { Row, Col } from 'antd'
import { Button } from '@indiefin/galaxy-button'
import { Pill } from '@indiefin/galaxy-pill'
import Back from './back'
import Next from './next'
import Copy from '../Copy'
import Balance from '../Balance'
import './style.css'

const buttontStyle = {
  border: 'none',
  background: '#fff'
}



function VisaCard () {

    const { balance } = useContext(TransactionContext)
    
  return (
        <div>
            <CarouselProvider
                naturalSlideWidth={30}
                naturalSlideHeight={16}
                totalSlides={2}
                infinite={true}
            >
                <Row>
                    <Col span={8}>
                        <ButtonBack style={buttontStyle}><Back/></ButtonBack>
                    </Col>
                    <Col span={8}>
                        <Slider>
                            <Slide index={0}>

                            <div className='slide'>
                                <Row>
                                <div className='amount'><Balance amount={balance} /></div>
                                </Row>
                                <Row>
                                <Col span={12}>
                                <div className='cardNumber'>
                                    <Copy>***6559</Copy>
                                </div>
                                </Col>
                                <Col span={12}>
                                <Pill kind="default">VISA</Pill>
                                </Col>
                                </Row>
                            </div>
                            </Slide>
                            <Slide index={1}>
                            <div className='slide'>
                            <Row>
                                <div className='amount'><Copy fontType="H2" weight="bold" className='amount'> R2 300.00</Copy> <br/></div>
                                </Row>
                                <Row>
                                <Col span={12}>
                                <div className='cardNumber'>
                                    <Copy>***1239</Copy>
                                </div>
                                </Col>
                                <Col span={12}>
                                <Pill kind="default">VISA</Pill>
                                </Col>
                                </Row>
                            </div>
                            </Slide>
                        </Slider>
                    </Col>
                    <Col span={8}>
                        <div><ButtonNext style={buttontStyle}><Next/></ButtonNext></div>
                    </Col>
                </Row>
                <Row style={contentStyle1}>
                    <Col span={6}></Col>
                    <Col span={4}>
                    <Button kind="icon" icon="close" aria-hidden />
                    </Col>
                    <Col span={4}> <Button kind="icon" icon="add" aria-hidden /></Col>
                    <Col span={4}> <Button kind="icon" icon="tune" aria-hidden /></Col>
                    <Col span={6}></Col>
                </Row>
            </CarouselProvider>
        </div>
  )
}

export default VisaCard
