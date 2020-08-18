import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Content from './components/Content/Content'

function App() {
  return (
    <div className="App">
      <Header title='Sign Up' subTitle='Please fill in the required fields' />
      <Content />
      {/* <Header />
    <Username />
    <Error />
    <Email adress />
    <Error />
    <Password />
    <Error (must includes) */}
    </div>
  )
}

export default App;
