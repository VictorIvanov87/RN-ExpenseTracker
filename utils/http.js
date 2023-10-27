import axios from "axios";

const FIREBASE_URL = "https://reactnative-expensesapp-default-rtdb.europe-west1.firebasedatabase.app";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(`${FIREBASE_URL}/expenses.json`, expenseData);

  return response.data.name;
};

export const fetchExpenses = async () => {
  const result = await axios.get(`${FIREBASE_URL}/expenses.json`);

  const expenses = [];

  for (const key in result.data) {
    const expense = {
      id: key,
      amount: result.data[key].amount,
      date: new Date(result.data[key].date),
      description: result.data[key].description
    };

    expenses.push(expense);
  }

  return expenses;
};

export const updateExpense = (id, expenseData) => {
  axios.put(`${FIREBASE_URL}/expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id) => {
  axios.delete(`${FIREBASE_URL}/expenses/${id}.json`);
};
