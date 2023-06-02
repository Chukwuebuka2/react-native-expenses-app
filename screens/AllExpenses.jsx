import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const ExpensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expensesPeriod="Total"
      expenses={ExpensesCtx.expenses}
      fallbackText="No registered expenses found"
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
