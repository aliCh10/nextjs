'use client' 
import Image from 'next/image';
import Link from 'next/link';
import CountUp from 'react-countup';
import Contact from './contact/page';
import styles from'./app.module.css'
import Portfolio from './portfolio/page';
export default function Home() {
  const backgroundImageUrl = '/images/cover'; 

  const containerStyle = {
    background: `url(${backgroundImageUrl}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  };

  return (
      <div className= {`container`}>
        <div className='row'>
        <div className='col-md-6 d-flex justify-content-center align-items-center flex-column mt-14'>
  <h1 className='text-center text-3xl fw-bold fs-1 mb-3' style={{ color: 'rgb(23 37 84)' }}>Welcome to our website</h1>
  <p className='text-2xl text-center fs-2 mb-3' style={{ color: '#fd6027' }}>We are here for any Question</p>
  <button className="btn mb-4" style={{ background: '#fd6027' }}>
    <Link href="/contact" style={{ textDecoration: 'none', color: 'white' }}>
      Contact Us
    </Link>
  </button>
</div>

<div className='col-md-6 mt-5 mb-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Image src='/images/cover.jpg' height={600} width={600} alt='home cover'></Image>
</div>

        <div className='card-container'>
           <div className='title-container'>
            <h1 className='text-2xl text-center fw-semibold fs-1 mb-3' style={{color:'rgb(23 37 84)'}} > Our Services</h1>
            <p className='fs-2 text-center text-black mb-4'> With more than 10 years of experience we can deliver the best product development.</p>
           </div>
           </div>
           <div className="row mb-4 text-center">
  <div className="col-sm-6 mb-4 d-flex justify-content-center cursor-pointer"> 
  <div className="card d-flex align-items-center mb-2" style={{ width: '18rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <Image src='/images/code.png' width={30} height={30} alt='code' />
          <h5 className="card-title text-center fw-bolder mb-0 ms-2">Web Development</h5>
        </div>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link href="#" className="card-link text-primary text-decoration-underline">See More</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-4 d-flex justify-content-center cursor-pointer"> 
  <div className="card d-flex align-items-center mb-2" style={{ width: '18rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <Image src='/images/mobile-app.png' width={30} height={30} alt='code' />
          <h5 className="card-title text-center fw-bolder mb-0 ms-2">Mobile Development</h5>
        </div>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link href="#" className="card-link text-primary text-decoration-underline" >See More</Link>
      </div>
    </div>
  </div>
</div>

</div>
<h1 className='text-2xl text-center fw-semibold fs-1 mb-3' style={{color:'rgb(23 37 84)'}} > Leema Webtech in a few numbers


</h1>
<section className="align-items-center justify-cente pb-5">
            <div className="container ">
                <div className="row">
                <div className="col-md-3 col-sm-6 text-center d-flex flex-column align-items-center  ">
                      <Image src='/images/done.png' height={40} width={40} alt='smile' className='mb-2' ></Image>
                      <h1 className='text-3xl  fs-1 '>
                         <CountUp start={0} end={250} duration={3}></CountUp>
                      </h1>
                        <p className="counter-title text-xl">Projects done </p>
                    </div>
                <div className="col-md-3 col-sm-6 text-center d-flex flex-column align-items-center  ">
                    <Image src='/images/smile.png' height={40} width={40} alt='smile'className='mb-2' ></Image>

                      <h1 className='text-3xl fs-1'>
                         <CountUp start={0} end={240} duration={3}></CountUp>
                      </h1>
                        <p className="counter-title text-xl ">Happy clients </p>
                    </div>
                <div className="col-md-3 col-sm-6 text-center d-flex flex-column align-items-center  ">
                    <Image src='/images/exp.png' height={40} width={40} alt='smile' className='mb-2'></Image>
                      <h1 className='text-3xl fs-1'>
                         <CountUp start={0} end={10} duration={3}></CountUp>
                      </h1>
                        <p className="counter-title text-xl ">Years of experience </p>
                    </div>
                <div className="col-md-3 col-sm-6 text-center d-flex flex-column align-items-center  ">
                    <Image src='/images/awards.png' height={40} width={40} alt='smile' className='mb-2'></Image>
                      <h1 className='text-3xl fs-1'>
                         <CountUp start={0} end={100} duration={3}></CountUp>
                      </h1>
                        <p className="counter-title text-xl">awards </p>
                    </div>
                </div>
            </div>
        </section>
        <Portfolio />

        </div>
  );
}

