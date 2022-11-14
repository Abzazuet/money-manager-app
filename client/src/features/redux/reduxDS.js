const initialState = {
    user: {},
    state: {},
  };

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "user/login":
            return {
              ...state,
              user: action.user,
            };
    }
}
export default counterReducer;
