const notificationReducer = (state = null, action) => {
    switch(action.type) {
        case 'NEW_VOTE':
            return action.data.content
        case 'REMOVE':
            return null
        default:
            return state
    }
}

export const voteNotification = content => {
    return {
        type: 'NEW_VOTE',
        data: { content }
    }
}

export const removeNotification = () => {
    return {
        type: 'REMOVE'
    }
}

export default notificationReducer