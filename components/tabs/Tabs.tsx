import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Account from "../../screens/account/Account";
import Expenses from "../../screens/expenses/Expenses";
import Home from "../../screens/home/Home";
import Income from "../../screens/income/Income";
import Months from "../../screens/months/Months";
import StackHeading from "../home/StackHeading";

const BottomTabs = createBottomTabNavigator();

const Tabs = () => {
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const {
        colors: { dark, light, green, darkGreen },
    } = GlobalStyles;

    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: green,
                },
                tabBarStyle: {
                    backgroundColor: green,
                },
                tabBarLabelStyle: {
                    color: light,
                    fontSize: 12,
                    fontWeight: "500",
                },
                tabBarActiveBackgroundColor: darkGreen,
            }}
        >
            <BottomTabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={light} />
                    ),
                    headerTitle: (props) => <StackHeading {...props} />,
                }}
            />
            <BottomTabs.Screen
                name="Expenses"
                component={Expenses}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="payment"
                            size={size}
                            color={light}
                        />
                    ),
                    headerTitle: (props) => <StackHeading {...props} />,
                }}
            />
            <BottomTabs.Screen
                name="Income"
                component={Income}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="account-balance-wallet"
                            size={size}
                            color={light}
                        />
                    ),
                    headerTitle: (props) => <StackHeading {...props} />,
                }}
            />
            <BottomTabs.Screen
                name="Months"
                component={Months}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="calendar-today"
                            size={size}
                            color={light}
                        />
                    ),
                    headerTitle: (props) => <StackHeading {...props} />,
                }}
            />
            <BottomTabs.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="account-box"
                            size={size}
                            color={light}
                        />
                    ),
                    headerTitle: (props) => <StackHeading {...props} />,
                }}
            />
        </BottomTabs.Navigator>
    );
};

export default Tabs;
