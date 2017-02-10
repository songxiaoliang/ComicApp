/**
 * 首页Action
 * Songlcy create by 2017-01-12
 */
import * as types from './../constant/actionTypes';
import HttpUtil from './../utils/HttpUtil';
// let 声明的名称会在界面使用 
export let main = (url, params, isLoading, isLoadMore, isRefreshing) => {
    return dispatch => {

        // 1.发出拉取数据的信号
        dispatch(loadMainContent(isLoading, isLoadMore, isRefreshing));

        // 2.请求网络
        return HttpUtil.fetchGet(url, params,
            (responseObj) => {
                dispatch(receiveMainContent(responseObj.result.bookList));
                console.info("success");
            },
            (error) => {
                dispatch(receiveMainContent([]));
                console.info("error" + error);
            }
        )
    }
}

/**
 * Loading action
 */
let loadMainContent = (isLoading, isLoadMore, isRefreshing) => {
    return {
        type: types.LOAD_MAIN_LIST,
        isLoading: isLoading,
        isLoadMore: isLoadMore,
        isRefreshing: isRefreshing
    }
}

let receiveMainContent = (mainList) => {
    return {
        type: types.GET_MAIN_LIST,
        mainList: mainList
    }
}