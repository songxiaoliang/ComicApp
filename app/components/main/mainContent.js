/**
 * 首页列表
 * Songlcy create by 2017-01-13
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    StatusBar,
    Navigator,
    RefreshControl,
    TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';
import * as Api from './../../constant/api';
import { main } from './../../actions/mainAction';
import Chapter from './../../components/chapter/comicChapter';

import Loading from './../../widget/Loading';
import LoadingMoreFooter from './../../widget/LoadMoreFooter';
import StaticContainer from 'react-static-container';
import ViewPager from 'react-native-viewpager';
import { mainStyle } from './../../style/mainStyle';

var bannerImgs = [
    'http://imgs.juheapi.com/comic_xin/5559b86938f275fd560ad6d6.jpg',
    'http://imgs.juheapi.com/comic_xin/5559b86938f275fd560ad61f.jpg',
    'http://imgs.juheapi.com/comic_xin/5559b86938f275fd560ad6d0.jpg',
    'http://imgs.juheapi.com/comic_xin/5559b86938f275fd560ad6d8.jpg',
    'http://imgs.juheapi.com/comic_xin/5559b86938f275fd560ad640.jpg',
    'http://imgs.juheapi.com/comic_xin/5559b86938f275fd560ad6d3.jpg'
];

/**
 * 初始化状态
 */
let isLoading = true;
let isLoadMore = false;
let isRefreshing = false;

// url参数
let params = {
    type: '少年漫画',
    skip: 40
}

let isFirstLoad = true;

class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            viewpagerDataSource: new ViewPager.DataSource({
                pageHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }

    // 拉取网络数据 
    componentDidMount() {
        const {main} = this.props;
        main(Api.API_COMBIC_LIST, params, isLoading, isLoadMore, isRefreshing);
    }

    render() {

        const {Main} = this.props;
        let mainList = Main.mainList;
        if (mainList.length) {
            isFirstLoad = false;
        }
        return (
            <View style={mainStyle.contentContainer}>
                <StatusBar backgroundColor="#00000000" translucent={true} />
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(mainList)}
                    style={mainStyle.listview}
                    onEndReachedThreshold={10}
                    enableEmptySections={true}
                    renderRow={this._renderRow.bind(this)}
                    onScroll={this._onScroll.bind(this)}
                    onEndReached={this._onEndReach.bind(this)}
                    renderHeader={this._renderHeader.bind(this)}
                    renderFooter={this._renderFooter.bind(this)}
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                            onRefresh={this._onRefresh.bind(this)}
                            colors={["#F70938"]}
                            />
                    }
                    />
            </View>
        )
    }

    /**
     * 头部
     */
    _renderHeader() {
        // StaticContainer 解决ListView每次循环导致Header和Footer刷新带来的性能问题
        return <StaticContainer>
            <ViewPager
                dataSource={this.state.viewpagerDataSource.cloneWithPages(bannerImgs)}
                renderPage={this._renderPage.bind(this)}
                isLoop={true}
                autoPlay={true}
                />
        </StaticContainer>
    }

    /**
     * 底部
     */
    _renderFooter() {

        const {Main} = this.props;
        if (Main.isLoadMore) {
            return <StaticContainer>
                <LoadingMoreFooter />
            </StaticContainer>
        }
    }

    /**
     * banner布局 
     */
    _renderPage(data, pageId) {
        return <Image source={{ uri: data }} style={mainStyle.banner} resizeMode={'stretch'} />
    }

    /**
     * ListView Item布局
     */
    _renderRow(rowData, sectionId, rowId) {
        return <TouchableHighlight underlayColor='#E6E6E6' onPress={this._onPressRow.bind(this, rowData, rowId)}>
            <View style={mainStyle.listitem}>
                <Image source={{ uri: rowData.coverImg }} style={mainStyle.itemImage} />
                <View style={mainStyle.item}>
                    <View style={mainStyle.itemContent}>
                        <View style={mainStyle.itemTitle} >
                            <Text style={{ fontSize: 16 }}>{rowData.name}</Text>
                            <Text style={mainStyle.time}>{rowData.area} </Text>
                        </View>
                        {rowData.finish ? <Image source={require('./../../images/ic_over.png')}
                            style={mainStyle.hintImg} resizeMode={'stretch'} /> : <View />}
                    </View>
                    <Text style={mainStyle.desc} numberOfLines={1}>{rowData.des}</Text>
                </View>
            </View>
        </TouchableHighlight>
    }

    /**
     *  滑动监听
     */
    _onScroll() {
        //  if (!isLoadMore) isLoadMore = true;
    }

    /**
     * 下拉刷新
     */
    _onRefresh() {

        isLoading = false;
        isLoadMore = false;
        isRefreshing = true;
        const {main} = this.props;
        params.skip = 40;//初始化到第一页
        main(Api.API_COMBIC_LIST, params, isLoading, isLoadMore, isRefreshing);
    }

    /**
     * 加载更多
     */
    _onEndReach() {

        if (!isFirstLoad) {
            isLoadMore = true;
            isLoading = false;
            isRefreshing = false;
            params.skip += 20;
            const {main} = this.props;
            main(Api.API_COMBIC_LIST, params, isLoading, isLoadMore, isRefreshing);
        }
    }

    /**
     * 跳转到漫画详情页
     */
    _onPressRow(rowData, rowId) {
        this.props.navigator.push({
            name: 'chapter',
            component: Chapter,
            sceneConfig: Navigator.SceneConfigs.PushFromRight,
            params: {
                name: rowData.name
            }
        })
    }
}

/**
 * 将state,action绑定到props
 */
export default connect((state) => {
    const {Main} = state; // => var Main = state.Main;调用rootReducer中声明的reducer
    return {
        Main // 1.相当于返回Main:Main，当key和value相同时，可省略key ==> es6（即可通过this.props.Main获取state中的状态值）
    }
}, { main } // 2.注入action,即可调用action中声明的方法,（即可通过this.props.main获取,用于调用main中的方法）
)(MainContent) // 3.将组件注入
