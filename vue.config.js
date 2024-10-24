const path = require('path')
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // chainWebpack: (config) => {
  //     // config.optimization.minimize(false)
  // },
  // transpileDependencies: ['zbase-popup-component'],
  chainWebpack: (config) => {
    // 排除 public 目录下的 pay 文件夹
    config.plugin('copy').tap((args) => {
      // args[0][0].ignore.push('**/pay/**')
      return args
    })
  },
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    },
    index: {
      template: 'public/index.html',
      entry: './src/options/main.js',
      title: 'index'
    }
  },
  transpileDependencies: ['zbase-popup-component', 'serialize-error'],
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        },
        contentScripts: {
          entries: {
            'content-test': [
              'src/contentScripts/content-test.js'
            ],
            'inject/content.bundle': ['src/contentScripts/main.js'],
            'inject/obfuscate': ['src/obfuscate/obfuscate.js'],
            'inject/inject.bundle': ['src/injectScripts/main.js']
          }
        }
      },
      manifestTransformer: (manifest) => {
        delete manifest.content_security_policy
        return manifest
      }
    }
  },
  css: {
    extract: false
  },
  filenameHashing: false
}
