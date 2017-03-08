/**
 * 首页详情
 * Songlcy create by 2017-01-18
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    Navigator,
    BackAndroid,
    TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';
import * as Api from './../../constant/api';
import { chapter } from './../../actions/chapterAction';

import ToolBar from './../../widget/ToolBar';
import Loading from './../../widget/Loading';
import StaticContainer from 'react-static-container';
import LoadMoreFooter from './../../widget/LoadMoreFooter';
import { chapterStyle } from './../../style/chapterStyle';
import Detail from './../../components/detail/comicDetail';

/**
 * 状态
 */
let isLoading = true;
/**
 * url 参数
 */
let params = {
    comicName: '',
    skip: ''
}

/**
 * 导航
 */
let _navigator = null;

let isFirstLoad = true;
class Chapter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }

    // 拉取网络数据
    componentDidMount() {

        params.comicName = this.props.name;
        const {chapter} = this.props;
        chapter(Api.API_COMBIC_CHAPTER_LIST, params, isLoading);
    }

    render() {

        _navigator = this.props.navigator;

        const {Chapter} = this.props;
        let chapterList = Chapter.chapterList;
        if (chapterList.length > 0) {
            isFirstLoad = false;
        }

        return (
            <View style={chapterStyle.container}>
                <ToolBar
                    title={this.props.name}
                    leftButton="md-arrow-back"
                    titleStyle={{ marginLeft: 10 }}
                    leftIconAction={this._back.bind(this)}
                    />
                {Chapter.isLoading ?
                    <Loading /> : <ListView
                        dataSource={this.state.dataSource.cloneWithRows(chapterList)}
                        style={chapterStyle.listview}
                        enableEmptySections={true}
                        renderRow={this._renderRow.bind(this)} />
                }
            </View>
        )
    }

    /**
     *  Item布局
     */
    _renderRow(rowData, sectionId, rowId) {
        rowId = +rowId + 1;
        return <TouchableHighlight underlayColor="#E6E6E6" onPress={this._pressItem.bind(this, rowData,this.props.name)}>
            <View style={chapterStyle.item}>
                <View style={chapterStyle.itemContainer}>
                    <Text style={{ marginLeft: 10 }}>{rowId}.</Text>
                    <Text style={chapterStyle.title}>{rowData.name}</Text>
                    <Image source={require('./../../images/ic_more.png')} style={chapterStyle.skipImg} />
                </View>
                <View style={chapterStyle.underline} />
            </View>
        </TouchableHighlight>

    }

    /**
     * 跳转到详情
     */
    _pressItem(rowData,comicName) {
        this.props.navigator.push({
            name: 'detail',
            component: Detail,
            sceneConfig: Navigator.SceneConfigs.PushFromRight,
            params: {
                rowData: rowData,
                comicName:comicName
            }
        })
    }

    /**
     * 返回上一页
     */
    _back() {
        this.props.navigator.pop();
    }
}

export default connect((state) => {
    const {Chapter} = state;
    return {
        Chapter
    }
}, { chapter })(Chapter)