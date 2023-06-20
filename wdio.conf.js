const { join } = require('path')

exports.config = {
    hostname: '127.0.0.1',
    port: 4723, //Porta padrão do appium 
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "ebac-qe",
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(), './app/Android-NativeDemo.apk'),
        "appium:appWaitActivity": ".MainActivity"
    }]
}

