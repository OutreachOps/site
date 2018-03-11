# operations-outreach

> Operations Outreach

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## CI/CD Setup

Build and deployment performed using AppVeyor.  
### Build Configuration
- Environment - Custom install script
``` powershell
    # Get the latest stable version of Node.js or io.js
    Install-Product node $env:nodejs_version
```
- Build - Custom build script
``` powershell
    .\build.ps1
```
- Artifacts  
    deploy-package.zip



### Deployment Configuration  
- Deployment uses  
Azure App Service Zip Push Deploy  
Deploys deploy-package.zip  
Configured deployment credentials  
