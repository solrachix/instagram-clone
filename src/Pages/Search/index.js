import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import { G, Path } from 'react-native-svg';

// Each nameValuePair can be:
// * Name: <Svg />; or
// * Name: { svg: <Svg />, viewBox: '0 0 50 50' }

import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Search() {
  
  function seila(){
    return {
      SortArrows: <G><Path d="M0 45h90L45 0 0 45z"/><Path d="M0 55h90l-45 45L0 55z"/></G>,
      Tick: {
        svg: <Path d="M38.729 75.688a4.48 4.48 0 0 1-3.21-1.356L16.558 55.004c-1.774-1.807-1.774-4.736-.001-6.543a4.48 4.48 0 0 1 6.42 0l15.753 16.056 37.749-38.474a4.478 4.478 0 0 1 6.419 0c1.773 1.806 1.773 4.736 0 6.543L41.939 74.332a4.48 4.48 0 0 1-3.21 1.356z"/>,
        viewBox: '0 0 50 50',
      },
      Home: {
        svg: <Path d="M19.5 0.5C18 0.5 0.49976 18 0.5 19.5C0.500834 24.7164 0.500182 34.5 0.500091 35C0.5 35.5 1.296 36 2 36H15V24.5C15 23.7459 16 21 19.5 21C23 21 24.5 23.5 24.5 24.5V36H37C37.3733 36 38.5 36 38.5 35V19.5C38.5 17.5 21 0.5 19.5 0.5Z"/>,
        viewBox: '0 0 50 50'
      },
    }
  }
  return (
    <View>
      <Text>aaaaaaaa</Text>
      <SvgIcon name="Home" height="50" width="50"  fill="#aaa" svgs={seila()} />
    </View>
  );
}