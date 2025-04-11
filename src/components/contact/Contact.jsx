import React from 'react'
import "./Contact.css"
import message_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import whiteArrow from "../../assets/white-arrow.png"

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "60e83a10-1564-4608-a828-b079ea0686f1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); 
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='Contact' className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={message_icon} alt="" /></h3>
        <p>Got a question? Need help choosing a course or understanding admissions?
        We’d love to hear from you </p>
        <ul>
            <li> <img src={mail_icon} alt="" /> Email: info@edusity.edu.in</li>
            <li> <img src={phone_icon} alt="" /> Phone: +91-9876543210</li>
            <li> <img src={location_icon} alt="" /> Website: www.edusity.edu.in</li>
            <li> Timings: Mon–Fri | 9 AM to 5 PM</li>
        </ul>
      </div>
      <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label Your Name></label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label Phone number></label>
                <input type="phone" name='phone' placeholder='Enter your Mobile No.'required />
                <label Write your message here></label>
                <textarea name="message" id="" rows="6" placeholder='Enter you message'required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={whiteArrow} alt="" /></button>
            </form>
            <span color='black'>{result}</span>
      </div>
    </div>
  )
}

export default Contact
