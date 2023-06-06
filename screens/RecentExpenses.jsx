import { StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

const RecentExpenses = () => {
  const ExpensesCtx = useContext(ExpensesContext);

  useEffect( () => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      console.log("================== This is the recent expense ================")
      console.log(expenses)
      ExpensesCtx.setExpenses(expenses);
    };
     getExpenses();
  }, []);

  const recentExpenses = ExpensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expensesPeriod="Last 7 days"
      expenses={recentExpenses}
      fallbackText="No expenses registered for the last 7 days."
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
