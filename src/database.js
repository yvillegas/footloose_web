import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "34.83.170.177",
  port: "3306",
  user: "user2",
  password: "12345678",
  database: "footlose",
});

export default pool;

// import { createPool } from "mysql2/promise";

// const pool = createPool({
//   host: "localhost",
//   port: "3306",
//   user: "root",
//   password: "12345678",
//   database: "Footlose",
// });

// export default pool;
