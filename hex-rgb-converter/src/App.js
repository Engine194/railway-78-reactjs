import "./App.css";
import{useEffect} from 'react';

function App() {
  console.log('1');

  useEffect(() => {
    console.log('3');
  })
  return (
     <main>
      {console.log('2')};
      <h1>Hello World</h1>
    </main>
  );
}

export default App;
