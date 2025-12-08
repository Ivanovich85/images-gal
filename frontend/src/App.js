import { use, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; //Header does not need to be in {} because it was export default from the file
import Search from './components/Search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;// this is how we access env variables in react in a folder ignored by git or a locked file 

const App= () => {
  const [word, setWord] = useState('')

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/random/photos/?query=${word}&client_id=${UNSPLASH_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSearchSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
