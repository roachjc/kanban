import React from 'react';

export default ({ children, ...props }) => {
return(
  <div { ...props }>
    { children }
  </div>
)}