import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import TabRoutes from './tab.routes';

import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import { Constantes } from '../utils/Constants';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Home">
      <App.Screen
        options={{
          cardStyle: { backgroundColor: Constantes.Colors.BackgroundHomeBlack },
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <App.Screen
        name="MainBottom"
        component={TabRoutes}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <App.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="arrow-left"
              size={24}
              color="#FFB84D"
              onPress={() => navigation.goBack()}
            />
          ),
          headerLeftContainerStyle: {
            marginLeft: 24,
          },
          headerRight: () => <Icon name="heart" size={24} color="#FFB84D" />,
          headerRightContainerStyle: {
            marginRight: 24,
          },
          headerTitle: 'Detalhes do filme',
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'ShipporiMincho-Regular',
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: Constantes.Colors.BackgroundHomeBlack,
            elevation: 0,
            borderWidth: 0,
            shadowColor: 'transparent',
          },
        })}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
