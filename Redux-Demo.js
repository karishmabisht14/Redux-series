const redux = require("redux");

const counterReducer = (state = { counter: 20 }, action) => {
  return {
    counter: state.counter - 5,
  };
};

const store = redux.createStore(counterReducer);

const counterSubcriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubcriber);

store.dispatch({ type: "decrement" });
