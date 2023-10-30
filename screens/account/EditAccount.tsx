import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import PrimaryButton from "../../components/ui/button/PrimaryButton";

const EditAccount = () => {
    const [firstName, setFirstName] = useState<string>("Jane");
    const [lastName, setLastName] = useState<string>("Doe");
    const [email, setEmail] = useState<string>("example@mail.com");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleSubmit = () => {
        console.log(firstName, lastName, email, password, confirmPassword);
    };

    return (
        <View style={{ flexDirection: "column", padding: 20, gap: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 16, width: 100 }}>First Name:</Text>
                <TextInput
                    style={{
                        backgroundColor: "#fff",
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        borderRadius: 5,
                        width: 200,
                    }}
                    onChangeText={setFirstName}
                    value={firstName}
                    placeholder="Enter First Name"
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 16, width: 100 }}>Last Name:</Text>
                <TextInput
                    style={{
                        backgroundColor: "#fff",
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        borderRadius: 5,
                        width: 200,
                    }}
                    onChangeText={setLastName}
                    value={lastName}
                    placeholder="Enter Last Name"
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 16, width: 100 }}>Email:</Text>
                <TextInput
                    style={{
                        backgroundColor: "#fff",
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        borderRadius: 5,
                        width: 200,
                    }}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Enter Email Address"
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                <Text style={{ fontSize: 16, width: 100, marginTop: 10 }}>
                    Password:
                </Text>
                <View style={{ flexDirection: "column", gap: 20 }}>
                    <TextInput
                        style={{
                            backgroundColor: "#fff",
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            borderRadius: 5,
                            width: 200,
                        }}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Enter New Password"
                    />
                    {password.length > 0 ? (
                        <TextInput
                            style={{
                                backgroundColor: "#fff",
                                paddingVertical: 10,
                                paddingHorizontal: 15,
                                borderRadius: 5,
                                width: 200,
                            }}
                            onChangeText={setConfirmPassword}
                            value={confirmPassword}
                            placeholder="Confirm New Password"
                        />
                    ) : null}
                </View>
            </View>

            <PrimaryButton onPress={handleSubmit} />
        </View>
    );
};

export default EditAccount;
