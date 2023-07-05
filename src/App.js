import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';

function Logo(props){
  const image=<img src={logo} />;
  return image;
}

function App() {
  return(
    <div>
      <Header name="Rashmi" color="purple" />
      <Intro1/>
      <Logo />
      <Intro2/>
      <Intro3/>
    </div>
  );
}


export default App;
