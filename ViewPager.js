
// import React,{Component,PropTypes} from 'react';
// import {
//   requireNativeComponent
// } from 'react-native';
// import ViewPagerAndroid from '@react-native-community/viewpager'
// const VIEWPAGER_REF = 'viewPager';
//
// export class ViewPagerZoom extends ViewPagerAndroid {
//   render() {
//     return (
//       <NativeAndroidViewPager
//         {...this.props}
//         ref={VIEWPAGER_REF}
//         style={this.props.style}
//         onPageScroll={this._onPageScroll}
//         onPageScrollStateChanged={this._onPageScrollStateChanged}
//         onPageSelected={this._onPageSelected}
//         children={this._childrenWithOverridenStyle()}
//       />
//     );
//   }
// }
//
// const NativeAndroidViewPager = requireNativeComponent('ViewPagerZoom', ViewPagerZoom);


// import ViewPagerZoom from '@react-native-community/viewpager/js/ViewPager'
//
// export default ViewPagerZoom;
var ViewPagerZoom = require('@react-native-community/viewpager/js/ViewPager');
console.log('ViewPager=====',ViewPagerZoom)
module.exports = {ViewPagerZoom:ViewPagerZoom};

