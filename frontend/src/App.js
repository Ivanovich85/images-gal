import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; //Header does not need to be in {} because it was export default from the file
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <Header title="Images Gallery"/>
      <Search />
    </div>
  );
}

export default App;
