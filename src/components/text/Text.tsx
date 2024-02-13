import React from 'react';

import {StyledText} from './text.styled.ts';

interface IProps {
  children: React.ReactNode;
}

const Text: React.FC<IProps> = ({children}) => {
  return <StyledText>{children}</StyledText>;
};

export default Text;
