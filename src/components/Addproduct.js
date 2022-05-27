import React,{useState} from 'react';
import { addproduct } from '../config/Myservice';
import { useNavigate } from 'react-router-dom';

export default function Addproduct() {
    const [state,setState] = useState({name: '',price:'',quantity:'',image:''})
    const navigate = useNavigate();
    const handler = (event)=>{
        let {name,value} = event.target;
        setState({...state,[name]:value})
    }
    const postAddProduct = (event)=>{
        event.preventDefault();
        addproduct(state)
        .then(res => {
            if(res){
                alert("Product Added");
                navigate("/products");
            }
        })
    }
  return (
    <div className='container'>
        <h2>Addproduct</h2>
        <form onSubmit={postAddProduct}>
            <div className='form-group'>
                <label>Name </label>
                <input type="text" className='form-control' name="name" onChange = {handler}/>
            </div>
            <div className='form-group'>
                <label>Price </label>
                <input type="number" className='form-control' name="price" onChange = {handler}/>
            </div>
            <div className='form-group'>
                <label>Quantity </label>
                <input type="text" className='form-control' name="quantity" onChange = {handler}/>
            </div>
            <div className='form-group'>
                <label>ImageUrl</label>
                <input type="text" className="form-control" name="image" onChange = {handler}/>
            </div>
            <input type="submit" value="Add" className='btn btn-success mt-3'/>
        </form>
    </div>
  )
}
