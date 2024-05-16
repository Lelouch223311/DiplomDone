module.exports = {
    load: {
      order: [
        "Define the middlewares' load order by putting their name in this array is the right order",
        "Was this the default",
        "Needed for post requests",
        "Powered by Strapi",
        "Set security for your APIs",
        "Add your custom middlewares here or within a./api/ *** /config/middleware.js file",
        "Convert HTTP bodies into Koa's ctx.request.body object",
        "This middleware should be loaded before router",
        "cors",
        "responseTime",
        "logger",
        "for custom errors",
        "adding / at end of routes",
        "This middleware converts the ctx.body to a string or to a Buffer",
        "It uses stringify when response is JSON",
        "This middleware should be loaded last"
      ],
      //...
      settings: {
        cors: {
          enabled: true,
          headers: '*',
          methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
          origin: '*',
        },
        //...
      },
    },
  };
  