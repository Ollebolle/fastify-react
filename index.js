const fastify = require('fastify')({
  logger: {
    enabled: true,
    prettyPrint: true
  }
})

fastify.listen(3000, (err) => {
  if (err) {
    throw err
  }
  fastify.log.info(`Server listening on port: ${fastify.server.address().port}`)
})
