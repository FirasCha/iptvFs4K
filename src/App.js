import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Iptv from './Components/Iptv'
import IptvNotWorkingptv from './Components/IptvNotWorking'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Iptv/>}></Route>
          <Route path='/iptvFs4K' element={<Iptv/>}></Route>
          <Route path='/iptvFs4K/iptNotWorking' element={<IptvNotWorkingptv/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
