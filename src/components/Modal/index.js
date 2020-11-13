import React, { useContext } from "react"
import PropTypes from 'prop-types'
import ApplicationContext from '../ApplicationContext/Application'
import { Button } from "../Button/Button";
import Copy from "../Copy";
import "./style.css"

const Modal = ({ title, children }) => {
  const { showModal, closeModal } = useContext(ApplicationContext)

  return (
      <div className={showModal ? "overlay" : "hide"} onClick={closeModal}>
        <div className={showModal ? "modal" : "hide"}>
            <div className="header">
               <Copy fontType="H4" copyColor="black" weight="light">{title}</Copy> 
            </div>
            <div className="body">
                <Copy>{children}</Copy>
            </div>
            <div className="buttons">
                <Button onClick={closeModal} primary={false} label="Cancel" backgroundColor="grey" ></Button>
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
