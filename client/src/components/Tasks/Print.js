import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import OpenTaskPage from './OpenTaskPage';

const Print = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <OpenTaskPage ref={componentRef} />
    </div>
  );
};

export default Print;