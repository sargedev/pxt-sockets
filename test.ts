
const version = "0.0.6";

game.consoleOverlay.setVisible(true)
control.runInParallel(function() {

    console.log(`WebSockets test v${version}`);

    // string tests
    const ws = new WebSocket("wss://makecode-websocket-server.glitch.me")
    ws.onerror = (e: Event) => console.log("error")
    ws.onmessage = (msg) => {
        const data = msg.data;
        console.log(`[Recieved] ${data}`)
    }
    ws.onopen = () => {
        const msg = "Sarge test";
        ws.send(msg);
        console.log(`[Sent] ${msg}`);
    }    
})