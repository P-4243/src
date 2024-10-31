import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Weekends from './Weekends';

function App() {
  return (
    <div>
      <Header />
      <Weekends/> {/* This will render both the Weekends and Weekdays code */}
      <Footer />
    </div>
  );
}

export default App;
