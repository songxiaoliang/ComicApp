import { combineReducers } from 'redux';

import Main from './../reducers/mainReducer';
import Discover from './../reducers/discoverReducer';
import Gril from './../reducers/grilReducer';
import Beautiful from './../reducers/beautifulReducer';
import Chapter from './../reducers/chapterReducer';
import Detail from './../reducers/detailReducer';

export default rootReducer = combineReducers({
    Main,
    Discover,
    Gril,
    Beautiful,
    Chapter,
    Detail
})