import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View, useColorScheme } from "react-native";
import Info from "../../components/home/Info";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import { GlobalStyles } from "../../constants/styles";
import { RootStackParamList } from "../../types/types.dt";

type AddScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Add"
>;

const Home = () => {
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const {
        colors: { dark, light },
    } = GlobalStyles;

    const navigation = useNavigation<AddScreenNavigationProp>();

    const goToAddPage = () => {
        if (navigation) {
            navigation.navigate("Add", {
                source: "Home",
                headerTitle: "Add Expense Or Income",
            });
        }
    };

    return (
        <View
            style={[
                {
                    height: "100%",
                },
                isDarkTheme
                    ? { backgroundColor: dark }
                    : { backgroundColor: light },
            ]}
        >
            <View style={styles.balanceWrapper}>
                <Info title="start balance" amount={150000} />
                <Info title="end balance" amount={150000} />
            </View>
            <View style={styles.balanceWrapper}>
                <Info title="money left" amount={150000} />
                <Info title="saved money" amount={150000} />
            </View>
            <View style={styles.balanceWrapper}>
                <Info title="expenses planned" amount={150000} />
                <Info title="expenses actual" amount={150000} />
            </View>
            <View style={styles.balanceWrapper}>
                <View style={styles.balanceContainer}>
                    <PrimaryButton title="Add" onPress={goToAddPage} />
                </View>
                <Info title="income" amount={150000} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    balanceWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 50,
    },
    balanceContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10,
        width: 190,
        padding: 10,
        marginBottom: "auto",
    },
});

export default Home;
