import React from 'react'

const Header = () => {
  return (
    

   <div>
     <div style={{width : '100vw' , height : '70px' , backgroundColor : '#150E28' , display : 'flex' , justifyContent: 'space-between' , alignItems: 'center' , color : 'white' , fontWeight : '500'}}>
        <div  style={{ marginLeft : '10px' }}>
            <h3>get<span style={{color : '#E52EE3'}}>Linked</span></h3>
        </div>
        <div style={{ display : 'flex' , justifyContent: 'space-between' , alignItems: 'center'}}>
            <nav  style={{fontSize: '12px' , marginRight : '10px' }}>Home</nav>
            <nav  style={{fontSize: '12px' , marginRight : '10px' }}>About</nav>
            <nav  style={{fontSize: '12px' , marginRight : '10px' }}>Contact</nav>

            <button style={{width : '80px' , height : '40px' , backgroundColor : '#E52EE3' ,  color : 'white' , fontSize: '12px' , marginRight : '10px' }}>Register</button>
        </div>
    </div>
   </div>
  )
}

export default Header