module.exports = {
    getActualSqlDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDay() + 1;
        return `${year}-${month}-${day}`;
    },
};
