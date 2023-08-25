import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from './footer.module.css';
import cn from 'classnames';

export default function Footer() {
  return (
    <div className={styles.footer}>
    <footer className="py-5">
      <div className={styles.logo}>
        <Image
        src='/images/leema.svg'
        width={200}
        height={200}
        ></Image>
      </div>
      <div className= {`${styles.row} row mb-5`}>
        <div className="col-6 col-md-2 mb-3 ml-5  text-white">
        <h5 className={`${styles.text} cursor-pointer mb-4`}>Fast Links</h5>
          <ul >
            <li className="nav-item mb-2"><Link href="/" className={`${styles.texto} nav-link p-0  text-white opacity-75`}>Home</Link></li>
            <li className="nav-item mb-2"><Link href="/about" className="nav-link p-0  text-white opacity-75">About</Link></li>
            <li className="nav-item mb-2"><Link href="/contact" className="nav-link p-0  text-white opacity-75">Contact</Link></li>
            <li className="nav-item mb-2"><Link href="/portfilio" className="nav-link p-0  text-white opacity-75">Portfolio</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3  text-white">
          <h1 className={`${styles.text} cursor-pointer mb-4 ml-5`}>Contact Info</h1>
          <ul className= " nav flex-column ml-5">
            <li className= "nav-item mb-2"> <Link href="#" className="nav-link p-0 text-white opacity-75 ">Local Address</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0  text-white opacity-75">Mail</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0  text-white opacity-75">Phone Numaber </Link></li>
           
          </ul>
        </div>
      
        <div className="col-md-5 offset-md-1 mb-3 ml-5 text-white">
          <form>
            <h1>Subscribe to our newsletter</h1>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2  text-white" >
              <label htmlFor="newsletter1" className="visually-hidden ">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn" type="button"  style={{background:'#fd6027'}}>Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top  text-white">
        <p>&copy; 2023 Company, Inc. All rights reserved.</p>
       <ul className="list-unstyled d-flex mr-10">
  <li className="ms-3">
    <a className="link-body-emphasis" href="#">
      <Image src="/images/fb.png" alt="Facebook Icon" width={24} height={24} />
    </a>
  </li>
  <li className="ms-3">
    <a className="link-body-emphasis" href="#">
      <Image src="/images/twitter.png" alt="twitter Icon" width={24} height={24} />
    </a>
  </li>
  <li className="ms-3">
    <a className="link-body-emphasis" href="#">
      <Image src="/images/instagram.png" alt="Instagram Icon" width={24} height={24} />
    </a>
  </li>
  <li className="ms-3">
    <a className="link-body-emphasis" href="#">
      <Image src="/images/mail.png" alt="Mail Icon" width={24} height={24} />
    </a>
  </li>
</ul>

      </div>
    </footer>
    </div>
  );
}
