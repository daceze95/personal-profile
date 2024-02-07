import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {

  return (
    <div className='prfle'>
      <h2>Portfolio</h2>
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
