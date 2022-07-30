import {
    ADD_PAYMENT,
  RETRIEVE_PAYMENTS,
  RETRIEVE_VIEWALL_PAYMENTS,
  RETRIEVE_CALCULATETOTAL_PAYMENT,
   UPDATE_PAYMENT,
    DELETE_PAYMENT,
  
} 
from "./types";
import  PaymentService from "../services/PaymentService";
//we are creating action objects so that they can be dispatched to the store
//addProduct --dispatch object from where -
// when we  bindActionCreators -- destructured object of diff vars and functions and to that we are tying the dispatch
//useDispatch hook , which will give us the constant of dispatch

export const addPayment = (paymentId,paymentMode,paymentDate,paymentStatus,bookingId) => async (dispatch) => {
  try {
    //first the call to back end server is happening
    //data of product type and we receive server response

    const res = await PaymentService.create({ paymentId,paymentMode,paymentDate,paymentStatus,bookingId});
    dispatch({
      type: ADD_PAYMENT,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrievePayments = () => async (dispatch) => {
  try {
    const res = await PaymentService.getAll();
    dispatch({
      type: RETRIEVE_PAYMENTS,
      payload:res.data,
    });
  }


    catch(err){return Promise.reject(err);}};
    export const retrieveViewAllPayments = () => async (dispatch) => {
      try {
        const res = await PaymentService.getViewAllPayments();
        dispatch({
          type: RETRIEVE_VIEWALL_PAYMENTS,
          payload:res.data,
        });
       
      
    }

    catch(err){return Promise.reject(err);}};
    export const retrieveCalculateTotalPayment = () => async (dispatch) => {
      try {
        const res = await PaymentService.getCalculateTotalPayment();
        dispatch({
          type: RETRIEVE_CALCULATETOTAL_PAYMENT,
          payload:res.data,
        });
       
      
    }

catch(err){return Promise.reject(err);}};


export const updatePayment = (id, data) => async (dispatch) => {
  try {
    const res = await PaymentService.update(id, data);
    dispatch({
      type: UPDATE_PAYMENT,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const  deletePayment = (id) => async (dispatch) => {
  try {
    await PaymentService.remove(id);
    dispatch({
      type: DELETE_PAYMENT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};