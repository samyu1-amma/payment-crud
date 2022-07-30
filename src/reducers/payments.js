import {
    ADD_PAYMENT,
    RETRIEVE_PAYMENTS,
    RETRIEVE_VIEWALL_PAYMENTS,
    RETRIEVE_CALCULATETOTAL_PAYMENT,
     UPDATE_PAYMENT,
      DELETE_PAYMENT,
    } 
    
    from "../actions/types";
    const initialState = [];
    function paymentReducer(payments = initialState, action) {
      const { type, payload } = action;
      switch (type) {
        case ADD_PAYMENT:
          return [... payments, payload];
        case RETRIEVE_PAYMENTS:
          return payload;
       case RETRIEVE_VIEWALL_PAYMENTS:
        return payload;
       
       case RETRIEVE_CALCULATETOTAL_PAYMENT:
        return payload;
       
       case UPDATE_PAYMENT:
          return  payments.map(( payment) => {
            if ( payment.id === payload.id) {
              return {
                ... payment,
                ...payload,
              };
            } else {
              return  payment;
            }
          });
        case DELETE_PAYMENT:
          return  payments.filter(({ id }) => id !== payload.id);
        
        default:
          return payments;
      }
    };
    export default  paymentReducer;