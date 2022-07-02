import { Route, Routes } from 'react-router-dom';
import { Exercise } from '../components/pages/Exercise';
import { Home } from '../components/pages/Home';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/exercises/:id' element={<Exercise />} />
    </Routes>
  )
}
