import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Tabs from "./components/tabs/Tabs";
import EditAccount from "./screens/account/EditAccount";
import SingleExpenseCategory from "./screens/expenses/SingleExpenseCategory";
import Add from "./screens/home/Add";
import SingleIncomeCategory from "./screens/income/SingleIncomeCategory";
import { RootStackParamList } from "./types/types.dt";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Tabs"
                        component={Tabs}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Add"
                        component={Add}
                        options={({ route }) => ({
                            title: route.params.headerTitle,
                            animation: "slide_from_right",
                        })}
                    />
                    <Stack.Screen
                        name="SingleExpenseCategory"
                        component={SingleExpenseCategory}
                        options={({ route }) => ({
                            title: route.params.headerTitle,
                            animation: "slide_from_right",
                        })}
                    />
                    <Stack.Screen
                        name="SingleIncomeCategory"
                        component={SingleIncomeCategory}
                        options={({ route }) => ({
                            title: route.params.headerTitle,
                            animation: "slide_from_right",
                        })}
                    />
                    <Stack.Screen
                        name="EditAccount"
                        component={EditAccount}
                        options={{
                            title: "Edit Account",
                            animation: "slide_from_right",
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
