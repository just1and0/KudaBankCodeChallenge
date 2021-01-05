import React from 'react'; 
import Back from '../../assets/svg/BackSvg'; 


const components = { 
  Back, 
};

const IconGenerator = ({tagName, ...props}) => {
  const TagName = components[tagName];

  if (TagName) {
    return <TagName {...props} />;
  } else {
    return null;
  }
};

export default IconGenerator;
