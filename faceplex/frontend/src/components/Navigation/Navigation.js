import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='f4 link dim black pa3 pointer ba b--black bw2 mr2' style={{backgroundColor: "#C1E3ED", borderWidth: "3px",borderColor: "black", borderRadius: "30px"}}>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <div>          
          <nav style={{display: 'flex'}}>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <p onClick={() => onRouteChange('about')} className='f4 link dim black pa3 pointer ba b--black bw2 mr3 ml3 .bg-white' style={{backgroundColor: "#C1E3ED", borderWidth: "3px",borderColor: "black", borderRadius: "30px"}}>About</p>
              <p onClick={() => onRouteChange('developers')} className='f4 link dim black pa3 pointer ba b--black mr2 ' style={{backgroundColor: "#C1E3ED", borderWidth: "3px",borderColor: "black", borderRadius: "30px"}}>Developers</p>
            </div>
            <div style={{marginLeft: 'auto' }}>
              <p onClick={() => onRouteChange('signin')} className='f4 link dim black pa3 pointer ba b--black bw2 mr3' style={{backgroundColor: "#C1E3ED", borderWidth: "3px",borderColor: "black", borderRadius: "30px"}}>Sign In</p>
            </div>
              <p onClick={() => onRouteChange('register')} className='f4 link dim black pa3 pointer ba b--black mr3' style={{backgroundColor: "#C1E3ED", borderWidth: "3px",borderColor: "black", borderRadius: "30px"}}>Register</p>
          </nav>
        </div>
      );
    }
}

export default Navigation;