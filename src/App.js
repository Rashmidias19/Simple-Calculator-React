import logo from './logo.svg';
import './App.css';
import Btn from './Btn';
import Child from './Child';

function App() {
  const date=new Date();
  return(
    <Child message={date.toLocaleTimeString()} />
  );
}


export default App;
