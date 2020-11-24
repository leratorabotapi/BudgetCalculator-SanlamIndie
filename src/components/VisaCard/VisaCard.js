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
                <Row align="middle">
                    <Col span={8}>
                        <ButtonBack style={buttontStyle}><Back/></ButtonBack>
                    </Col>
                    <Col span={8}>
                        <Slider>
                            <Slide index={0}>

                            <div className='slide'>
                                <Row style={{ height: "100%" }} justify="space-between">
                                <Row>
                                <div className='amount'><Balance amount={balance} size="28" fontType="H2" /></div>
                                </Row>
                                <Row justify="space-between" style={{ width: "100%" }} align="bottom" >
                                <Col span={6}>
                                <div className='cardNumber'>
                                    <Copy>***6559</Copy>
                                </div>
                                </Col>
                                <Col span={7}>
                                <div className="bank">
                                <Pill kind="default">VISA</Pill>
                                </div>
                                </Col>
                                </Row>
                                </Row>
                            </div>
                            </Slide>
                            <Slide index={1}>

                            <div className='slide'>
                                <Row style={{ height: "100%" }} justify="space-between">
                                <Row>
                                <div className='amount'><Balance amount="0" size="28" fontType="H2" /></div>
                                </Row>
                                <Row justify="space-between" style={{ width: "100%" }} align="bottom" >
                                <Col span={6}>
                                <div className='cardNumber'>
                                    <Copy>***8769</Copy>
                                </div>
                                </Col>
                                <Col span={7}>
                                <div className="bank">
                                <Pill kind="default">VISA</Pill>
                                </div>
                                </Col>
                                </Row>
                                </Row>
                            </div>
                            </Slide>
                        </Slider>
                    </Col>
                    <Col span={8}>
                        <div><ButtonNext style={buttontStyle}><Next/></ButtonNext></div>
                    </Col>
                </Row>
                <Row justify="center" className="visaFAB">

                    <Col span={3}>
                        <Button kind="icon" icon="close" aria-hidden />
                    </Col>
                    <Col span={3}>
                        <Button kind="icon" icon="add" aria-hidden />
                    </Col>
                    <Col span={3}>
                        <Button kind="icon" icon="tune" aria-hidden />
                    </Col>
                </Row>
            </CarouselProvider>
        </div>
  )
}

export default VisaCard
