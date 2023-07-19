import logo from './Logo.jpg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const checkPalindrome = (event) => {
    event.preventDefault();
    const isPalindrome = isPalindromeString(inputText);
    setResult(isPalindrome ? 'It is a palindrome!' : 'It is not a palindrome.');
  };

  const isPalindromeString = (str) => {
    const len = str.length;
    if (str === null || len === 0 || len === 1) {
      return true;
    }
    if (str.charAt(0) !== str.charAt(len - 1)) {
      return false;
    }
    return isPalindromeString(str.substring(1, len - 1));
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo" />
      </header>
      <div className="body">
        <h1>Palindrome Checker</h1>
        <form onSubmit={checkPalindrome} className="form-container">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter a word or phrase"
            className="form-input"
            required
          />
          <button type="submit" className="form-submit">
            Check
          </button>
        </form>
        <div className="result">{result && <p>{result}</p>}</div>
      </div>
      <div className='footer'>
        <h6> This is made by Lochan Acharya.</h6>
      </div>
    </div>
  );
}

export default App;
