import { game } from "../../game/index.js";
import { _status } from "../../status/index.js";

export class NodeWS {
	/**
	 * @param {string | NodeWS} id
	 */
	constructor(id) {
		this.wsid = id instanceof NodeWS ? id.wsid : id;
	}
	send(message) {
		game.send("server", "send", this.wsid, message);
	}
	on(type, func) {
		this["on" + type] = func;
	}
	close() {
		game.send("server", "close", this.wsid);
	}
}
