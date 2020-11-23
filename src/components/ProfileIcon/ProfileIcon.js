import React from 'react'

import Icon from '../Icon/index'
import ProPic from './ProPic.png'
import Copy from '../Copy/index'
import {Row, Col } from 'antd'
import './style.css'

const picture = {
    width: '70%',
    height: 'auto',
    alignItems: 'right',
};

const name = {
    paddingTop: '2%',
    float: 'left',
};

function ProfileIcon() {
    return (
        <div className="profile">
            <Row>
                <Col span={2}>
                    <img 
                    style={picture}
                    src={ProPic} alt="profile picture"
                    />
                </Col>
                <Col span={6} style={name}>
                    <Copy fontType="Body1">Lethabo Moeketsi</Copy>
                </Col>
                <Col span={15}/>
                <Col span={1}><Icon name="search" size="large" /></Col>
            </Row>    
        </div>
    )
}

export default ProfileIcon
