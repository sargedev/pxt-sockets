
const version = "0.2.0";
const domain = "makecodelive.ddns.net:443";
game.consoleOverlay.setVisible(true);

console.log(`WebSockets test v${version}`);

const client = new WebSocket(`wss://${domain}`);
console.log("Connecting to server...");

control.runInParallel(() => {
    client.onopen = () => {
        console.log("Connected to server");

        client.send("Test message");
        console.log("[Sent] Test message");

        client.onmessage = (msg) => {
            console.log(`[Server] ${msg}`);
        }
    }
})