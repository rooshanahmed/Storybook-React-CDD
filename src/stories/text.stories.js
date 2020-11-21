import React from 'react'
import Text from '../components/text'

export default {
    title: 'Text',
    component: Text
}

export const textLg = () => (
    <Text
      value={"Large Text"}
      style={{ fontSize: '36px' }}
    />
);
  
  export const textMed = () => (
    <Text
      value={"Medium Text"}
      style={{ fontSize: '28px' }}
    />
);
  
  export const textSmall = () => (
    <Text
      value={"Small"}
      style={{ fontSize: '20px' }}
    />
);
