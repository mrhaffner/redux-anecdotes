const notificationReducer = (state = null, action) => {
    switch(action.type) {
        case 'NEW_VOTE':
            return `voted for: ${action.data.content}`
        case 'REMOVE':
            return null
        default:
            return state
    }
}

// export const voteNotification = (content, time) => {
//     return {
//         type: 'NEW_VOTE',
//         data: { content }
//     }
// }

export const voteNotification = (content, time) => {
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    return async dispatch => {
        dispatch ({
            type: 'NEW_VOTE',
            data: { content }
        })
        await timeout(time);
        dispatch({ type: 'REMOVE' });
    }
}

export const removeNotification = () => {
    return {
        type: 'REMOVE'
    }
}

export default notificationReducer