import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <form>
          <label for="username">Username</label>
          <input type="text" name="username"></input>
          <label for="username">Email</label>
          <input type="text" name="username"></input>
          <label for="username">Feedback</label>
          <input type="textarea" name="username"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
