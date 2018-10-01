#!/bin/bash

IP="51.75.28.38"
path="server/public/cv/"

#read details
echo -e "Building..."
# npm run build
echo -n User:
read username
fullpath="$username@$IP:home/$username/$path"
echo -e "Sending to remote at $fullpath"
# ssh $username"@$IP:/home/$username/$path"
scp -r dist/ $username@$IP:/home/$username/$path
