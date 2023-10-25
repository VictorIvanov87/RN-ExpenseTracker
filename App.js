import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { GLOBAL_STYLES } from "./constants/styles";
import ManageExpense from "./screen/ManageExpense";
import RecentExpense from "./screen/RecentExpense";
import AllExpenses from "./screen/AllExpenses";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerTintColor: "white",
        headerStyle: { backgroundColor: GLOBAL_STYLES.colors.primary500 },
        tabBarStyle: { backgroundColor: GLOBAL_STYLES.colors.primary500 },
        tabBarActiveTintColor: GLOBAL_STYLES.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton name="plus" color={tintColor} onPress={() => navigation.navigate("ManageExpense")} />
        )
      })}
    >
      <BottomTabs.Screen
        name="RecentExpense"
        component={RecentExpense}
        options={{
          title: "Recent Expense",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => <AntDesign color={color} size={size} name="clockcircleo" />
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => <AntDesign color={color} size={size} name="calendar" />
        }}
      />
    </BottomTabs.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GLOBAL_STYLES.colors.primary500 },
            headerTintColor: "white"
          }}
        >
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{ headerShown: false }} />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{ title: "Manage Expense", presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
