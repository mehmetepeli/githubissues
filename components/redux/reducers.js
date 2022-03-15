import {SET_BOOKMARKS,REMOVE_BOOKMARKS} from "./actions";

const initialState = {
    bookmark: [],
}

function bookmarkReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BOOKMARKS:
            return { ...state,bookmark: [...state.bookmark,action.payload] }
        case REMOVE_BOOKMARKS:
            return { ...state,bookmark: state.bookmark.filter(item => item !== action.payload) }
        default:
            return state;
    }
}

export default bookmarkReducer;
