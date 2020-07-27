import React, { useState } from 'react';
import './App.less';
import QuoteOption from './components/QuoteOption';
import QuoteWaiting from './components/QuoteWaiting';
import QuoteNotify from './components/QuoteNotify';

function App() {
  const [status, setStatus] = useState(0);
  const handleStatus = (step) => {
    setStatus(step);
    if (step === 1) {
      setTimeout(() => {
        setStatus(2);
      }, 5000);
    }
  };

  const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  const isMobile = toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem)) && window.innerWidth <= 500;
  return (
    <div
      className={`ss-App ${isMobile ? 'ss-mobile' : 'none'} ${
        window.innerWidth < window.innerHeight ? 'ss-default' : 'none'
      }`}
    >
      <div className="ss-banner"></div>
      {status === 0 && <QuoteOption onClickNext={handleStatus} />}
      {status === 1 && <QuoteWaiting onHandle={handleStatus} status={status} />}
      {status === 2 && <QuoteNotify onHandle={handleStatus} />}
    </div>
  );
}

export default App;
