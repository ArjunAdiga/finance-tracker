import { Router } from "express";
import {
  createTransaction,
  getTransactions,
} from "../controller/transactions.controller";

const router = Router();

// routes will be attached here, e.g.:
router.post("/", createTransaction);
router.get("/", getTransactions);

export default router;
