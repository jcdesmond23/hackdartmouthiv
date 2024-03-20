import React from 'react';
import './App.css';
import SponsorsSection from './SponsorsSection';
import WelcomeSection from './WelcomeSection';
import TracksSection from './TracksSections';
import QuestionsSection from './QuestionsSection';

function App() {
  return (
    <div>
      <WelcomeSection/>
      <TracksSection/>
      <QuestionsSection/>
      <SponsorsSection/>
    </div>
  );
}

export default App;
