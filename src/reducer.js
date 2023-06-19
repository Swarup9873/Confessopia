export const initialState = {
    user:null,
    isLoggedIn:false,
};

export const actionTypes = {
    SET_USER:"SET_USER",
};

const reducer = (state,action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
                isLoggedIn: action.user !== null,
            };

        default:
            return state;
    }
};

export default reducer;
