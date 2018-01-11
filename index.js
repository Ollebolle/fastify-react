const fastify = require('fastify')({
  logger: {
    enabled: true,
    prettyPrint: true
  }
})
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/'
})

fastify.listen(3000, (err) => {
  if (err) {
    throw err
  }
  fastify.log.info(`Server listening on port: ${fastify.server.address().port}`)
})
