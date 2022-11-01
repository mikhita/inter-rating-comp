import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import MainContent from './components/MainContent';

function App() {
  return (
    <MainDiv>
      <MainContent/>
    </MainDiv>
  )
}

export default App

const MainDiv = styled.div`
  background-color: #131518;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;