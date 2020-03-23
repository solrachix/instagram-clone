import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';

import Icon from "@expo/vector-icons/MaterialIcons";

import Feed from '$root/Pages/Feed';

const { Screen, Navigator } = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator 
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}>
        <Screen name="Feed" component={Feed}
          options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}/>

      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;