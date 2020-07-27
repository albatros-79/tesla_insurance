import React from 'react';
import WithWindowDimensions from './WithWindowDimensions';

const QuoteWaiting = ({ windowWidth }) => {
  return (
    <div
      className={`quote-waiting-div ${
        windowWidth > 700 ? 'pt-200 pb-200 ' : 'pt-100 pb-100 '
      } d-flex-column align-items-center`}
    >
      {/* <img src={carImg} alt="car" /> */}
      <div className={`loading-div p-relative ${windowWidth > 700 ? 'none' : 'small'}`}>
        <div id="html-spinner"></div>
      </div>
      <div className="font-size-38 font-weight-600 pt-100 px-40 text-center">
        お見積もりを計算しています。お待ちください。
      </div>
    </div>
  );
};

export default WithWindowDimensions(QuoteWaiting);
