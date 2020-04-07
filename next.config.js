const withOffline = require('next-offline')

const nextConfig = {
   env: {
      //   add env. variables
   },
   webpack: (config) => {
      //    do webpack things
      return config
   },
}

module.exports = withOffline(nextConfig)
