
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
        socket.onmessage = (msg) => this.broadcast(msg);
    }

    subscribe(handler: (response: Response) => any) {
        this.handlers.push(handler);
    }

    private validate(msg: MessageEvent): Result {
        let json = JSON.stringify(msg.data as string) as Response;
        if (!json) return {error: ERR_EMPTY_RESPONSE};
        if (!json["action"] || !json["data"]) return {error: ERR_INVALID_RESPONSE};
        return {response: json};
    }

    private broadcast(msg: MessageEvent) {
        let response = this.validate(msg);
        this.handlers.forEach((value) => value(response));
    }
}