const initialState = { count: 0 };

const ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION_TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export const incrementAction = { type: ACTION_TYPES.INCREMENT };
export const decrementAction = { type: ACTION_TYPES.DECREMENT };
