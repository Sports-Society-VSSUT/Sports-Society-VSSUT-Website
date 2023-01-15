import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './home';
import Score from './scorecard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/score' element={<Score/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
