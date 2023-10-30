import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Info = ({ title, amount }: { title: string; amount: number }) => {
    const theme = useColorScheme();
    const isDarkTheme = theme === "dark";
    const {
        colors: { dark, light, green },
    } = GlobalStyles;

    const Divider = (
        <View
            style={{
                borderBottomWidth: 1,
                borderBottomColor: isDarkTheme ? green : dark,
                width: "100%",
            }}
        />
    );

    return (
        <View style={styles.infoContainer}>
            <Text style={styles.primary}>{title}</Text>
            {Divider}
            <Text style={styles.secondary}>{amount.toLocaleString()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10,
        width: 190,
        padding: 10,
        marginBottom: "auto",
    },
    primary: {
        fontSize: 20,
        textTransform: "capitalize",
    },
    secondary: {
        fontSize: 20,
        fontWeight: "700",
    },
});

export default Info;
