import ProPic from './ProPic.png'
import Copy from '../Copy/index'
import {Row, Col } from 'antd'
import './style.css'

import React from 'react'

const picture = {
    width: '50%',
    height: 'auto',
  };

const name = {
    paddingTop: '4%',
};  

function ProfileIcon() {
    return (
        <div className="profile">
            <Row>
                <Col span={3}>
                    <img 
                    style={picture}
                    src={ProPic} alt="profile picture"
                    />
                </Col>
                <Col span={6} style={name}>
                    <Copy fontType="Body1">Wolfgang Mozart</Copy>
                </Col>
                <Col span={15}/>
            </Row>    
        </div>
    )
}

export default ProfileIcon
