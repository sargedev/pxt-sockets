game.consoleOverlay.setVisible(true)
control.runInParallel(function() {
    console.log(`connecting to http://hopeful-doe-notably.ngrok-free.app/`)

    // string tests
    const ws = new WebSocket("wss://hopeful-doe-notably.ngrok-free.app")
    ws.onerror = () => console.log("error")
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