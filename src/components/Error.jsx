import React from 'react';

const Error = ({children}) => {
  return (
        <div className=" text-red-500 text-lg font-black text-center  p-3 mb-3">
            <p>{children}</p>
        </div>
        
        
        );
};

export default Error;
