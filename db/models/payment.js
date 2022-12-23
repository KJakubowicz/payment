const db = require('../mysql');

class Payment {

    constructor(title, total) {
        this.title = title;
        this.total = total;
    }//end constructor()

    async save() {
        let date          = new Date();
        let year          = date.getFullYear();
        let month         = date.getMonth();
        let day           = date.getDay();
        let createdAtDate = `${year}-${month}-${day}`;

        let insertSql = `
            INSERT INTO payments
                (title, total, created_at) 
            VALUES 
                ('${this.title}', '${this.total}', '${createdAtDate}')
        `;

        const newPayment = await db.query(insertSql, function(error, results, fields){
            if (error) throw error;
            console.log('dodane');
            return 'test';
        });

    }//end save()

    static findAll() {

    }//end findAll()

}//end class

module.exports = Payment;