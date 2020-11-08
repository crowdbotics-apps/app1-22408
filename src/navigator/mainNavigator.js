import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile169528Navigator from '../features/UserProfile169528/navigator';
import Settings169527Navigator from '../features/Settings169527/navigator';
import Settings169525Navigator from '../features/Settings169525/navigator';
import SignIn2169523Navigator from '../features/SignIn2169523/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile169528: { screen: UserProfile169528Navigator },
Settings169527: { screen: Settings169527Navigator },
Settings169525: { screen: Settings169525Navigator },
SignIn2169523: { screen: SignIn2169523Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
