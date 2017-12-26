git pull
#npm install
npm run build
rm -r /var/www/html/mvc-wallet-demo/*
cp -r dist/* /var/www/html/mvc-wallet-demo
