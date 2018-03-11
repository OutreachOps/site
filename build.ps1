WRITE-HOST "Building"
WRITE-HOST "node Version"
& node -v
WRITE-HOST "npm Version"
& npm -v

& npm install
& npm run build

Copy-Item .\web.config .\dist\web.config
Compress-Archive .\dist\* .\deploy-package.zip -Force