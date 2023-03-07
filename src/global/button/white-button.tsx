import React from 'react';

const WhiteButton = ({ text }: { text: string }) => {

  return (
    <button
      type="button"
      className={`text-white hover:text-hoverColor hover:border-hoverColor border border-white  p-2 md:p-4 md:px-6 md:text-xl rounded-lg`}
    >
      {text}
    </button>
  )
};

export default WhiteButton;