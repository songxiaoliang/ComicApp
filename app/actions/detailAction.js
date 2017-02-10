
/**
 * 漫画详情 Action
 * Songlcy create by 2017-01-20
 */
import HttpUtil from './../utils/HttpUtil';
import * as types from './../constant/actionTypes';

export let detail = (url, params, isLoading) => {
    return dispatch => {
        dispatch(loadDetailData(isLoading));
        return HttpUtil.fetchGet(url,
            params,
            (responseObj) => dispatch(receiveDetailData(responseObj.result.imageList)),
            (error) => dispatch(receiveDetailData([]))
        )
    }
}

let loadDetailData = (isLoading) => {
    return {
        type: types.LOAD_COMBICK_DETIAL_LIST,
        isLoading: isLoading,
    }
}

let receiveDetailData = (detailList) => {
    return {
        type: types.GET_COMBICK_DETIAL_LIST,
        detailList: detailList
    }
}