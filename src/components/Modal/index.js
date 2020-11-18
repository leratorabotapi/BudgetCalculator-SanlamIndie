import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import TransactionContext from '../../context/transations'
// import { Button } from "../Button/Button";
import { Button } from '@indiefin/galaxy-button'
import Copy from '../Copy'
import './style.css'

const Modal = ({ title, children }) => {
  const { showModal, closeModal } = useContext(TransactionContext)

  return (
      <div className={showModal ? 'overlay' : 'hide'} onClick={closeModal}>
        <div className={showModal ? 'modal' : 'hide'}>
            <div className="header">
               <Copy fontType="H4" copyColor="black" weight="light">{title}</Copy>
            </div>
            <div className="body">
                <Copy>{children}</Copy>
            </div>
            <div className="buttons">
                <Button handleClick={closeModal} color="blue" size="regular" kind="filled">Save Changes</Button>
                <Button handleClick={closeModal} kind="outline">Cancel</Button>
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
