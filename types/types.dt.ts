export type RootStackParamList = {
    Tabs: undefined;
    Home: undefined;
    Expenses: undefined;
    Account: undefined;
    Add: { source: string; headerTitle?: string };
    SingleExpenseCategory: { expenseId: string; headerTitle: string };
    SingleIncomeCategory: { expenseId: string; headerTitle: string };
    EditAccount: undefined;
};
