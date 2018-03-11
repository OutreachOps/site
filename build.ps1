WRITE-HOST "Building"
WRITE-HOST "node Version"
& node -v
WRITE-HOST "npm Version"
& npm -v

& npm install
& npm run build


Compress-Archive .\dist\* .\deploy-package.zip