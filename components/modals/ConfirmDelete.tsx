import { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import PrimaryButton from "../ui/button/PrimaryButton";

const ConfirmDelete = ({
    setShowModal,
    showModal,
}: {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <Modal
            isVisible={showModal}
            onBackButtonPress={() => setShowModal(false)}
            onBackdropPress={() => setShowModal(false)}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
        >
            <View style={[styles.centeredView, { backgroundColor: "black" }]}>
                <View style={styles.modalContentWrapper}>
                    <Text style={{ fontSize: 18, fontWeight: "500" }}>
                        Are you sure you want to delete this expense entry?
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <PrimaryButton
                            title="Delete"
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
        alignItems: "center",
        gap: 20,
    },
});

export default ConfirmDelete;
