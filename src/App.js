import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import PaymentList from './components/PaymentList'
import { useState,useEffect } from 'react';
import apiClient from './http-common'
import {BrowserRouter, Routes ,Route ,  Link ,useNavigate } from 'react-router-dom'
import AddPaymentForm from "./components/AddPaymentForm";


import EditPaymentForm from './components/EditPaymentForm';
function App() {
  
const [payments,setPayments]=useState([]);

    
    useEffect(()=>{apiClient.get('/viewAllPayments').then((response)=>{
      setPayments(response.data);
    })},[])

    
const [editing,setEditing]=useState(false);

const initialFormState = {
  
  bookingId:0,
  paymentId:0,
    paymentMode:'',
   paymentDate:'',
   paymentStatus:''
 

}
const [currentPayment,setCurrentPayment] 
     =useState(initialFormState);

     
async function addPayment(payment){
  try{
  const response=await apiClient.post('/addPayment',payment);
    setPayments([...payments,response.data]);
    console.log(payments);
    
  }catch(err){
    console.log(err)
  }
  
}



async function deletePayment(id){
  await apiClient.delete(`/deletePayment/${id}`);
    setPayments(payments.filter((payment)=>payment.paymentId !== id));
  }
  
  const editPayment=(payment)=>{

    setEditing(true);
      setCurrentPayment
      ({paymentId:payment.paymentId,bookingId:payment.bookingId,paymentMode:payment.paymentMode,
        paymentDate:payment.paymentDate,paymentStatus:payment.paymentStatus})
     
  }
   
  const updatePayment = (id,updatedPayment)=>{
  
    setEditing(false);
    apiClient.put(`/updatePayment/${id}`,updatedPayment).then((response)=>
    {
  
      console.log('payment updated');
      setPayments(payments.map((payment)=>
    (payment.paymentId === id ? updatedPayment : payment)));
    })
    
  } 
  

  return (<div>
        
    <div className='container'>
    <h1>Payment Crud app with hooks</h1>
    <div className='flex-row'>
      <div className='flex-large'>
        {editing ? (
        <div>
          <h2>Edit Payment Form </h2>
          <EditPaymentForm 
           setEditing={setEditing}
           currentPayment={currentPayment}
           updatePayment={updatePayment}
           />
           </div>):(


   
    <BrowserRouter>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/payments" className="navbar-brand">
          React App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/viewAllPayments"} className="nav-link">
              Payments
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addPayment"} className="nav-link">
              Add Payment
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
        <Route path='/' element={<PaymentList 
    paymentData={payments} 
        editPayment={editPayment}
         deletePayment={deletePayment} />} ></Route>
          <Route exact path="addPayment" element={<AddPaymentForm addPayment={addPayment}/>} />
         
         <Route path='/viewAllPayments' element={<PaymentList 
    paymentData={payments}
   editPayment={editPayment}
         deletePayment={deletePayment} />}>
          

         </Route>
          <Route path="/updatePayment/:id" element={<EditPaymentForm /> }></Route> 
        </Routes> 
      </div>
    
      </BrowserRouter>
    )}</div></div></div></div>
)}

export default App;