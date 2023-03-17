import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Iptv from './Components/Iptv'
import IptvNotWorkingptv from './Components/IptvNotWorking'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/iptvFs4K'>
        <Routes>
          <Route exact path='/iptvFs4K' element={<Iptv/>}></Route>
          <Route path='/iptNotWorking' element={<IptvNotWorkingptv/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
