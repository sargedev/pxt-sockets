
const version = "0.0.7";
const domain = "makecodelive.ddns.net:443"

game.consoleOverlay.setVisible(true)
control.runInParallel(function() {

    console.log(`WebSockets test v${version}`);
    console.log(`Connecting to '${domain}'`)

    // string tests
    const ws = new WebSocket(`wss://${domain}`)
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