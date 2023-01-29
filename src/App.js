import './App.css';
import { Navbar } from './components/Navbar';
import {  Route, Routes } from 'react-router-dom'
import { SearchFront } from './Pages/SearchFront';
import { SearchBack } from './Pages/SearchBack';
import { PageNotExists } from './Pages/PageNotExists';


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/*' element={<PageNotExists />} />
        <Route index element={<SearchFront />} exact />
        <Route path='/' element={<SearchFront />} exact />
        <Route path='/front' element={<SearchFront />} />
        <Route path='/back' element={<SearchBack />} />
      </Routes>

    </div>
  );
}

export default App;
