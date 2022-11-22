import logo from './logo.svg';
import './App.css';
import Side from "./components/side-bar";
import Card1 from "./components/card";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div> 
       <Side />
       <div className="background">
       <Card1 />
       <Card1 />
       <Card1 />
       <Card1 />
       <Card1 />
       </div>
    </div>
  );
}

export default App;
