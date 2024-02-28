const reservationEmailTemplate = require('../../../email-templates/reservation');

module.exports = {
  async send(ctx) {
    try {
      const { to, name, email, message } = ctx.request.body;

      const emailHtml = reservationEmailTemplate({ name, email, message });

      await strapi.plugins['email'].services.email.send({
        to: to,
        from: 'info@patrikvadura.cz',
        replyTo: email,
        subject: `Nová rezervace z webových stránek od ${name}`,
        text: message,
        html: emailHtml,
      });

      ctx.send({ message: 'Děkujeme za vaši rezervaci. Vyčkejte prosím na odpověď a potvrzení rezervace.' });
    } catch (err) {
      console.log(err);
      ctx.send({ error: 'Při odesílání emailu došlo k chybě. Zkuste to prosím za chvíli.' }, 500);
    }
  }
};
