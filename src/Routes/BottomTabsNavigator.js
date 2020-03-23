import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
const { Screen, Navigator } = createBottomTabNavigator();

import IconNotify from '../components/IconNotify';

import Feed from '../Pages/Feed';
import MyPerfil from '../Pages/MyPerfil';
import NewPost from '../Pages/NewPost';
import Notification from '../Pages/Notification';
import Search from '../Pages/Search';

function Routes() {
  // const themeContext = useContext(ThemeContext).colors;
  return (
    <Navigator 
      initialRouteName="Feed"
      navigationOptions={
          {
              gesturesEnabled:true
          }
      }
      tabBarOptions={{
        // activecolor: themeContext.primary,
        // inactivecolor: themeContext.tertiary,
        upperCaseLabel:false,
        indicatorStyle:{
          height:0
        },
        showIcon:true,
        showLabel:true,
        style:{
            // backgroundColor: themeContext.secundary,
        },
      }}>

      <Screen name="Feed" component={Feed}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <IconNotify size={size} qtd={1} color={color} iconName="md-home" />
          ),
        }}
      />

      <Screen name="Search" component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <IconNotify size={size} qtd={1} color={color} iconName="ios-search" />
          ),
        }}
      />

      <Screen name="NewPost" component={NewPost}
        options={{
          tabBarLabel: "NewPost",
          tabBarIcon: ({ color, size }) => (
            <IconNotify size={size} qtd={1} color={color} iconName="ios-chatbubbles" />
          ),
        }}
      />

      <Screen name="Notification" component={Notification}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ color, size }) => (
            <IconNotify size={size} qtd={1} color={color} iconName="ios-heart-empty" />
          ),
        }}
      />

      <Screen name="MyPerfil" component={MyPerfil}
        options={{
          tabBarLabel: "MyPerfil",
          tabBarIcon: ({ color, size }) => (
            <IconNotify size={size} qtd={1} color={color} iconName="md-people" />
          ),
        }}
      />

    </Navigator>
  );
}

export default Routes;