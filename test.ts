game.consoleOverlay.setVisible(true)
control.runInParallel(function() {
    console.log(`connecting to https://www.websocket.org/echo.html`)

        // string tests
        const ws = new WebSocket("wss://echo.websocket.org")
        ws.onerror = () => console.log("error")
        ws.onmessage = (msg) => {
            const data = msg.data;
            console.log(`--> ${data}`)
        }
        ws.onopen = () => {
            ws.send("makecode test");
        }    
})
