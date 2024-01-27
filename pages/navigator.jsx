import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MyTabBar from '../components/navigation/bottomTapBar';
import Home from './homeStack/home';
import Chapters from './homeStack/chapters';
import Challenges from './homeStack/challenges';
import LeaderBoard from './homeStack/leaderBoard';

const Tab = createBottomTabNavigator();
const parseTapBar = props => <MyTabBar {...props} />;
export default function MyTabs() {
  return (
    <Tab.Navigator tabBar={parseTapBar}>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Chapters"
        component={Chapters}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Challenges"
        component={Challenges}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Leaderboard"
        component={LeaderBoard}
      />
    </Tab.Navigator>
  );
}
