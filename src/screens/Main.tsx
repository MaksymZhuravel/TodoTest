import React, {useCallback} from 'react';
import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {getCounter} from '../redux/counter/counter.selector';
import {decrement, increment} from '../redux/counter/counter.slice';

import Button from '../components/button/Button.tsx';
import Text from '../components/text/Text.tsx';

const Main = () => {
  const counter = useAppSelector(getCounter);
  const dispatch = useAppDispatch();

  const increase = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const decrease = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  return (
    <MainContainer>
      <ButtonWrapper>
        <Button onPress={decrease} title={'-1'} />
      </ButtonWrapper>
      <Text>{counter}</Text>
      <ButtonWrapper>
        <Button onPress={increase} title={'+1'} />
      </ButtonWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.SafeAreaView`
  flex: 1;
  background: #004761;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const ButtonWrapper = styled.View`
  width: 100%;
  padding: 0 ${Dimensions.get('screen').width * 0.35}px;
`;

export default Main;
