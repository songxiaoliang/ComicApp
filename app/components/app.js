
/**
 * App
 * Songlcy create by 2017-01-10
 */
import React, { Component } from 'react';
import {
    Navigator,
    BackAndroid
} from 'react-native';

import splash from './../components/spalsh/splash';

let _navigator = null;//作为键盘返回键导航

export default class App extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{ name: "splash", component: splash }}
                renderScene={
                    (route, navigator) => {
                        _navigator = navigator;
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }
                }
                configureScene={(route) => Navigator.SceneConfigs.PushFromRight}
                />
        )
    }

    
}

/**
 * 退出App
 */
BackAndroid.addEventListener("hardwareBackPress", () => {

    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
})