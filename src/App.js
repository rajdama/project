
import "./App.css";
import My_Webcam from "./My_Webcam";
import Home from "./Home";
import{BrowserRouter, Switch,Route, Redirect} from 'react-router-dom'

function App() {
  
  return (
     <>
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact  path='/mycam' component={My_Webcam}/>
      <Redirect path='/' component={Home}/>
    </Switch>
    </BrowserRouter>
    
</>

  );
}

export default App;
