import React from 'react'
import Nav from "../../ProjectReacta/nav/nav"
import './homec.css'
// import { relative } from 'path'
import Footer from './footer/footer'



function homec() {
  return (
    <div>
      <Nav/>
      <div className='image-contact'>
        <h1 className='header-contactuss'>Contact Us</h1>
        <p className='par-contactuss'>We’d love to hear from you! Whether you have questions about our coding courses, <br/> need help choosing the right program, or want to partner with us, we’re here to assist.</p>
      </div>
      <div style={{display:"flex", justifyContent:"center",gap:"90px",textAlign:'center',position:"relative",top:"160px"}}>
        <div className='call-co'>
            <img className='contact-icon' src="https://i.imgur.com/trrZ3lK.png"/>
            <h2 className='h2-contactus'>Visit Us</h2>
            <h5 style={{color:"gray"}}>lorem ipsum lorem ipsum<br/> lorem ipsum lorem ipsum</h5><br/>

           <h5 style={{color:"#f95c2d"}}>G2P6+5Q9, Aqaba</h5>
        </div>
        <div className='call-co'>           
             <img className='contact-icon' src="https://i.imgur.com/xYlQFSB.png"/>
            <h2 className='h2-contactus'>Call Us</h2>
            <h5 style={{color:"gray"}}>lorem ipsum lorem ipsum<br/> lorem ipsum lorem ipsum</h5><br/>

            <h5 style={{color:"#f95c2d"}}>+962777801212</h5></div>
        <div className='call-co'>
        <img className='contact-icon' src="https://i.imgur.com/dXt4Ugv.png"/>
            <h2 className='h2-contactus'>Message Us</h2>
            <h5 style={{color:"gray"}}>lorem ipsum lorem ipsum<br/> lorem ipsum lorem ipsum</h5><br/>

            <h5 style={{color:"#f95c2d"}}>
            codingschoolaqaba.ojo@orange.com</h5>
        </div>
      </div>
      <div className='finall' >
        <div className='map-contactt'>    
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7455.383283951614!2d35.01195174944921!3d29.53474539675825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150071875a9fca41%3A0xf5d61d999f967371!2sOrange%20Digital%20Village%20Aqaba!5e0!3m2!1sen!2sjo!4v1738663284815!5m2!1sen!2sjo" width={600} height={350} style={{border: 0, position:"relative", left:"20px" , borderRadius:"10px"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>


        <div className='form-contactt'>
<form  style={{display:"grid" , position:"relative", right:"140px",color:"white",top:"30px"}}>
        <label>First Name</label>
        <input className='input-contact' />
        <label>Last Name</label>
        <input className='input-contact' />
        <label>Email</label>
        <input className='input-contact'/>
        <label>Message</label>
        <textarea />
        <button  className='input-button' type="submit">Send</button>
        </form>
        </div>
      </div>
<div>
<div  style={{position:"relative",top:"300px"}}>

<Footer/>

</div>
</div>




    </div>

  )
}

export default homec