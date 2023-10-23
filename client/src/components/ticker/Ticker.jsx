import s from './Ticker.module.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from 'react';

export const Ticker = ({ ticker }) => {
  const [prevState, setPrevState] = useState(0);
  const [isIncrease, setIncrease] = useState(true);
  const { change_percent, exchange, price, } = ticker;
  useEffect(() => {

    setIncrease(price > prevState);
    setPrevState(price);
  }, [ ticker]);

  return (<div className={s.wrapper}>
    <div className={`${s.positive} ${isIncrease ? s.increase : s.decrease}`}> {isIncrease ? <ArrowUpwardIcon /> :
      <ArrowDownwardIcon />}</div>
    <div className={s.value}>
      <span> <strong>{ticker.ticker}</strong> </span>
      <span>{change_percent} </span>
      <span className={isIncrease ? s.increasePrice : s.decreasePrice}>{price}  </span>
      <span>{exchange}  </span>
    </div>

  </div>);
};
