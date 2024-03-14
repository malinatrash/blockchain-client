#!/bin/bash
ssh-keyscan -H $VPS_HOST >> ~/.ssh/known_hosts
cd ~/blockchain-client || exit
git fetch
git pull
npm i
npm run build
sudo rm -rf /var/www/blockchain-client/*
sudo mv ~/blockchain-client/dist/* /var/www/blockchain-client/
