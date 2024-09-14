
const version = "0.1.3";

/*
game.consoleOverlay.setVisible(true);
control.runInParallel(function() {

    console.log(`WebSockets test v${version}`);
    console.log(`Connecting to '${domain}'`)

    const ws = new WebSocket(`wss://${domain}`)
    ws.onerror = (e: Event) => console.log("error")
    ws.onmessage = (msg) => {
        const printData = JSON.stringify(msg.data);
        console.log(`[Recieved] ${printData}`)
    }
    ws.onopen = () => {
        const msg = "Sarge test";
        ws.send(msg);
        console.log(`[Sent] ${msg}`);
    }    
})

*/