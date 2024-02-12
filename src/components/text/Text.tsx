import React from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: #8cd6bd;
  font-size: 64px;
`;

interface IProps {
  children: React.ReactNode;
}

const Text: React.FC<IProps> = ({children}) => {
  return <StyledText>{children}</StyledText>;
};

export default Text;
