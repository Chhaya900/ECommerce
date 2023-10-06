import React from 'react';
import Layout from '../components/Layout/Layout';
import {BiMailSend , BiPhoneCall , BiSupport} from 'react-icons/bi';
import { About } from './About';

export const Contact = () => {
  return (
    <Layout title={"Contact_us"}>
        
     <div className='row contactus'>
     <div className='col-md-6'>
      <img 
      src="/images/cont.jpg"
      alt ="Contact Us"
      style={{width: "100%"}}
      />
     </div>
<div className="col-md-4 ">
<div className='row2'>
  <h1 className="bg-dark p-2 text-white text-center">Contact Us</h1>
  <p className="text-justify mt-2 pad" >
   Any query and information about product feel free to call anytime we 24*7 available
  </p>
  <p className='mt-3 pad' >
<BiMailSend/>:www.help@eccomerc.com
  </p>
  <p className='mt-3 pad'>
<BiPhoneCall/>:9005540593
  </p>
  <p className='mt-3 pad'>
<BiSupport/>:1600-0000-00000(toll free)
  </p>
  </div>
</div>
    </div>
    </Layout>
  );
}
export default Contact;