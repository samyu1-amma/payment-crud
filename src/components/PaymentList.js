import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

import { retrievePayments,}from '../actions/payments'


export default function PaymentList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    
    
    const [currentPayment,setCurrentPayment]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const payments = useSelector((state)=>state.payments);
     

    useEffect(()=>{
        dispatch(retrievePayments());
      },[]);

    
    const refreshData=()=>{
        setCurrentPayment(null);
        setCurrentIndex(-1);
    }
 

    const setActivePayment = (payment,index)=>{
        setCurrentPayment(payment);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 


return(
<table>
    <thead>
        <tr>
            <th>bookingId</th>
            <th>paymentId</th>
            <th>paymentMode</th>
            <th>paymentDate</th>
            <th>paymentStatus</th>
        </tr>
    </thead>
    <tbody>
{/*  {props?.productData?.length >0 ?(
        props.productData.map((product)=>(
   */}

  {payments?.length > 0 ? (
    payments.map((payment)=>(
    <tr key={payment.paymentId}>
        <td>{payment.bookingId}</td>
        <td>{payment.paymentId}</td>
        <td>{payment.paymentMode}</td>
        <td>{payment.paymentDate}</td>
        <td>{payment.paymentStatus}</td>
        
        <td><button 
         onClick={()=>{props.editPayment(payment)}}
        className="button muted-button">Edit</button></td>
        <td><button 
        onClick={()=>props.deletePayment(payment.id)}
        className="button muted-button">Delete</button></td>
        
     </tr>))):(
        <tr>
            <td colSpan={4}>No Payment</td>
        </tr>
     )}

    </tbody>
</table>




)
     }