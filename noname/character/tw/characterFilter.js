import { lib, game, ui, get, ai, _status } from "../../noname.js";

const characterFilters = {
	nashime(mode) {
		return mode != "guozhan";
	},
	tw_xiahouba(mode) {
		return mode != "guozhan";
	},
};

export default characterFilters;
