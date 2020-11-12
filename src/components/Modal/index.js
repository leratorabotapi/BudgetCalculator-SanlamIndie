import React from "react"
import PropTypes from 'prop-types'
import { Button } from "../Button/Button";
import Copy from "../Copy";
import "./style.css"

const Modal = ({title, children, ...props}) => {
  const { showModal, closeModal } = props

  return (
      <div className={showModal ? "overlay" : "hide"} onClick={closeModal}>
        <div className={showModal ? "modal" : "hide"}>
            <Copy fontType="H1">{title}</Copy>
            <Copy>{children}</Copy>
            <div className="buttons">
                <Button onClick={closeModal} primary={false} label="Cancel" backgroundColor="transparent" ></Button>
                <Button onClick={closeModal} primary={true} label="Save Changes" backgroundColor="hotpink" ></Button> 
            </div>     
        </div>
      </div>
    
  )
}

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
      ]).isRequired,
    title: PropTypes.string.isRequired
  }

export default Modal
