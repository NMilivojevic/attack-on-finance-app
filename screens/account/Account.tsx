import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import { RootStackParamList } from "../../types/types.dt";

type ScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "EditAccount"
>;

const Account = () => {
    const navigation = useNavigation<ScreenNavigationProp>();
    const goToEditAccount = () => {
        if (navigation) {
            navigation.navigate("EditAccount");
        }
    };
    return (
        <View style={{ flexDirection: "column", padding: 20, gap: 20 }}>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, width: 100 }}>First Name:</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Jane</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, width: 100 }}>Last Name:</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Doe</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, width: 100 }}>Email:</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    janedoe@mail.com
                </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, width: 100 }}>Password:</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    * * * * * * * *
                </Text>
            </View>
            <PrimaryButton title="Edit" onPress={goToEditAccount} />
        </View>
    );
};

export default Account;
