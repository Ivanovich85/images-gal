import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; //Header does not need to be in {} because it was export default from the file

function App() {
  return (
    <div className="App">
      <Header title="Images Gallery"/>
    </div>
  );
}

export default App;
