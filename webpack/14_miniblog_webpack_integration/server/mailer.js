const nodemailer = require('nodemailer');

function sendMail(recipientAddress, subject, body) {
	var smtpConfig = {
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: 'devugeesshop1234@gmail.com',
			pass: 'devugees2018'
			// user: 'spielzeug-preusse@web.de',
			// pass: 'Sins1A.preusse'
		}
	};

	var transporter = nodemailer.createTransport(smtpConfig);
	var mailOptions = {
		from: '"Devugees Shop" <devugeesshop@gmail.com>',
		to: recipientAddress,
		subject: subject,
		text: body,
		html: body
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log('mail was not delivered')
			}
			else {
				console.log('delivery successfull');
			};
	});
}

module.exports = sendMail;