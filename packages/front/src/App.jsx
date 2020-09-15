import React, { useState, useEffect } from 'react';
// import Button from './components/button';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Review from './components/Review';

function App() {
  
  const [foo, setFoo] = useState('N/A');
  useEffect(() => {
    fetch('/api/foo')
      .then((res) => res.json())
      .then((data) => setFoo(data.foo))
      .catch((err) => setFoo(err.message));
  }, []);

  return (
    // <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
    //   <h1>Hello World</h1>
    //   <p>
    //     Server responded with foo:
    //     {foo}
    //   </p>
    //   <Button onClick={() => console.log('I was clicked')}>
    //     I am a button
    //   </Button>
    // </div>

    <div className="app">
      <Nav />
      <Landing />
      <About />
      <Review />
    </div> 
  );
}

export default App;
