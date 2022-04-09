import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCountAction, incrementCountAction } from 'modules/count/count.actions';

import { Button, Container } from './count.styles';
import { selectCountState } from 'modules/count/count.selectors';

export const CountContainer: React.VFC = () => {
  const { t } = useTranslation();
  const countState = useSelector(selectCountState);
  const dispatch = useDispatch();

  const onClickIncrement = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    dispatch(incrementCountAction());
  };

  const onClickDecrease = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    dispatch(decreaseCountAction());
  };
  return (
    <Container>
      <div>
        {t('count')}: {countState.value} Clicks: {countState.clicks}
      </div>
      <Button onClick={onClickIncrement}>{t('increment')}</Button>
      <Button onClick={onClickDecrease}>{t('decrease')}</Button>
    </Container>
  );
};
