import axios from "axios";

const BACKEND_URL = "https://react-native-course-88789-default-rtdb.firebaseio.com";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(
   BACKEND_URL +  "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
};

export const fetchExpenses = async () => {
  const response = await axios.get(
    BACKEND_URL + "/expenses.json"
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

export const updateExpense = (id, updatedExpenseData) => {
  return axios.put(
    BACKEND_URL + `/expenses/${id}.json`,
    updatedExpenseData
  );
};

export const deleteExpense = async (id) => {
  return axios.delete(
    BACKEND_URL + `/expenses/${id}.json`
  );
};
