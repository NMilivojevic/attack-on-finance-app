import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CheckBoxProps {
    isChecked: boolean;
    onPress: () => void;
    title: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, onPress, title }) => {
    const iconName = isChecked ? "checkbox-marked" : "checkbox-blank-outline";

    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <MaterialCommunityIcons
                    name={iconName}
                    size={30}
                    color="#000"
                />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default CheckBox;

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: 100,
        marginTop: 5,
    },
    title: {
        fontSize: 16,
        color: "#000",
        marginLeft: 5,
        fontWeight: "600",
    },
});
