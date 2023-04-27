import React from "react";

function loading() {
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div className='lds-ripple'>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default loading;
