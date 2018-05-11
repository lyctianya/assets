var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 8076
    });
//广播
wss.broadcast = function broadcast(s, msg) {
    wss.clients.forEach(function each(client) {
        if (s == 1) {
            client.send("server:"+msg);
        }
        if (s == 0) {
            client.send("退出聊天室");
        }
    });
};
// 初始化  
wss.on('connection', function (ws) {
    // 发送消息
    ws.on('message', function (evt) {
        console.log(evt)
        wss.broadcast(1,evt);
    });
    // 退出聊天
    ws.on('close', function (close) {
        try {
            wss.broadcast(0);
        } catch (e) {
            console.log('刷新页面了');
        }
    });
});

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', function(line) {
//     ws.send("line");
// });

// rl.on('close', function() {
//     console.log('程序结束');
//     process.exit(0);
// });