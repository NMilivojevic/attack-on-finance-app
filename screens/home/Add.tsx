import {
    DateTimePickerAndroid,
    DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import CheckBox from "../../components/ui/checkbox/Checkbox";
import { RootStackParamList } from "../../types/types.dt";

type AddScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Add"
>;

type AddScreenRouteProp = RouteProp<RootStackParamList, "Add">;

const Add = ({ route }: { route: AddScreenRouteProp }) => {
    const { source } = route.params || {};

    let initialAddType = source === "Income" ? "income" : "expense";

    // type of add
    const [addType, setAddType] = useState<string>(initialAddType);

    // date picker setup
    const [date, setDate] = useState<Date>(new Date());
    const onChange = (
        event: DateTimePickerEvent,
        selectedDate: Date | undefined
    ) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };
    const showDatepicker = () => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: "date",
            is24Hour: true,
        });
    };

    // type of expense
    const [expenseType, setExpenseType] = useState<string>("actual");

    // categories
    const [showCategories, setShowCategories] = useState<boolean>(false);
    const [categoryValue, setCategoryValue] = useState<string>("");
    const [expenseCategories, setExpenseCategories] = useState<
        { label: string; value: string }[]
    >([
        { label: "Food", value: "food" },
        { label: "Gifts", value: "gifts" },
        { label: "Health/Medical", value: "healthAndMedical" },
        { label: "Home", value: "home" },
        { label: "Transport", value: "transport" },
        { label: "Personal", value: "personal" },
        { label: "Pets", value: "pets" },
        { label: "Utilities", value: "utilities" },
        { label: "Travel", value: "traver" },
        { label: "Debt", value: "debt" },
        { label: "Other", value: "other" },
    ]);
    const [incomeCategories, setIncomeCategories] = useState<
        { label: string; value: string }[]
    >([
        { label: "Paycheck", value: "paycheck" },
        { label: "Savings", value: "savings" },
        { label: "Other", value: "other" },
    ]);

    // amount
    const [number, onChangeNumber] = useState<string>("");

    // submit form
    const handleSubmit = () => {
        console.log("addType", addType);
        console.log("date", date);
        console.log("expenseType", expenseType);
        console.log("categoryValue", categoryValue);
        console.log("number", number);
        goBackToPrevPage();
    };

    // go back to home
    const navigation = useNavigation<AddScreenNavigationProp>();
    const goBackToPrevPage = () => {
        if (navigation) {
            navigation.goBack();
        }
    };

    return (
        <View style={styles.wrapper}>
            {/* type of add */}
            {source === "Home" ? (
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 20,
                        alignItems: "center",
                    }}
                >
                    <Text style={styles.label}>Type:</Text>
                    <CheckBox
                        onPress={() => setAddType("expense")}
                        title="Expense"
                        isChecked={addType === "expense"}
                    />
                    <CheckBox
                        onPress={() => setAddType("income")}
                        title="Income"
                        isChecked={addType === "income"}
                    />
                </View>
            ) : null}
            {/* date of entry */}
            <View style={styles.dateContainer}>
                <Text style={styles.label}>Date:</Text>
                <Text style={styles.valueText}>
                    {date.toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </Text>
                <Pressable onPress={showDatepicker}>
                    <Text style={styles.changeDate}>Change</Text>
                </Pressable>
            </View>
            {/* if expense choosen */}
            {addType === "expense" ? (
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 20,
                        alignItems: "center",
                    }}
                >
                    <Text style={styles.label}>Expense Type:</Text>
                    <CheckBox
                        onPress={() => setExpenseType("actual")}
                        title="Actual"
                        isChecked={expenseType === "actual"}
                    />
                    <CheckBox
                        onPress={() => setExpenseType("planned")}
                        title="Planned"
                        isChecked={expenseType === "planned"}
                    />
                </View>
            ) : null}
            {/* category */}
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                    alignItems: "center",
                }}
            >
                <Text style={styles.label}>Category:</Text>
                <DropDownPicker
                    open={showCategories}
                    value={categoryValue}
                    items={
                        addType === "expense"
                            ? expenseCategories
                            : incomeCategories
                    }
                    setOpen={setShowCategories}
                    setValue={setCategoryValue}
                    setItems={
                        addType === "expense"
                            ? setExpenseCategories
                            : setIncomeCategories
                    }
                    placeholder={"Choose a category"}
                    containerStyle={{
                        width: 200,
                    }}
                />
            </View>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                    alignItems: "center",
                }}
            >
                <Text style={styles.label}>Amount:</Text>
                <TextInput
                    style={styles.amountInput}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Enter Amount"
                    keyboardType="numeric"
                />
            </View>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 30,
                    alignItems: "center",
                }}
            >
                <PrimaryButton onPress={handleSubmit} />
                <PrimaryButton
                    title="Cancel"
                    bgColor="cancel"
                    onPress={goBackToPrevPage}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 40,
        padding: 30,
    },
    addType: {
        width: 100,
        padding: 10,
        borderRadius: 15,
    },
    addTypeText: {
        fontWeight: "bold",
        textAlign: "center",
    },
    label: {
        fontSize: 18,
        fontWeight: "500",
    },
    valueText: {
        fontSize: 18,
        fontWeight: "500",
        color: "grey",
        marginLeft: 10,
    },
    changeDate: {
        textDecorationLine: "underline",
        fontSize: 18,
        fontWeight: "500",
        color: "orange",
    },
    dateContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 10,
    },
    amountInput: {
        backgroundColor: "#a9a9a9",
        padding: 8,
        borderRadius: 8,
    },
});

export default Add;
