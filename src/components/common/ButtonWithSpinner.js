import React from 'react';
import { Spinner } from './Spinner';
import { Button } from './Button';

const ButtonWithSpinner = ({ showSpinner, ...props }) => {
  if (showSpinner) {
    return <Spinner />;
  }

  return <Button {...props} />;
};

export { ButtonWithSpinner };
