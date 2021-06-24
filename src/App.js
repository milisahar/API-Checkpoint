
import './App.css';
import UserList from './Components/UserList/UserList';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        hello
        <Route exact path="/" render={() => <UserList />} />
      </header>
    </div>
  );
}

export default App;
