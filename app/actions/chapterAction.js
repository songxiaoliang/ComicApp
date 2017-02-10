
/**
 * 章节列表 Action
 * Songlcy create by 2017-01-20
 */
import HttpUtil from './../utils/HttpUtil';
import * as types from './../constant/actionTypes';

export let chapter = (url, params, isLoading) => {
    return dispatch => {
        dispatch(loadChapterData(isLoading));
        return HttpUtil.fetchGet(url,
            params,
            (responseObj) => dispatch(receiveChapterData(responseObj.result.chapterList)),
            (error) => dispatch(receiveChapterData([]))
        )
    }
}

let loadChapterData = (isLoading) => {
    return {
        type: types.LOAD_CHAPTER_LIST,
        isLoading: isLoading,
    }
}

let receiveChapterData = (chapterList) => {
    return {
        type: types.GET_CHAPTER_LIST,
        chapterList: chapterList
    }
}