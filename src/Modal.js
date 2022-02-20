import React from 'react';
import './App.css';
// import {useNavigate} from 'react-router-dom';

  
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

// const navigate = useNavigate();


  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}  &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={handleClose}type="button" variant="success" >
      Income
        </button><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;

    
        <button onClick={handleClose} type="button" variant="danger" >
      Expenditure
        </button><br/>
        <h3>
          <br/>
        </h3>
      </section>
    </div>
  );
};

export default Modal;