import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Currencies.css'

const Currencies = () => {
  const { dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
      dispatch({
          type: 'CHG_CURRENCY',
          payload: val,
      })
    }
    

    return (
      <div className='alert alert-secondary'>
          <label style={{marginLeft: '1rem' , backgroundColor:'#93e499'}} >Currency
        <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{backgroundColor:'#90EE90', color:'#2b2d2f'}}>
          <option style={{color:'black'}} value="£">£ Pound</option>
          <option style={{color:'black'}} value="$">$ Dollar</option>
          <option style={{color:'black'}} value="€">€ Euro</option>
          <option style={{color:'black'}} value="₹">₹ Rupee</option>
        </select>	
        </label>
          
      </div>
    );
  };

export default Currencies;