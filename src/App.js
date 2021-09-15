import React from 'react';

const App = () => {
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched">vic</span>
        <span className="remainder">tor</span>
      </div>

      <div className="typed-keys">
        asfdvicjeks
      </div>

      <div className="completed-words">
        <ol>
          <li>cidade</li>
          <li>teste</li>
          <li>destreza</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
