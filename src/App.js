import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import CharacterList from './Components/CharacterList';
import { fetchAllCharacters } from './Slicers/CharacterSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCharacters())
  },[])


  return (
    <div className="App">
      <CharacterList/>
    </div>
  );
}

export default App;
