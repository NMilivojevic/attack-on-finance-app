import { AntDesign } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
import ConfirmDelete from "../../components/modals/ConfirmDelete";
import { RootStackParamList } from "../../types/types.dt";

type SingleExpenseCategoryScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "SingleExpenseCategory"
>;

const SingleExpenseCategory: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View style={{ height: "100%" }}>
            {/* delete modal */}
            <ConfirmDelete showModal={showModal} setShowModal={setShowModal} />
            <View style={styles.btnWrapper}>
                <Text style={{ fontSize: 16, paddingHorizontal: 10 }}>
                    Actual Expenses, October 2023
                </Text>
            </View>
            <View
                style={{
                    flex: 1,
                    marginVertical: 10,
                }}
            >
                <ScrollView style={{ height: "100%" }}>
                    <Grid
                        style={{
                            backgroundColor: "transparent",
                            margin: 20,
                            borderRadius: 6,
                        }}
                    >
                        {/* table head */}
                        <Row
                            style={{
                                backgroundColor: "#4A4A4A",
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                                // borderBottomWidth: 1,
                            }}
                        >
                            <Col
                                style={{
                                    paddingVertical: 10,
                                    paddingHorizontal: 15,
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#5A5A5A",
                                    }}
                                >
                                    Amount
                                </Text>
                            </Col>
                            <Col
                                style={{
                                    paddingVertical: 10,
                                    paddingHorizontal: 15,
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#5A5A5A",
                                    }}
                                >
                                    Date Of Entry
                                </Text>
                            </Col>
                            <Col
                                style={{
                                    paddingVertical: 10,
                                    paddingHorizontal: 15,
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#5A5A5A",
                                    }}
                                >
                                    &nbsp;
                                </Text>
                            </Col>
                        </Row>
                        {/* table body */}
                        {[...Array(20)].map((_, index) => (
                            <Row
                                key={index}
                                style={{
                                    borderBottomWidth: 1,
                                    backgroundColor: "#656565",
                                }}
                            >
                                <Col
                                    style={{
                                        paddingHorizontal: 15,
                                        paddingVertical: 10,
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#fff",
                                        }}
                                    >
                                        10000
                                    </Text>
                                </Col>
                                <Col
                                    style={{
                                        paddingVertical: 10,
                                        paddingHorizontal: 15,
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#fff",
                                        }}
                                    >
                                        13/12/2022
                                    </Text>
                                </Col>
                                <Col
                                    style={{
                                        paddingVertical: 10,
                                        paddingHorizontal: 15,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                    onPress={() => setShowModal(true)}
                                >
                                    <Text
                                        style={{
                                            color: "#fff",
                                        }}
                                    >
                                        <AntDesign
                                            name="delete"
                                            size={20}
                                            color="black"
                                        />
                                    </Text>
                                </Col>
                            </Row>
                        ))}
                    </Grid>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    btnWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        padding: 10,
        width: "100%",
    },
    container: {
        padding: 15,
    },
    col: {},
    text: {
        color: "#5A5A5A",
    },
});

export default SingleExpenseCategory;
