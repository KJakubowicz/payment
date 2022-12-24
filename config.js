module.exports = {
    port: process.env.PORT || 3000,
    db_type: process.env.TYPE || "mysql",
    db_host: process.env.HOST || "localhost",
    db_user: process.env.USER || "root",
    db_password: process.env.PASSWORD || "",
    db_name: process.env.NAME || "db_payment",
};
