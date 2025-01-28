import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Tools from './components/Tools';
import Budget from './components/Budget';
import Defi from './components/Defi';
import Lending from './components/Lending';
import Roadmap from './components/Roadmap';
import Community from './components/Community';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          id="overview"
          title="Overview"
          content="The Cash-First Financial Strategy offers an unparalleled approach to achieving financial freedom by rejecting debt and embracing a cash-first philosophy."
        />
        <Section
          id="principles"
          title="Core Principles"
          content={
            <ul>
              <li>Avoid borrowing for major expenses.</li>
              <li>Live within your means.</li>
              <li>Build a cash-first savings plan.</li>
              <li>Reject traditional banking systems.</li>
            </ul>
          }
        />
        <Tools />
        <Defi />
        <Budget />
        <Lending />
        <Roadmap />
        <Community />
      </main>
      <footer>
        <p>© 2025 Cash-First Financial Strategy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;