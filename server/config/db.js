dbURIs = {
  test: "mongodb://localhost/react-express-auth-app",
  development: "mongodb://localhost/react-express-auth-app",
  production: process.env.MONGOLAB_URI || "mongodb://localhost/react-express-auth-app"
}

module.exports = function(env) {
  return dbURIs[env];
}