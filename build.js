var liveServer = require("live-server");
var params = {
    port: 80,
    host: "0.0.0.0",
    open: false,
    file: "index.html",
    wait: 1000,
    logLevel: 2,
};
liveServer.start(params);