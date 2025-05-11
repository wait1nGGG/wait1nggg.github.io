import { lib, game, ui, get, ai, _status } from "../../noname.js";

const cards = {
	ruyijingubang: {
		fullskin: true,
		derivation: "sunwukong",
		type: "equip",
		subtype: "equip1",
		cardcolor: "heart",
		skills: ["ruyijingubang_skill", "ruyijingubang_effect"],
		equipDelay: false,
		distance: {
			attackFrom: -2,
			attackRange: (card, player) => {
				return player.storage.ruyijingubang_skill || 3;
			},
		},
		onEquip() {
			if (!card.storage.ruyijingubang_skill) card.storage.ruyijingubang_skill = 3;
			player.storage.ruyijingubang_skill = card.storage.ruyijingubang_skill;
			player.markSkill("ruyijingubang_skill");
		},
	},
};
export default cards;
