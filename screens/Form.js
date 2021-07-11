import React from 'react';

<Form
  fields={
    {
      firstName: {
        label: 'First Name'
      },
      email: {
        label: 'Email',
        validators: [validateContent]
        inputProps: {
          keyboardType: 'email-address',
        }
      },
      password: {
        label: 'Password',
        validators: [validateContent, validateLength]
        inputProps: {
          secureTextEntry: true
        }
      }
    }
  }
/>export const validateContent = (text) => {
  if (!text) {
    return "Can't be blank";
  }
};