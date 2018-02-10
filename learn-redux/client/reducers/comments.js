// a reducer takes in 2 things:

// 1. action (info about what's happening)
// 2. copy of current state

function postComments( state=[], action) {
    switch (action.type){
        case 'ADD_COMMENT':
            //return existing state plus new comment
            return [...state,{
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            return [
                // start from the beginning to where you're deleting
                ...state.slice(0,action.i),
                // after the deleted one till the end
                ...state.slice(action.i + 1)
            ]
            return state;
        default:
            return state;
    }
    return state;
}

function comments( state=[], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;