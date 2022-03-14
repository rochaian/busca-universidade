
import React from 'react';
import UniversitiesList from './components/UniversitiesList/';
import logo from './assets/images/logo.svg';


export default function App (){

  return (
      <>
      <div className="body" style={{height: '100vh', background: 'linear-gradient(0, #180A29 0%, #2A004F', padding: '5em auto'}}>
        <img src={logo} alt=""/>
          <div className='container' style={{width: '30em', padding: '10em 0'}}>
            
              <h1 style={{color: '#ffffff'}}>Busca Universidades</h1>
              
              <UniversitiesList message='teste'/>
          </div>
      </div>
      
      </>
        
    );
}
