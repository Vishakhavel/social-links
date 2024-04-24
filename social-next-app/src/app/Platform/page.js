import React from 'react';

const page = ({ name, icon }) => {
  return (
    <div className='platformCard'>
      name - {name}
      icon - {icon}
    </div>
  );
};

export default page;
