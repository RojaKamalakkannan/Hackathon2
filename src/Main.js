import React from 'react';
import Dashboard from './Dashboard';
import AppBar from './AppBar';
import Modal from './Modal';
import IncExp from './IncExp';
import reducer from './reducer';

function Main(){
    return(
        <div>
        <AppBar/>
        <Dashboard/>
        <Modal/> 
        <IncExp/>
        <reducer/>
        </div>
    )
}
export default Main;