import { faDriversLicense } from '@fortawesome/free-solid-svg-icons';
import React , {useContext, useEffect, useState} from 'react'

export default function EditPaymentForm(props){
     const [payment,setPayment] =useState(props.currentPayment)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setPayment({...payment,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updatePayment(payment.paymentId,payment);
    }


   

     return (
        <form onSubmit={submitHandler}>
         
<label>Id</label>
<h1>{props.currentPayment.paymentId}</h1>
 
<label>BookingId</label>
<input 
type='number'
name='bookingId'
value={payment.bookingId}
onChange={handleInputChange}/><br></br>
<br></br>

<label>PaymentMode</label>
<select name="paymentMode" id="paymentMode" value={payment.paymentMode}
onChange={handleInputChange}
>

    <option value="Card">Card</option>
    <option value="Cash">Cash</option>
   
  </select>
 <br></br>
  <br></br>

  <label>PaymentDate</label>
<input 
type='date'
name='paymentDate'
value={payment.paymentDate}
onChange={handleInputChange}/><br></br>
<br></br>


<label>PaymentStatus</label>
<input 
type='text'
name='paymentStatus'
value={payment.paymentStatus}
onChange={handleInputChange}/><br></br>
<br></br>



<button>Update Payment</button>
<button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button></form>


   )




}