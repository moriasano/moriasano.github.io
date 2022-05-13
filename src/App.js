import React, { useEffect, useState } from 'react';

import Nav from './components/Nav';
import ParallaxDemo from './ParallaxDemo';

// Map the open tab to the corresponding page (componenet)
var pageMapping = {
  1: <ParallaxDemo />,
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
        <div style={{height: "95vh", textAlign: "center"}}>
          
          
          {/* <div style={{backgroundColor: "rgba(192, 192, 192, 0.6)", width: "90%", height: "85%", display: "inline-flex", marginTop: "5%", }}> */}
          <div style={{backgroundColor: "rgba(192, 192, 192, 0.6)", margin: "5%", display: "inline-flex", height: "100%", width: "100%"}}>
            { pageMapping[openTab] }
          </div>

        </div>
        <Nav setTab={setOpenTab} />
    </div>
  );
}

export default App;
