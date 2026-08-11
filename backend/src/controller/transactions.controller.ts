import { Request, Response } from "express";
import * as transactionService from "../service/transactions.service";

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { amount, subcategory, category, date, note } = req.body;

    if (!amount || !category || !date) {
      return res
        .status(400)
        .json({ error: "amount, category  and date are required" });
    }

    const transaction = await transactionService.create({
      amount,
      category,
      date,
      note,
      subcategory,
    });
    res.status(201).json(transaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create transaction" });
  }
};

export const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await transactionService.getAll();
    res.status(201).json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};
