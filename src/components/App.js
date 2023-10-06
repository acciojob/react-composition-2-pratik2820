
import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {


  const[modalShow,setModalShow]=useState(false);

  function handleCloseModal(){
    setModalShow(false)
  }



  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={()=>setModalShow(true)}>Show Modal</button>

        <Modal modalShow={modalShow} onClose={handleCloseModal}/>

    </div>
  )
}

export default App
