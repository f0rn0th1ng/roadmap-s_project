import { useState } from 'react';
import './App.css';
 import CustomDropdown from './CustomDropdown'; 

function App() {

  return (
    <>
      <div className="whole_container">
        <CustomDropdown
        options={["Option1","Option2","Option3"]}
        />
      </div>
    </>
  );
}

export default App;
