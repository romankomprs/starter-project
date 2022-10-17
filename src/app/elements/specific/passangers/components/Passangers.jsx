import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { fetchPassengers } from '../actions';
import { selectUser } from '../reducers/passangers';
import { useSelector } from 'react-redux'

const Passangers = () => {    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPassengers())      
    },[dispatch] )
    
    const selPassengers = useSelector(selectUser)
    console.log("selPassengers:", selPassengers)
    

  return (
    <>
        <div>Passangers component</div>    
    </>
  )
}

export default Passangers