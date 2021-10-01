import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCountAction, incrementCountAction } from 'store/count/count.actions';
import { selectCountViewModel } from './count.selectors';

import { Button, Container } from './count.styles';

export const CountContainer: React.VFC = () => {
  const { t } = useTranslation();
  const countState = useSelector(selectCountViewModel);
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
