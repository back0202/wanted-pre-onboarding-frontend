import { React, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
