import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
// import MOCK_DATA from './MOCK_DATA.json'
import './Sample.scss';
import Modal from './Modal';

const Sample = () => {
  // const [value, setValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  // const list = [];

  // useEffect(() => {
  const clickHandler = () => {
    return setOpenModal(true);
  };

  // setTimeout(() => {
  // clickHandler();
  // }, 5000);
  // }, [openModal]);

  // let a, b, c;

  // MOCK_DATA.map(item =>
  //   setList({ item.id, item.first_name})
  // )

  // console.log(list);

  // const handleChange = (e) => {
  //   setValue(e.target.value)
  // }

  // useEffect(()=>{
  //   MOCK_DATA.filter(val => {
  //     if(value == ""){
  //       return setList(val);
  //     }else{
  //       if(val.toUpperCase().includes(value.toUpperCase()) ){
  //         return setList(val);
  //       }
  //     }
  //   })
  // }, [list])

  // let JSONDATA = MOCK_DATA.map(vl => vl.first_name);
  // console.log(JSONDATA)

  return (
    <div>
      <div className='container'>
        {/* <input type="text" onChange={handleChange} placeholder="Search..."/> */}
        {/* <div>
          {JSONDATA.filter((val) => {
            if(val == ""){
              return val;
            }else{
              if(val.toUpperCase().includes(value.toUpperCase()) ){
                 return val;
               }
            }
          }).map((item, index) => {
            // console.log(item)
              
              a =   item.slice(0,item.indexOf(value));
              b = item.substr(item.indexOf(value), value.length);
              c =   item.slice((a + b).length);

            return <p key={index} ><Link to={`/${item.toLowerCase()}`} > {a}<span style={ value=="" ? {backgroundColor: "rgb(255,255,255)", padding:"2px", display: "none"}:{backgroundColor: "rgba(255,0,0, 0.2)", padding:"2px"} }>{b}</span>{c} </Link></p>
            })
          }

        </div> */}
        <button onClick={clickHandler}>Modal</button>
        <Modal open={openModal} close={() => setOpenModal(false)} />
      </div>
    </div>
  );
};

export default Sample;
