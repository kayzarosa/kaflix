import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import Dashboard from '../pages/Dashboard';
import Favorites from '../pages/Favorites';
import Novidades from '../pages/Novidades';

import { Constantes } from '../utils/Constants';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      activeTintColor: Constantes.Colors.BackgroundHomeBlack,
      labelStyle: {
        fontFamily: 'ShipporiMincho-Regular',
        fontSize: 12,
        fontWeight: '600',
      },
      inactiveTintColor: '#B7B7CC',
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <Icon size={25} name="list" color={color} />,
        title: 'Home',
      }}
      name="DashboardStack"
      component={(Dashboard)}
    />
    <Tab.Screen
      name="Novidades"
      options={{
        tabBarIcon: ({ color }) => (
          <Icon size={25} name="film" color={color} />
        ),
        title: 'Novidades',
      }}
      component={Novidades}
    />

    <Tab.Screen
      name="Favorites"
      options={{
        tabBarIcon: ({ color }) => (
          <Icon size={25} name="heart" color={color} />
        ),
        title: 'Favoritos',
      }}
      component={Favorites}
    />
  </Tab.Navigator>
);

export default TabRoutes;
