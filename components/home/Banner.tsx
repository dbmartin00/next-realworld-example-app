import React, { useContext } from 'react';
import { useTreatments, SplitContext } from '@splitsoftware/splitio-react';
import { APP_NAME } from "../../lib/utils/constant";

function renderContent(treatmentWithConfig) {
  const { treatment, config } = treatmentWithConfig;
  console.log('Banner.renderContent.treatment: ' + treatment);
  
  const json = JSON.parse(config || '');
  const text = json.text;
  return (
    <>
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">{APP_NAME.toLowerCase()}</h1>
          <p>{text || "A place to share your wackiness."}</p>
        </div>
      </div>
    </>
  );
}

const Banner = () => {
  // Obtain readiness and other context properties as needed
  const { isReady, client } = useContext(SplitContext);

  // Define the feature flag name you're interested in
  const splitName = 'next_banner';

  // Optionally, you can pass attributes if your treatment logic depends on them
  const attributes = {
    // Attributes like user id or other targeting properties
  };

  // Fetch treatments from Split.io
  const treatments = useTreatments([splitName], attributes);

  let result;
  if(isReady) {
    result = renderContent(treatments[splitName]);
  } else {
    result = (    
      <>
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">{APP_NAME.toLowerCase()}</h1>
          <p>{"loading..."}</p>
        </div>
      </div>
    </>);
  } 
  return result;
};

export default Banner;