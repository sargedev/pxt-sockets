
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320;
    export const ARCADE_SCREEN_HEIGHT = 240;
}

const version = "0.2.4";
const domain = "hopeful-doe-notably.ngrok-free.app";
game.consoleOverlay.setVisible(true);

control.runInParallel(() => {
    console.log(`WebSockets test v${version}`);
    console.log("Press A to connect to server");

    controller.A.pauseUntil(ControllerButtonEvent.Pressed);

    const client = new WebSocket(`wss://${domain}`);
    console.log(`Connecting to ${domain}...`);

    client.onopen = () => {
        console.log("Connected to server");

        client.send("Test message");
        console.log("[Sent] Test message");
    }

    client.onerror = (e) => {
        console.log(`An error occurred: ${e}`);
    }

    client.onmessage = (msg) => {
        console.log(`[Server] ${msg}`);
    }
})
