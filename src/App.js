import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import  My  from './component/task_1/hello';
import { Card } from './component/task2/card';
import { View } from './component/task3/super';
import { Social } from './component/task4/social';
import { Con } from'./component/task5/icon';
import { Log } from'./component/task6/login';
import { Technology } from './component/task7/tech';
import { Add } from'./component/task8/ustate';
import { Eat } from './component/task9/fruit';
import { Back } from './component/task10/feed';
import { Result } from './component/task10/result';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<My/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/View' element={<View/>}/>
        <Route path='/Social' element={<Social/>}/>
        <Route path='/Con' element={<Con/>}/>
        <Route path='/Log' element={<Log/>}/>
        <Route path='/Technology' element={<Technology/>}/>
        <Route path='/Add' element={<Add/>}/>
        <Route path='/Eat' element={<Eat/>}/>
        <Route path='/Back' element={<Back/>}/>
        <Route path='/Result' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
