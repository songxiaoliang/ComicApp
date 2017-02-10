import * as types from './../constant/actionTypes';

/**
 * 初始化状态
 */
const initState = {
    chapterList: [],
    isLoading: true
}

let chapterReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_CHAPTER_LIST:
            return Object.assign({}, state, {
                isLoading: action.isLoading,
            });
        case types.GET_CHAPTER_LIST:
            return Object.assign({}, state, {
                isLoading: false,
                chapterList: action.chapterList
            });
        default:
            return state;
    }
}

export default chapterReducer;