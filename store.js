const createStore = (reducer) => {
  let state;
  let listeners = []

  const getState = () => state

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listeners())
  }

  const subscribe = (listener) => {
    listeners.push(listener)
  }
}
