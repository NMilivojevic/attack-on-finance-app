import { Entypo } from "@expo/vector-icons";
import { Dispatch, SetStateAction, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Modal from "react-native-modal";
import { GlobalStyles } from "../../constants/styles";
import PrimaryButton from "../ui/button/PrimaryButton";

const Categories = ({
    setShowModal,
    showModal,
}: {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
    const {
        colors: { green, lightGrey, dark },
    } = GlobalStyles;

    // amount
    const [number, onChangeNumber] = useState<string>("");

    const Divider = (
        <View
            style={{
                borderBottomWidth: 1,
                borderBottomColor: "coral",
                width: "100%",
            }}
        />
    );

    return (
        <Modal
            isVisible={showModal}
            onBackButtonPress={() => setShowModal(false)}
            onBackdropPress={() => setShowModal(false)}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
        >
            <View style={[styles.centeredView, { backgroundColor: dark }]}>
                <View style={styles.modalContentWrapper}>
                    <Text style={{ fontSize: 18, fontWeight: "500" }}>
                        Expense Categories
                    </Text>
                    <View
                        style={{
                            gap: 5,
                            flexWrap: "wrap",
                            height: 100,
                        }}
                    >
                        {[...Array(10)].map((_, index) => (
                            <View
                                key={index}
                                style={{
                                    gap: 5,
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                }}
                            >
                                <Entypo
                                    name="dot-single"
                                    size={16}
                                    color="black"
                                />
                                <Text>Food</Text>
                            </View>
                        ))}
                    </View>

                    {/* add new category */}
                    <Text style={{ fontSize: 18, fontWeight: "500" }}>
                        Add New Category
                    </Text>
                    <TextInput
                        style={{
                            backgroundColor: "#fff",
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            borderRadius: 5,
                            width: 200,
                        }}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Enter Category"
                    />
                    {/* Add */}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <PrimaryButton
                            title="Add"
                            onPress={() => setShowModal(true)}
                            marginTop={0}
                        />
                        <PrimaryButton
                            title="Cancel"
                            bgColor="cancel"
                            marginTop={0}
                            onPress={() => setShowModal(false)}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        padding: 20,
    },
    modalContentWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 20,
    },
});

export default Categories;
