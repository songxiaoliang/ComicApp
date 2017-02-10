/**
 * 精选
 * Songlcy create by 2017-01-13
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar
} from 'react-native';

import { choiceStyle } from './../../style/choiceStyle';
import ToolBar from './../../widget/ToolBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import GrilComic from './../choice/grilComics';
import SlashComic from './../choice/slashComics';
export default class Choice extends Component {
    render() {
        return (
            <View style={choiceStyle.container}>
                <ToolBar
                    title="精选"
                    titleStyle={{ textAlign: 'center' }}
                    />
                <ScrollableTabView
                    locked={true}
                    tabBarPosition="top"
                    tabBarTextStyle={{ alignItems: 'center', alignSelf: 'center' }}
                    tabBarUnderlineStyle={{ backgroundColor: "#FE2D4A", height: 2 }}
                    tabBarBackgroundColor="#FFFFFF"
                    tabBarActiveTextColor="#FE2D4A">
                    <GrilComic tabLabel='少女漫画' navigator={this.props.navigator} />
                    <SlashComic tabLabel='耽美漫画' navigator={this.props.navigator} />
                </ScrollableTabView>
            </View>
        )
    }
}
