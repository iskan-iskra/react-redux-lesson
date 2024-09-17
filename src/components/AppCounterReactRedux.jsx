import { useAppReactRedux } from "@/use";
import { AppCounter } from "./AppCounter";

export const AppCounterReactRedux = () => {
  const { count, incrementHandler, decrementHandler } = useAppReactRedux();

  return (
    <AppCounter
      counter={count}
      increment={incrementHandler}
      decrement={decrementHandler}
    />
  );
};
