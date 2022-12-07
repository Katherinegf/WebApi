import React from 'react'
import './App.css';
import UserProvider from './contexts/UserContext';

function App () {

  return (

<UserProvider>
    <div className="container mt-5">

    </div>

</UserProvider>
   
  );
}

export default App