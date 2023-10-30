import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
import Categories from "../../components/modals/Categories";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import { RootStackParamList } from "../../types/types.dt";

type IncomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "SingleIncomeCategory"
>;

const Income: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const navigation = useNavigation<IncomeScreenNavigationProp>();
    const goToAddPage = () => {
        if (navigation) {
            navigation.navigate("Add", {
                source: "Income",
                headerTitle: "Add Income",
            });
        }
    };

    const gotToSingleIncomeCategory = () => {
        if (navigation) {
            navigation.navigate("SingleIncomeCategory", {
                expenseId: "123",
                headerTitle: "Paycheck",
            });
        }
    };

    return (
        <View style={{ height: "100%" }}>
            {/* modal */}
            <Categories showModal={showModal} setShowModal={setShowModal} />
            <View style={styles.btnWrapper}>
                <PrimaryButton
                    title="View Categories"
                    onPress={() => setShowModal(true)}
                />
                <PrimaryButton title="Add Income" onPress={goToAddPage} />
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
                                    Category
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
                                    Planned
                                </Text>
                                <Text
                                    style={{
                                        color: "#5A5A5A",
                                    }}
                                >
                                    20000
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
                                    Actual
                                </Text>
                                <Text
                                    style={{
                                        color: "#5A5A5A",
                                    }}
                                >
                                    20000
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
                                    Diff
                                </Text>
                                <Text
                                    style={{
                                        color: "#5A5A5A",
                                    }}
                                >
                                    20000
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
                                onPress={gotToSingleIncomeCategory}
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
                                        Food
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
                                        20000
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
                                        20000
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
                                        20000
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

export default Income;
