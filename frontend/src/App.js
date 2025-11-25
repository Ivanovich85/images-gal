import { use, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; //Header does not need to be in {} because it was export default from the file
import Search from './components/Search';

const App= () => {
  const [word, setWord] = useState('')
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(word);
  }
  console.log(word);
  return (
    <div className="App">
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSearchSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
