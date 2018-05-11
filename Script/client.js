 var WebSocket = require('ws')
 var ws = new WebSocket("ws://localhost:8076");

 ws.onopen = function() {
     console.log("连接状态", ws.readyState);
 };
 ws.onmessage = function(evt) {
     console.log("receive msg:" + evt.data)
 };
 ws.onclose = function(evt) {
     console.log("WebSocketClosed!");
     // console.log(evt);
 };
 ws.onerror = function(evt) {
     console.log("WebSocketError!");
 };

 const readline = require("readline");
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });

 rl.on('line', function(line) {
     ws.send(line);
 });

 rl.on('close', function() {
     console.log('程序结束');
     process.exit(0);
 });