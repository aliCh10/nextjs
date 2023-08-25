'use client'
import React from 'react';
import Image from 'next/image';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css'
export default function Contact() {
  return (
    <div>
       <h2 className="h1-responsive fs-1 fw-bold text-center my-4 text-5xl text-black" >Get in Touch</h2>
      <MapContainer center={[35.50367, 11.05804]} zoom={15} scrollWheelZoom={false} style={{ height: '300px' }} className='mb-'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
   
      </MapContainer>
    <div>
      <section className="mb-4 ml-7">
        <p className="text-center w-responsive mx-auto mb-5 fs-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="name" name="name" className="form-control" />
                    <label htmlFor="name" >Your name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="email" name="email" className="form-control" />
                    <label htmlFor="email"  >Your email</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input type="text" id="subject" name="subject" className="form-control" />
                    <label htmlFor="subject"  >Subject</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                    <label htmlFor="message"  >Your message</label>
                  </div>
                </div>
              </div>
            </form>
            <div className="text-center text-md-left text-white">
              <a className="btn"style={{backgroundColor:'#fd6027'}} >Send</a>
            </div>
            <div className="status"></div>
          </div>
          <div className="col-md-3 text-center d-flex align-items-center justify-content-center mb-7 fs-5">
  <ul className="list-unstyled">
    <li className="d-flex align-items-center">
      <Image src='/images/location.png' width={30} height={20} className='mr-2'></Image>
      <i className="fas fa-map-marker-alt fa-2x"></i>
      <p className="ml-2 mb-0 text-black">Mahdia, Tunisia</p>
    </li>
    <li className="d-flex align-items-center">
      <Image src='/images/telephone.png' width={23} height={20} className='mr-2'></Image>
      <i className="fas fa-phone fa-2x"></i>
      <p className="ml-2 mb-0 text-black">00 216 73 654 321</p>
    </li>
    <li className="d-flex align-items-center">
      <Image src='/images/mail.png' width={23} height={20} className='mr-2'></Image>
      <i className="fas fa-envelope fa-2x"></i>
      <p className="ml-2 mb-0 text-black">leemaWebtech@gmail.com</p>
    </li>
  </ul>
</div>

        </div>
      </section>
    </div>
    </div>
  );
}
