import {APIURL} from "./URL";
import axios from 'axios';

function getProducts(){
    return axios.get(APIURL);
}
function getProductById(id){
    return axios.get(`${APIURL}${id}`);
}
function deleteProduct(id){
    return axios.delete(`${APIURL}${id}`);
}
function addproduct(data){
    return axios.post(APIURL,data);
}
export {getProducts,getProductById,deleteProduct,addproduct};