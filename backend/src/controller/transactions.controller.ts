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

export const getTransactionById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const transaction = await transactionService.getTransaction(id as string);
    if (!transaction) {
      // ← handle not found
      return res.status(404).json({ error: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (err) {
    console.error(err);
    res.status(404).json({ error: "Failed to fetch transaction" });
  }
};
