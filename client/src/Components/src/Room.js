import React, { useEffect, useState } from 'react';
import './Room.css';
import TextEditor from './Components/TextEditor';
import Zego from './Components/Zego';
import cam from "./doc.png";
import { useParams } from 'react-router-dom';


function Room1() {
  const [popup,setpopup]=useState(false);
  const { roomId } = useParams();
    const {name} =useParams();
  function toggleVideo(){
      setpopup(popup?false:true)
  }
  return (
    <div className="Room">
      <div className='controls'>
        <div className='control-container'>
          <img src={cam} alt="error" onClick={toggleVideo}></img>
        </div>
      </div>
        <Zego  roomId={roomId} name={name}/>
        <div>
          { popup && <TextEditor roomId={roomId}  />  }
         </div>
      </div>
      
  );
}
export default Room1;











// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate
// } from "react-router-dom";
// import {v4 as uuidV4} from 'uuid'
  
  {/* <Router>
    <Routes>
      <Route path='/' element={ <Navigate to={`documents/${uuidV4()}`} />} />
      <Route path='/' element={ <Lobby />} />
      <Route path='/Room/:id' element={<Zego />} />
      <Route path='/documents/:id' element={<TextEditor id="nitin" />} />
    </Routes>
  </Router> */}
  
