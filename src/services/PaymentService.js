import http from "../http-common";

const getAll = () => {
  return http.get("/viewAllPayments");
};


const getcalculateTotalPayment = id => {
    return http.get("/calculateTotalPayment");
  };
 
  const create = data => {
  return http.post("/addPayment", data);
};
 const update = (id, data) => {
  return http.put(`/updatePayment/${id}`, data); 
}; 


const remove = id => {
  return http.delete(`/deletePayment/${id}`);
};


/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/
const PaymentService = {
  getAll,
  
  getcalculateTotalPayment,
  create,
  remove,
  update,
  
  //removeAll,
  //findByTitle
  //you can add more actions here
};
export default PaymentService;