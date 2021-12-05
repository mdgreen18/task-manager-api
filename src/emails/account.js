const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'matthewdgreen18@protonmail.com',
        subject: 'Thanks for signing up!',
        text: `Welcome to the app, ${name}. Let me know how you like the app!`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'matthewdgreen18@protonmail.com',
        subject: 'Sorry to see you go!',
        text: `${name} you have cancelled your account. Hope you come back soon!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}