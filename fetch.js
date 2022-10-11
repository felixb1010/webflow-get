const fetch = require('node-fetch')
module.exports = (url, args = {}) => {
    args.headers = args.headers || {}
    args.headers['user-agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15'
    return fetch(url, args)
  }