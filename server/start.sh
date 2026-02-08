#!/bin/bash
cd /home/lohitaksh/Desktop/CoDeC/server
node index.js > server.log 2>&1 &
echo $! > server.pid
echo "Server started with PID $(cat server.pid)"
