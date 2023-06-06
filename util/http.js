import axios from "axios";

export const storeExpense = (expenseData) => {
  axios.post(
    "https://react-native-course-88789-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
};

export const fetchExpenses = async () => {
  const response = await axios.get(
    "https://react-native-course-88789-default-rtdb.firebaseio.com/expenses.json"
  );

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
};
