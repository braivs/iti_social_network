import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>);
}

const Technologies = () => {
  return (
    <div>
      <div>one div</div>
        <ul>
          <li>hohoho</li>
          <li>html</li>
          <li>js</li>
          <li>react</li>
          <li>css</li>
        </ul>
      </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href="#s">News</a>
      <a href="#s">News Feed</a>
      <a href="#s">Messeges</a>
    </div>);
}

export default App;
