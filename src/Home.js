import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// import Main from "../Main";
// import Product from "../Product";
function Home() {
  return (
    <div className="home">

      <div className="home__container">
        <img className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="image not reloaded"
        />
      </div>
      <div className='types'>
        <ul>
          <li className='types-all'>
            <Link to='/Featured' className='Home-links1'>
              Featured
            </Link>
            </li>
          <li className='types-all'>
            <Link to='/Popular' className='Home-links2' >
              Popular
            </Link>
          </li>
        </ul>
      </div>

<div className='description'>
    <p className='des'>Welcome to</p>
    <p className='des'>Our site</p>
    <p className='des'> Have a Good Time</p>
   

</div>


    </div>
    

    // <>
    // <Main />
    // <Product />
    // </>
  );
}

export default Home;