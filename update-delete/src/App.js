import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Show from './components/Show';
import Update from './components/Update';

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path='' element={<Create />}></Route>
          <Route path="Show" element={<Show />}></Route>
          <Route path="Update" element={<Update />}></Route>
        </Routes>

      </>
    </>

  );
}

export default App;
