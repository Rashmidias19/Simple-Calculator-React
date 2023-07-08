
import Aboutme from './Aboutme';
import './App.css';
import Homepage from './Homepage';
import { Routes ,Route, Link } from 'react-router-dom';
import hub from './assests/GREEN HUB2.png';
import ReactPlayer from 'react-player/youtube';


function App() {
  return(
       
    <div className="App">
        <MyVideo />
    </div>
  );
}

const MyVideo = () =>{
  return(
    <ReactPlayer url='https://youtu.be/zZdKKzlZNyA' playing={true} volume={100} />
  );
}


export default App;
