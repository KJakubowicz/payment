const { PORT, TYPE, HOST, USER, PASSWORD, NAME } = process.env;

module.exports = {
    port: PORT || 3000,
    db_type: TYPE || "mysql",
    db_host: HOST || "localhost",
    db_user: USER || "root",
    db_password: PASSWORD || "",
    db_name: NAME || "db_payment",
};
