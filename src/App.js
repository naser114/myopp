import React from 'react';
import './App.css';
import Wrapper from './components/wrapper';
import Photo from './components/photo';
import Title from './components/title';
import Image from './5cc8f542935c02f92006787d4f46bbc7.jpg';
function App() {
  return (
    <Wrapper>

<center><Photo src= {Image} /></center>
    
	<center> <p>Name:<Title style={{color:"red"}}> Nasri Nasreddine</Title></p></center>
  <center><Title small>My job here</Title></center>

</Wrapper >
  );
}

export default App;
