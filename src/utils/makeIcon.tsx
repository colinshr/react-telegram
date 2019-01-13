import React from 'react';

export const makeIcon = (iconId: string, className?: string) => {
  return (
    <svg className={ className }
         focusable='false'>
      <use xlinkHref={ `#${iconId}` }/>
    </svg>
  );
};
