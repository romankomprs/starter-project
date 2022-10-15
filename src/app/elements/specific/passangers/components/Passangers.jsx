import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { fetchPassengers } from '../actions';

const Passangers =() => {    
    const dispatch = useDispatch();

    useEffect(() => {
    //   dispatch({type: "FETCH_PASSENGERS"})
      dispatch(fetchPassengers())      
    } )
    
  return (
    <div>Passangers</div>
  )
}

export default Passangers