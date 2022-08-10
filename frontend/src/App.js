import logo from './logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Salesman bot</h1>
          <div>
              <form>
                  <label>
                      Name:
                      <input type="text" name="name" />
                  </label>
                  <input type="submit" value="Submit" />
              </form>
          </div>
      </header>
    </div>
  );
}

export default App;
