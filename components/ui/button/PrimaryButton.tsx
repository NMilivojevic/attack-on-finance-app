import {
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
} from "react-native";
import { GlobalStyles } from "../../../constants/styles";

const PrimaryButton = ({
    title = "Save",
    width = 175,
    marginTop = 20,
    onPress,
    bgColor = "save",
}: {
    title?: string;
    width?: number;
    marginTop?: number;
    onPress: () => void;
    bgColor?: string;
}) => {
    const theme = useColorScheme();
    const {
        colors: { lightGrey, light, green },
    } = GlobalStyles;

    function renderBg(param: string) {
        switch (param) {
            case "save":
                return green;
            case "add":
                return "coral";
            case "cancel":
                return lightGrey;
            default:
                return green;
        }
    }

    return (
        <TouchableOpacity
            style={[
                styles.btn,
                {
                    width,
                    marginTop,
                    backgroundColor: renderBg(bgColor),
                },
            ]}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.btnText,
                    {
                        color: light,
                    },
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    btnText: {
        fontWeight: "700",
        fontSize: 16,
        textTransform: "uppercase",
        textAlign: "center",
    },
});

export default PrimaryButton;
