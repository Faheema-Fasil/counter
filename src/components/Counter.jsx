import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

function Counter() {

    const[counter,setcounter]=useState(0)

    function increment() {
        setcounter(counter+1)
    }
    function reset() {
        setcounter(0)
    }
    function decrement() {
        if (!counter==0) {
            setcounter(counter-1)
        }
        
        
    }
  return (
    <div>
        <div className="container text-center mt-5">
            <h1 style={{color:"blue", fontStyle:"italic"}}>Counter-Application</h1>
            <div className="mt-5">
                <h1 className='fw-bolder '>{counter}</h1>
            </div>
            <MDBBtn className='me-1' color='success' onClick={increment}>
                Increment
            </MDBBtn>
            <MDBBtn className='me-1' color='danger' onClick={reset}>
                Reset
            </MDBBtn>
            <MDBBtn className='me-1' color='warning' onClick={decrement}>
                Decrement
            </MDBBtn>
        </div>
    </div>
  )
}

export default Counter
