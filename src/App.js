import './App.css';

import Create from './components/Create';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Read from './components/Read';
import Update from './components/Update';


function App() {

//   const myStyle={
//     backgroundImage: `url(${Img})`,
    
 
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
  
// };
  return (


   
    <Router>

    <Switch>
     
      <Route  exact path="/"  > <Create/></Route>
      <Route exact path='/read'  > <Read/></Route>
      <Route exact path='/update'  > <Update/></Route>
    



    </Switch>
  </Router>

  );
}

export default App;