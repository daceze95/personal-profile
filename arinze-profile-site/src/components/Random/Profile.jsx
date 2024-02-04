import React from 'react';
import './Profile.scss';
// import productArr from './profileArray';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [showMore, setShowMore] = React.useState(true);

  return (
    <div className='prfle'>
      {/* <h2>My Work</h2> */}
      <h2>Portfolio</h2>
      {/* <div className='prjtImgCrd'>
        {productArr.map((item, index) => {
          return (
            <div className='prjtCrd' key={index}>
              <img src={item.img} alt={item.alt} className='scrnShot' />
              <div className='prjtcrdTxt'>
                <h3>{item.h3}</h3>
                <p onClick={() => setShowMore(!showMore)}>
                  {item.p.length > 200 && showMore
                    ? `${item.p.slice(0, 181)}...view more`
                    : item.p}
                </p>
                <div className='iconHldr'>
                  <a href={item.github}>
                    <div className='box'>
                      <i className='bx bxl-github'></i>
                      <span>Github</span>
                    </div>
                  </a>
                  <a href={item.site} target='_blank' rel='noreferrer'>
                    <div className='box'>
                      <i className='bx bx-globe'></i>
                      <span>Visit Site</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          );
        })} 
      </div> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '200px',
        }}>
        <Link to='https://docs.google.com/presentation/d/1_soiUTaniEoQDSViBezQ8DecYqIr8xUEe9EpmXWywm4/edit?usp=sharing'>
          <button
            style={{
              padding: '10px',
              borderRadius: '10px',
              color: 'white',
              background: 'black',
              fontWeight: 'bold',
            }}>
            Project Slide
          </button>
        </Link>
        <Link to='https://youtu.be/roHnBINV_FQ?feature=shared'>
          <button
            style={{
              padding: '10px',
              borderRadius: '10px',
              color: 'white',
              background: 'black',
              fontWeight: 'bold',
            }}>
            Project Video
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
