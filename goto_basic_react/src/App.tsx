import React from 'react';

function App() {
    console.log("test");
    fetch('/api/hello').then((res) => res.text()).then((data) => {console.log(data)});

  return (
    <div className="App">
    </div>
  );
}

export default App;
