module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/positron/dist/'
    : '/'
}
