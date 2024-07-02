import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./App.css"

const App = () => {
  const [code, setCode] = useState('console.log("Hello World");');

  const ChangeCode = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className='Parent'>
      <textarea
        className='textarea'
        value={code}
        onChange={ChangeCode}
        
      />
      <div className='Syntax-Highlight'>
        <SyntaxHighlighter language="javascript" style={dark} code={code}/>
      </div>
    </div>
  );
};

export default App;
