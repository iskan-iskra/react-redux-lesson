import { decrementAction, incrementAction } from "@/reducer";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useAppReactRedux() {
  const count = useSelector((state) => state.count);

  const counterDispatcher = useDispatch();

  const incrementHandler = useCallback(
    () => counterDispatcher(incrementAction),
    [counterDispatcher]
  );
  const decrementHandler = useCallback(
    () => counterDispatcher(decrementAction),
    [counterDispatcher]
  );

  return { count, incrementHandler, decrementHandler };
}
