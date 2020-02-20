import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const SENDGRID_API_KEY = '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'


const sendEmail = async ({ name, email, message }) => {
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email
                }
              ],
              subject: 'Demo success :)'
            }
          ],
          from: {
            email: 'noreply@demo.com',
            name: 'Tenzin Blog',
            message: null
          },
          content: [
            {
              type: 'text/html',
              value: `Congratulations <b>${name}</b>, ${message}`
            }
          ]
        })
    });
}

export { sendEmail };