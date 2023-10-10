
# Teste automatizado Mobile
Teste feito no app do Wdio. Neste teste foi pela primeira vez que realizei testes automatizados mobile.
 


## Pre-requisites

**WSL2** Precisa-se estar ativado em sua máquina

**Android Studio:** https://developer.android.com/studio 

**Vs Code:** https://code.visualstudio.com/download

**Appium Server GUI:** https://github.com/appium/appium-desktop 

**JDK 20:** https://www.oracle.com/br/java/technologies/downloads/

**Appium Inspector:** https://github.com/appium/appium-inspector/releases

**Native-Demo-App:** https://github.com/webdriverio/native-demo-app/releases






## Installation

**Wdio**

```bash
 npm init wdio .
```
````
exports.config = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "ebac-qe",
        "appium:automationName": "UiAutomator2",
         "appium:app": join(process.cwd(), './app/Android-NativeDemo.apk'),
        "appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"
        //"appium:appWaitActivity": "com.woocommerce.android/.ui.main.MainActivity"
    }],
    waitforTimeout: 10000,
    mochaOpts: {
        timeout: 50000
    },
    connectionRetryTimeout: 120000,
    //services: ['appium'],
    framework: 'mocha'
````


**Join**
```bash
 npm install join
```

````
const { join } = require('path')
````


## Running Tests
Comando para rodar em sua máquina

```bash
  npm test
```


## Documentation

[Documentation](https://webdriver.io/docs/api/element)

