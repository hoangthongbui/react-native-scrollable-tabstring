import React from 'react'

import { StyleProp, ViewStyle, FlatListProps, StyleProp, FlatListProps } from 'react-native';

interface ScrollableTabStringProps {
    dataTabs: Array<Object>,
    dataSections: Array<Object>,
    isParent: boolean,
    isAnimated: boolean,
    tabPosition?: 'top' | 'bottom',
    renderSectionItem: Function,
    renderTabNameItem: Function,
    customTabNamesProps: FlatListProps<Object>,
    customSectionProps: FlatListProps<Object>,
    onPressTab: Function,
    onScrollSection: Function,
    selectedTabStyle: StyleProp<ViewStyle>,
    unselectedTabStyle: StyleProp<ViewStyle>,
  }
  
  export class ScrollableTabString extends React.Component<ScrollableTabStringProps> { }
  