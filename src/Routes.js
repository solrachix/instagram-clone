import React, { useContext  } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeContext } from 'styled-components';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {  TransitionPresets  } from '@react-navigation/stack';
import Main from './Routes/BottomTabsNavigator';

const { Screen, Navigator } = createMaterialTopTabNavigator();

function Routes() {  
  // const themeContext = useContext(ThemeContext).colors;
  return (
    <NavigationContainer independent={true}>
      <Navigator
        initialRouteName="Stories"
        tabBarPosition="bottom"
        keyboardDismissMode="on-drag"
        tabBar={() => {}}
        tabBarOptions={{
          headerStyle: {
              // backgroundColor: themeContext.secundary,
              height: 60,
          },
          gestureEnabled: true,
          cardOverlayEnabled: true,                    
          // headerStyle: { backgroundColor: themeContext.secundary },
          ...TransitionPresets.ModalPresentationIOS,
        }}
        headerMode="none" 
        mode="modal"
      >

        <Screen name="Main" component={Main}/>

      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;