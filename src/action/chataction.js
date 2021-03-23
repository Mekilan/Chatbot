export const chatAction = (message = null, action) => {
    debugger;
    if (action.type === 'income') {
        return action.payload;
    }
    if (action.type === 'out_going') {
        return action.payload;
    }

    return message;
};


export const addChatMessage = (state = {}, action) => {
    switch (action.type) {
        case "income":
            state = { ...state, firstname: action.payload }
            break;
        case "out_going":
            state = { ...state, lastname: action.payload }
            break;
    }
    return state;
}
