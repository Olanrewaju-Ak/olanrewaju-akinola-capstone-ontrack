import React from "react";
import { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { useParams } from "react-router-dom";
import axios from "axios";

// context
const GlobalContext = React.createContext();

//Provider Component
export const GlobalProvider = ({ children }) => {
	const [income, setIncome] = useState();
	const [expenses, setExpenses] = useState();
};
