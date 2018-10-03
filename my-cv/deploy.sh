#!/bin/bash

IP="51.75.28.38"
path="server/public/cv/"

#read details
echo -e "Building..."
npm run build
echo -n User:
read username
fullpath="$username@$IP:home/$username/$path"
echo -e "Removing old version at $fullpath"

ssh "$username@$IP" "rm -R $fullpath"
echo -e "Sending to remote at $fullpath"

scp -r dist/ $username@$IP:/home/$username/$path
