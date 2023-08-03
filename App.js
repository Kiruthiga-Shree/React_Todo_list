import './App.css';
import Todo from './Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const App = () => {
  return (
    <div>
    <Todo/>
    </div>
  // <BrowserRouter>
 
  //   <div className='main'>
  //   <div >
  //     <h1>CRUD Operations</h1>
  //     <Routes>
  //     <Route exact path="/create" Component={Create}/>
  //     <Route exact path="/update" Component={Update}/>
  //     <Route exact path="/delete" Component={Delete}/>
  //     <Route exact path="/read" Component={Read}/>
  //     </Routes>
  //   </div>
  //   </div>
   
  //   </BrowserRouter>
 
  );
}

export default App;
