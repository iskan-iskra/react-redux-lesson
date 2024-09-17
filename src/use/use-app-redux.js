import { decrementAction, incrementAction } from "@/reducer";
import { store } from "@/store";
import { useCallback, useEffect, useState } from "react";

export function useAppRedux() {
  const [count, setCount] = useState(store.getState().count);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().count);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const incrementHandler = useCallback(
    () => store.dispatch(incrementAction),
    []
  );
  const decrementHandler = useCallback(
    () => store.dispatch(decrementAction),
    []
  );

  return { count, incrementHandler, decrementHandler };
}
