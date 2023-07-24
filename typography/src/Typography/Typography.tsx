import React from 'react';

interface ITypography {
  label: string;
}

const Typography = ({ label }: ITypography) => {
  return <h1>{label}</h1>;
};

export { Typography };
