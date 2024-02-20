import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cartCount = useSelector((state)=>state.CartReducer.cartValues.length)
    const totalPrice = useSelector((state)=> state.CartReducer.totalPrice)
  return (
    <div>
        <nav className ="navbar navbar-dark bg-dark">
          <div className="d-inline p-2 navbar-nav mx-auto">
              <span className="btn btn-primary" >Cart Items:{cartCount}</span> &nbsp;
             <span className="btn btn-primary">Total Price:{totalPrice}</span>
          </div>
        </nav>
    </div>
  )
}

export default Navbar