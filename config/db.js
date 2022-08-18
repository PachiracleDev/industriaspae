import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "containers-us-west-23.railway.app",
  user: "root",
  password: "kSrna8F1uVG3WhTzEJjB",
  database: "railway",
  port: 7014,
});

export default pool;
