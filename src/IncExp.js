import  React from 'react';
import {Outlet} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function AddButton(){
    const Navigate=  useNavigate();
    return (
        <div>
       <br/>
       
       <button style={{backgroundColor:"green"}}onClick={()=>Navigate("income")} variant="contained" className="btn btn-primary"><b>Income➕</b></button>&nbsp;&nbsp;
       <button style={{backgroundColor:"Red"}}onClick={()=>Navigate("/expenditure")} variant="contained" type="buttton" className="btn btn-primary"><b>Expenditure➖</b></button>
       <Outlet />
        <br/><br/>&nbsp;&nbsp;
       

      
       </div>
    )
}
export default AddButton;