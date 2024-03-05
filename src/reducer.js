const initialState = {
    counters: {
      firstCounter: JSON.parse(localStorage.getItem('rememberMe')) || false
    },
    aboutOption: {
      tech: JSON.parse(localStorage.getItem('aboutMeOptions')) ? JSON.parse(localStorage.getItem('aboutMeOptions')).tech : true, 
      exp: JSON.parse(localStorage.getItem('aboutMeOptions')) ? JSON.parse(localStorage.getItem('aboutMeOptions')).exp : false,
      education: JSON.parse(localStorage.getItem('aboutMeOptions')) ? JSON.parse(localStorage.getItem('aboutMeOptions')).education : false
    },
    process: {
        sendprocess: 'waiting'
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
        case "clickTech":
            return {
                ...state,
                aboutOption: {
                  ...state.aboutOption,
                  tech: action.payload.tech,
                  exp: action.payload.exp,
                  education: action.payload.education
                }
              };
        case "clickExp":
            return {
                ...state,
                aboutOption: {
                  ...state.aboutOption,
                  tech: action.payload.tech,
                  exp: action.payload.exp,
                  education: action.payload.education
                }
              };
        case "clickEducation":
            return {
                ...state,
                aboutOption: {
                  ...state.aboutOption,
                  tech: action.payload.tech,
                  exp: action.payload.exp,
                  education: action.payload.education
                }
              };
        case "process":
            return {
                ...state,
                process: {
                  ...state.process,
                  sendprocess: action.payload.sendprocess
                }
              };
        default :
            return state;
    }
}
export default reducer;