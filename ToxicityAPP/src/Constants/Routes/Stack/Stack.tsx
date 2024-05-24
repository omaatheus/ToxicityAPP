import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PageBan from '../../../Screens/PageBan/PageBan';
import Posts from '../../../Screens/Posts/Posts';

const Stack = createStackNavigator()

export default function RouteStack() {
  return (
    
      <NavigationContainer>

        <Stack.Navigator 
        screenOptions={{headerShown: false}} 
        initialRouteName='Posts'> 

          <Stack.Screen name='PageBan' component={PageBan} />
          <Stack.Screen name='Posts' component={Posts} />

        </Stack.Navigator>

      </NavigationContainer>
  );
}
