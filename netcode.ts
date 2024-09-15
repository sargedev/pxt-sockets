
game.consoleOverlay.setVisible(true);

const ERR_EMPTY_RESPONSE = "Response is empty or invalid";
const ERR_INVALID_RESPONSE = "Invalid response";

interface Response { [key: string]: any };
interface Result {
    response?: Response;
    error?: string;
}

class SocketHandler {
    socket: WebSocket;
    handlers: ((response: Response) => any)[];
    
    constructor(socket: WebSocket) {
        this.socket = socket;
        this.handlers = [];
        socket.onmessage = (msg) => this.broadcast(msg);
    }

    subscribe(handler: (response: Response) => any) {
        this.handlers.push(handler);
    }

    private validate(msg: MessageEvent): Result {
        let json = JSON.stringify(msg.data as string) as Response;
        if (!json) return {error: ERR_EMPTY_RESPONSE};
        if (!json["action"] || !json["response"]) return {error: ERR_INVALID_RESPONSE};
        return {response: json};
    }

    private broadcast(msg: MessageEvent) {
        let response = this.validate(msg);
        this.handlers.forEach((value) => value(response));
    }
}

let dispatcher: SocketHandler;
timer.background(() => {
    const connection = new WebSocket("wss://makecodelive.ddns.net:443");
    dispatcher = new SocketHandler(connection);
})

pause(0);

let start = game.runtime();
dispatcher.socket.send(JSON.stringify({
    action: "handshake",
    data: {}
}))
console.log("Sent handshake");

dispatcher.subscribe((res) => {
    if (res["action"] === "handshake" && res["response"] === "success") {
        console.log(`Connected to server in ${game.runtime() - start}ms`)
    }
})