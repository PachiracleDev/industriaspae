import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "industriaspae",
  port: 3306,
});

export default pool;
