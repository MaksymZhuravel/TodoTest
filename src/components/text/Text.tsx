import React from 'react';

import {StyledText} from './text.styled.ts';

interface IProps {
  children: React.ReactNode;
}

export const Text: React.FC<IProps> = ({children}) => {
  return <StyledText>{children}</StyledText>;
};
