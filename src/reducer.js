const initialState = {
    counters: {
      firstCounter: JSON.parse(localStorage.getItem('rememberMe')) || false,
      secondCounter: false,
      rememberMe: false
    }
  };
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggle":
            return {
                ...state,
                counters: {
                  ...state.counters,
                  firstCounter: !state.counters.firstCounter 
                }
              };
        case "toggle2":
            return {
                ...state,
                counters: {
                  ...state.counters,
                  secondCounter: !state.counters.secondCounter 
                }
              };
        case "rememberMe":
            return {
                ...state,
                counters: {
                  ...state.counters,
                  rememberMe: !state.counters.rememberMe
                }
              };
        default :
            return state;
    }
}
export default reducer;