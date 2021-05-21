const nodemailer = require("nodemailer");
require('dotenv').config()
module.exports = emailController = {


    send: (req, res) => {
        const { name, email, phone, message } = req.body
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'marcelofranchini1988@gmail.com',
                pass: 'palmeiras9'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const output = `
            <p>Você recebeu um novo contato</p>
            <h3>Detalhes:</h3>
            <ul>  
            <li>Nome: ${name}</li>
            <li>Email: ${email}</li>
            <li>Telefone: ${phone}</li>
            </ul>
            <h3>Mensagem</h3>
            <p>${message}</p>
        `;


        let mailOptions = {
            from: 'marcelofranchini1988@gmail.com',
            to: 'marcelofranchini1988@gmail.com',
            subject: 'Contato Site',
            text: 'Email Site Marcelo',
            html: output
        };

        try {
            transporter.sendMail(mailOptions, function (err, info) {

                if (err) {
                    return res.status(500).json({ msg: err })
                }
                return res.status(200).json({ msg: 'sucesso' })


            });

        } catch (error) {
            return res.status(500).json({ msg: error })

        }
    }
}