import React, { useEffect, useState } from 'react';

import Nav from './components/Nav';

var pageMapping = {
  1: "blah.html",
  2: "blahblah.html",
  3: "blahblahblah.html",
}

function App() {
  const [openTab, setOpenTab] = useState(1);

  // const setOpenTabWrapper = useCallback(val => {
  //   alert(val);
  //   setOpenTab(val);
  // }, [setOpenTab]);


  return (
    <div>
        <div style={{height: "95vh"}}>
        
        { pageMapping[openTab] }

        </div>
        <Nav
          setTab={setOpenTab}
        />

        {/* <div style={{height: "15vh"}}></div> */}
    </div>
  );
}

export default App;
