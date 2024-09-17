import { AppCounter } from "./AppCounter";
import { useAppRedux } from "@/use";

export const AppCounterRedux = () => {
  const { count, incrementHandler, decrementHandler } = useAppRedux();

  return (
    <AppCounter
      counter={count}
      increment={incrementHandler}
      decrement={decrementHandler}
    />
  );
};
