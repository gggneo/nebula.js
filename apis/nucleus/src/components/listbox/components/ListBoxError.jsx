import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';
import InstanceContext from '../../../contexts/InstanceContext';

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function ListBoxError({ text }) {
  const { translator } = useContext(InstanceContext);
  return <StyledDiv>{translator.get(text)}</StyledDiv>;
}
