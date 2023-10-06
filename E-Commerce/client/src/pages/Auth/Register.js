import React ,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios  from "axios";
import {  useNavigate} from 'react-router-dom';
import { toast } from 'react-hot-toast';
import "../../styles/Authstyles.css";
 const Register = () => {
    const[name,setName] =useState("");
    const [email,setEmail]=useState("");
    const[password,setPassword] =useState("");
    const [phone,setphone] =useState("");
    const[address,setAddress] =useState("");
    const[answer,setAnswer] =useState("");
    const navigate = useNavigate();

    //Form Function
    const handleSubmit = async(e)=>
    {
        e.preventDefault();
        try{
            const res=await axios.post('/api/v1/auth/register', 
            {name,
              email,
              password,
              phone,
              address,
            answer})
            if(res && res.data.success)
            {
              toast.success(res.data.message)
              navigate('/login');
            }
            else
            {
              toast.error(res.data.message)
            }
        }
        catch(error)
        {
          console.log(error)
          toast.error('Something went wrong')
        }
        // toast.success('Register Successfully')
    };
    

  return (
    <Layout title={'Register Ecommerce'}>
       <div className="form-container">

      <form onSubmit={handleSubmit}>
  <div className="mb-3">
  <h1 className='title'>Registration Form</h1>
  <input
     type="text" 
     value={name}
     onChange={(e)=>setName(e.target.value)}
     className="form-control"
      id="exampleInputName" 
      placeholder='Enter Your Name' 
      require
      />
    </div>

   <div className="mb-3">
   <input 
   type="email" 
   value={email}
   onChange={(e)=>setEmail(e.target.value)}
   className="form-control"
    id="exampleInputEmail1" 
    placeholder='Enter Email' 
    require
    />
</div>
  
  <div className="mb-3">
    <input
     type="password" 
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
    className="form-control"
     id="exampleInputPassword1" 
     placeholder='Enter Password' 
     require
     />
  </div>

  <div className="mb-3">
  <input
   type="text" 
   value={phone}
   onChange={(e)=>setphone(e.target.value)}
   className="form-control" 
   id="exampleInputPhone"
   placeholder='Enter  Mobile Number' 
   require />
   </div>

   <div className="mb-3">
    <input 
    type="text" 
    value={address}
    onChange={(e)=>setAddress(e.target.value)}
    className="form-control"
     id="exampleInputAddress" 
     placeholder='Enter  Address'
     required />
</div>
 <div className="mb-3">
    <input 
    type="text" 
    value={answer}
    onChange={(e)=>setAnswer(e.target.value)}
    className="form-control"
     id="exampleInputAddress" 
     placeholder='What is your Best Friend Name'
     required />
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

       </div>
    </Layout>
  );
};
export default Register;
