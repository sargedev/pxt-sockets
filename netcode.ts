
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320;
    export const ARCADE_SCREEN_HEIGHT = 240;
}

const version = "0.2.3";
const domain = "hopeful-doe-notably.ngrok-free.app";
game.consoleOverlay.setVisible(true);

console.log(`WebSockets test v${version}`);
console.log("Press A to connect to server");

controller.A.pauseUntil(ControllerButtonEvent.Pressed);

const client = new WebSocket(`wss://${domain}`);
console.log(`Connecting to ${domain}...`);

control.runInParallel(() => {
    client.onopen = () => {
        console.log("Connected to server");

        client.send("Test message");
        console.log("[Sent] Test message");
    }

    client.onerror = (e) => {
        console.log(e);
    }

    client.onmessage = (msg) => {
        console.log(`[Server] ${msg}`);
    }
})
