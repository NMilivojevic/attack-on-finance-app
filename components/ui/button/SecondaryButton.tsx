import { StyleSheet, Text, TouchableOpacity } from "react-native";

const SecondaryButton = ({
    title = "View",
    width = 175,
    onPress,
    textTransform = "capitalize",
}: {
    title?: string;
    width?: number;
    textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
    onPress: () => void;
}) => {
    let transformedTitle = title;

    if (textTransform === "capitalize") {
        transformedTitle = title.charAt(0).toUpperCase() + title.slice(1);
    } else if (textTransform === "uppercase") {
        transformedTitle = title.toUpperCase();
    } else if (textTransform === "lowercase") {
        transformedTitle = title.toLowerCase();
    }
    return (
        <TouchableOpacity
            style={[
                styles.btn,
                {
                    width,
                    backgroundColor: "transparent",
                    borderColor: "#fff",
                },
            ]}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text style={[styles.btnText]}>{transformedTitle}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        borderWidth: 1,
    },
    btnText: {
        fontWeight: "700",
        fontSize: 16,
        textAlign: "center",
    },
});

export default SecondaryButton;
