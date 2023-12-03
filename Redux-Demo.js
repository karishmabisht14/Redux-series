const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 2 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 2 };
  }
  return {
    counter: state.counter,
  };
};

const store = redux.createStore(counterReducer);

const counterSubcriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubcriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
