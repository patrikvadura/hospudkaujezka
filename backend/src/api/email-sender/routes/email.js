module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/email-sender/send',
      handler: 'email.send',
      config: {
        auth: false,
      },
    },
  ],
};
