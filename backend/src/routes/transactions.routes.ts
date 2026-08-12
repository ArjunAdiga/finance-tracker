import { Router } from "express";
import {
  createTransaction,
  getTransactions,
  getTransactionById,
} from "../controller/transactions.controller";

const router = Router();

// routes will be attached here, e.g.:
router.post("/", createTransaction);
router.get("/", getTransactions);
router.get("/:id", getTransactionById);

export default router;
