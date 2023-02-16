import React from 'react'
import imge from '../../assets/logo512.png'
import './Modal.scss'
const Modal = ({open, close}) => {
   console.log(open)
   if(!open) return null;
  return (
    <div className="mainCtner" onClick={close}>
      <div className="modalElem" onClick={(e) => e.stopPropagation()}>
         <img src={imge} alt='modal'/>
         <div className='modalAside'>
            <span>
               <button className='closeModal' onClick={close}>&times;</button>
            </span>
            <div className='modalAside__text'>
            <p>Do you want a </p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p>
            <div className='decisionBtn'>
               <button >Yes, I want it</button>
               <button>No</button>
            </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Modal