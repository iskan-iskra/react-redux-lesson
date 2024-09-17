import PropTypes from "prop-types";
import { memo } from "react";

export const AppCounterCore = ({ counter, increment, decrement }) => (
  <div>
    <div>Counter: {counter}</div>
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  </div>
);

AppCounterCore.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

export const AppCounter = memo(AppCounterCore);
