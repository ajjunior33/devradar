import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from  'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions:{
                title: "DevRadar",
            }
        },
        Profile:{
            screen: Profile,
            navigationOptions:{
                title: "Perfil no GitHub",
            }
        }
    },{
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor: '#7D48E7',
            },
            headerTintColor: '#ffffff',
            headerBackTitleVisible: false

        }
    })
);

export default Routes;