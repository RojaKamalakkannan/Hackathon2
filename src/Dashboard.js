import React, { Component } from "react";
import {Button} from "react-bootstrap";
import Modal from './Modal';
import './App.css';




class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
};
    render() {
        return (
          <main>

         <Modal show={this.state.show} handleClose={this.hideModal}><br/>
              <h3>&nbsp;&nbsp;&nbsp;&nbsp;Add Income and Expenses</h3>
         </Modal>

         <div>

                   <h3 > ADD INCOME AND EXPENDITURE </h3>
              
              <div style={{dispaly:"flex",alignContent:"center"}}>

              <Button onClick={this.showModal} style={{dispaly:"flex",alignContent:"center"}}>ADD </Button><br/><br/>
              
               </div>  
        </div>    
      
     

          </main>
        );
      }
     

}

export default Dashboard;