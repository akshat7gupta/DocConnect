import React from 'react'

const Profile = ({imageUrl}) => {
  console.log("/whoweare.png", imageUrl);
  return (
    <>
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="whoweare" />
      </div>
      <div className="banner">
        
        <h3>Who We Are</h3>
        <p>Welcome to ZeeCare Hospital Management, where we are dedicated to providing exceptional healthcare services with a focus on compassion, innovation, and excellence.
        At ZeeCare, we understand that healthcare is not just about treatment but about comprehensive well-being. Our team of highly skilled medical professionals, cutting-edge technology, and patient-centered approach ensures that every patient receives the highest quality of care tailored to their individual needs. </p>
        <h5><p>Our Mission & Our Vision</p></h5>
       <h5> <p>To Make India Disease Free</p></h5>
        <p>Our mission is to enhance the health and well-being of the communities we serve through integrated clinical practice, education, and research. We are committed to providing accessible, affordable, and high-quality healthcare to all.
        We strive to be the leading healthcare provider, recognized for our exceptional patient care, continuous improvement, and commitment to innovation. Our vision is to create a healthier future for everyone by fostering a culture of excellence and compassion.</p>
       <h6> <p>Eat Healthy!  Excercise Daily!</p></h6>
             </div>
    </div>
  </>
  )
}

export default Profile