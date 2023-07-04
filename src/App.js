import logo from './logo.svg';
import './App.css';
import { jsx as _jsx } from "react/jsx-runtime";
function Header(){
  // return <h1>Hello World</h1>
  return /*#__PURE__*/_jsx("h1", {
    children: "Hello"
  });
}

function App() {
  return <Header />;
}


export default App;
