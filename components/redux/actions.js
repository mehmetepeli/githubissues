export const SET_BOOKMARKS = 'SET_BOOKMARKS';
export const REMOVE_BOOKMARKS = 'REMOVE_BOOKMARKS';

export const setBookmarks = bookmark => dispatch => {
    dispatch({
        type: SET_BOOKMARKS,
        payload: bookmark,
    });
};

export const removeBookmarks = bookmark => dispatch => {
    dispatch({
        type: REMOVE_BOOKMARKS,
        payload: bookmark,
    });
};
