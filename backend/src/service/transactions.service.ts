import { pool } from "../config/db";

interface CreateTransactionInput {
  amount: number;
  category: string;
  subcategory: string;
  date: string;
  note?: string;
}

export const create = async (data: CreateTransactionInput) => {
  const { amount, category, subcategory, date, note } = data;

  const result = await pool.query(
    `INSERT INTO transactions (amount, category,subcategory, date, note)
     VALUES ($1, $2, $3, $4,$5)
     RETURNING *`,
    [amount, category, subcategory, date, note],
  );

  return result.rows[0];
};

export const getAll = async () => {
  const result = await pool.query(
    `SELECT * FROM transactions ORDER BY date DESC`,
  );
  console.log(result);
  return result.rows;
};
