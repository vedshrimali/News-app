import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';

//Services
import { navigationRef, isReadyRef } from '../services/navigation.service';

//Screens 
import LoginScene from '../scenes/loginScene/login.scene';
import SplashScene from '../scenes/splashScene/splash.scene';
import LanguageSelectScene from '../scenes/languageSelectScene/languageSelect.scene';
import SelectCityScene from '../scenes/selectCityScene/selectCity.scene';
import SelectStateScene from '../scenes/selectStateScene/selectState.scene';
import SelectDistrictScene from '../scenes/selectdistrictscene/selectdistrict.scene';
import SelectTehsilScene from '../scenes/SelectTehsilScene/SelectTehsil.scene';
import LogPageScene from '../scenes/LogPageScene/LogPage.scene';

import HomeScene from '../scenes/homeScene/home.scene';
import TrendingScene from '../scenes/trendingScene/trending.scene';
import SearchScene from '../scenes/searchScene/search.scene';
import ProfileScene from '../scenes/profileScene/profile.scene';

import Tabbar from '../components/Tabbar/tabBar.component';

enableScreens();

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      tabBar={(props) => <Tabbar {...props} />}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScene}
      />

      <Tabs.Screen
        name="Trending"
        component={TrendingScene}
      />
      <Tabs.Screen
        name="Search"
        component={SearchScene}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScene}
      />
    </Tabs.Navigator>
  )
}

function RootNavigator() {
  React.useEffect(() => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator
        initialRouteName="Splash"
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={SplashScene}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SelectLanguage"
          component={LanguageSelectScene}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SelectCity"
          component={SelectCityScene}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SelectState"
          component={SelectStateScene}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SelectDistrict"
          component={SelectDistrictScene}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SelectTehsil"
          component={SelectTehsilScene}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LogPage"
          component={LogPageScene}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tabs"
          component={TabsNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;