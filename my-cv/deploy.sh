#!/bin/bash

IP="51.75.28.38"
path="server/public/cv/"

#read details
echo -n User:
read username
echo -e "Building..."
#npm run build
fullpath="$username@$IP:home/$username/$path"
echo -e "Sending to remote at $fullpath"
scp -r dit/ $username@$IP:home/$username/$path
