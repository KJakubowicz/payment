const Payment  = require('../db/models/payment');
const Response = require('../controllers/responseController');

module.exports = {
    createPayment (req, res) {
        let payment  = new Payment('tytuł', '124,21');
        let response = new Response();
 
        const paymentRes = payment.save().then((test) => {
            // console.log('płatność została dodana');
            res.send(response.success(test));
        });

        
    }
}
