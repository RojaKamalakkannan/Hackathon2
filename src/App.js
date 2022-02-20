import { BrowserRouter} from 'react-router-dom';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Main from './Main';
import {useNavigate} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import React, { useReducer,useState } from 'react';
import { reducer } from './reducer';
function App() {
   

 
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Main />}>  </Route>
        <Route path="/Income" element={<Income/>}/>
        <Route path="/expenditure" element={<Expenditure/>}/>
        
      </Routes>
    
      </BrowserRouter>
      
    </div>
  );
}


export default App;


export function Income() {

  const [inputField , setInputField] = useState({
    value: "",
    val1:"",
    val2:"",
  });
  const inputsHandler = (e) => {
    setInputField({...inputField, [e.target.name]:e.target.value});
  }
 const [state, dispatch] = useReducer(reducer, inputField);



  const Navigate = useNavigate();
  return (
    <>
     <h3> Add Cash in Entry</h3>     
     <label>Personal</label>
     <input type="text" name="val1" value={inputField.val1} onChange={(e)=>{setInputField(state.val1=(e.target.value))}}></input> <br/> <br />
     <label>Office</label>
     <input type="text"  name="val2"  value={inputField.val2} onChange={(e)=>{setInputField(state.val2=e.target.value)}}></input><br/><br/>

     
     <h6>
            <b>Net Balance   </b><br/>
            
                <input value={state.value} ></input><br/><br/>
              
        </h6>
      
      
      <button variant="primary" className="btn btn-primary" onChange={inputsHandler} onClick={() => dispatch({ type: 'ADDITION' ,payload: {num1: state.val1 , num2: state.val2} })}>
        {' '}
        save {' '}
      </button>{' '}&nbsp;&nbsp;&nbsp;
     {/* <label>Amount</label> &nbsp;&nbsp;
     <input type="text"></input><br/><br/>


      <div>
     <label>Category</label>&nbsp;&nbsp;
      
     
     <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      catagories
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Personal</Dropdown.Item>
      <Dropdown.Item  href="#/action-1">Office</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
     </div><br/>

     <label>Payment</label><br/><br/>
     <button className="btn btn-primary"  variant="contained" style={{borderRadius:"10px"}}>Cash</button>&nbsp;&nbsp;
     <button className="btn btn-primary"  style={{borderRadius:"10px"}}>Online</button>
     
     <br/><br/>

     <button className='btn btn-primary' variant="contained">save</button>&nbsp;&nbsp; */}
     <button onClick={()=>Navigate("/")} className="btn btn-primary" variant="contained">Back</button>  
    </>
  );
}


export function Expenditure() {

  const [inputField , setInputField] = useState({
    value: "",
    val1:"",
    val2:"",
  });
  const inputsHandler = (e) => {
    setInputField({...inputField, [e.target.name]:e.target.value});
  }
 const [state, dispatch] = useReducer(reducer, inputField);

  const Navigate = useNavigate();
  return (
    <>       
      <h3> Add Cash Out Entry </h3>    
     

      <label>Personal</label>
     <input type="text" name="val1" value={inputField.val1} onChange={(e)=>{setInputField(state.val1=(e.target.value))}}></input> <br/> <br />
     <label>Office</label>
     <input type="text"  name="val2"  value={inputField.val2} onChange={(e)=>{setInputField(state.val2=e.target.value)}}></input><br/><br/>

     
     <h6>
            <b>Net Balance   </b><br/>
            
                <input value={state.value} ></input><br/><br/>
              
        </h6>
      
      
      <button variant="primary" className="btn btn-primary" onChange={inputsHandler} onClick={() => dispatch({ type: 'ADDITION' ,payload: {num1: state.val1 , num2: state.val2} })}>
        {' '}
        save {' '}
      </button>{' '}&nbsp;&nbsp;&nbsp;
       {/* <label>Amount</label> &nbsp;&nbsp;
     <input type="text"></input><br/><br/>


      <div>
     <label>Category</label>&nbsp;&nbsp;
      
     
     <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      catagories
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Personal</Dropdown.Item>
      <Dropdown.Item  href="#/action-1">Office</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
     </div><br/>

     <label>Payment</label><br/><br/>
     <button className="btn btn-primary"  variant="contained" style={{borderRadius:"10px"}}>Cash</button>&nbsp;&nbsp;
     <button className="btn btn-primary"  style={{borderRadius:"10px"}}>Online</button>
     
     <br/><br/> 
     <button className='btn btn-primary' variant="contained">save</button>&nbsp;&nbsp;  */}
      <button onClick={()=>Navigate("/")} className="btn btn-primary" variant="contained">Back</button>  
    </>
    
  );
}


