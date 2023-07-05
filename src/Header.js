import './App.css';
function Header(props){
    const example ={
        color: "pink",
    }
    
    return(
     
    <h1 style={example}>Hello World, {props.name}, {props.color}</h1>

    );
  }

export default Header;