#!/bin/bash

# Update known hosts with VPS host
ssh-keyscan -H $VPS_HOST >> ~/.ssh/known_hosts

# Navigate to blockchain-client directory
cd ~/blockchain-client || exit

# Fetch latest changes from Git repository
git fetch

# Pull latest changes from Git repository
git pull

# Build the project using npm
npm run build

# Clear the contents of /var/www/blockchain-client directory
sudo rm -rf /var/www/blockchain-client/*

# Move the built files to /var/www/blockchain-client directory
sudo mv ~/blockchain-client/dist/* /var/www/blockchain-client/
