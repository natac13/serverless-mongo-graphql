import type { Serverless } from 'serverless/aws'

const serverlessConfiguration: Serverless = {
  service: {
    name: 'severlessmongographql'
    // app and org for use with dashboard.serverless.com
    // app: your-app-name,
    // org: your-org-name,
  },
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    },
    ['serverless-offline']: {
      httpPort: 3333,
      host: 'localhost',
      allowCache: true,
      noPrependStageInUrl: true
    }
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    stackName: 'BasicSLSMongoGraphQL',
    apiGateway: {
      minimumCompressionSize: 1024
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1'
    },
    httpApi: {
      payload: '1.0',
      cors: true
    }
  },
  package: {
    individually: true
  },
  functions: {
    graphql: {
      handler: 'src/index.handler',
      name: 'Graphql server',
      events: [
        {
          httpApi: {
            method: 'GET',
            path: '/graphql'
          }
        },
        {
          httpApi: {
            method: 'POST',
            path: '/graphql'
          }
        }
      ]
    }
  }
}

module.exports = serverlessConfiguration
