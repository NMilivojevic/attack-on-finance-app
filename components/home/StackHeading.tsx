import { MaterialIcons } from "@expo/vector-icons";
import type { HeaderTitleProps } from "@react-navigation/elements";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const StackHeading = (props: HeaderTitleProps) => {
    const title = props.children;
    const todayDate = new Date().toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const headingWithDate = (
        <View style={styles.rowContainer}>
            <Text style={styles.headingTitle}>{title}</Text>
            <Text style={styles.headingTitle}>{todayDate}</Text>
        </View>
    );
    const headingWithLogout = (
        <View style={styles.rowContainer}>
            <Text style={styles.headingTitle}>{title}</Text>
            <TouchableOpacity style={styles.logoutBtn}>
                <Text style={styles.logoutBtnText}>Log out</Text>
                <MaterialIcons name="logout" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    );

    return title === "Account" ? headingWithLogout : headingWithDate;
};

const styles = StyleSheet.create({
    headingTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    logoutBtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "coral",
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    logoutBtnText: {
        fontWeight: "600",
        fontSize: 16,
        textTransform: "uppercase",
        color: "#fff",
    },
});

export default StackHeading;
