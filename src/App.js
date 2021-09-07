import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="input-form">
        <form>
          <input placeholder="Текст дела" type="text" id="input"></input>
          <button htmlFor="input" type="submit">Внести дело в список</button>
        </form>
      </div>
      <div className="content-box">
        <ul className="content-list">
          <li className="content-list__item">12345</li>
          <li className="content-list__item">12345</li>
          <li className="content-list__item">12345</li>
          <li className="content-list__item">12345</li>
          <li className="content-list__item">12345</li>
          <li className="content-list__item">12345</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
