
import './App.css';
import Navbar from './components/myNavigationBar/Navbar/Navbar';
import MyRoute from './components/myNavigationBar/Routes/MyRoute';
import {BrowserRouter} from 'react'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar></Navbar>
      <MyRoute></MyRoute>
    </BrowserRouter>

    </div>
  );
}

export default App;
