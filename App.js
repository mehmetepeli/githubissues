import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Issues from "./components/Issues";
import IssueDetail from "./components/IssueDetail";
import Bookmarks from "./components/Bookmarks";
import {Provider} from "react-redux";
import {Store} from "./components/redux/store";

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Provider store={Store}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name="Home" component={Issues} options={{ title: 'Github Issues' }} />
                  <Stack.Screen name="IssueDetail" component={IssueDetail} />
                  <Stack.Screen name="Bookmarks" component={Bookmarks} />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}

export default App;
