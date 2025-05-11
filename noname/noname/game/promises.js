import { game } from "../../noname.js";

export class GamePromises {
	/**
	 * 模仿h5的prompt，用于显示可提示用户进行输入的对话框
	 *
	 * 注: 由于参数列表是随意的，在这里我准备限制一下这个函数的参数顺序
	 *
	 * @param { string } [title] 设置prompt标题与input内容
	 * @param { boolean } [forced] 为true的话将没有"取消按钮"
	 * @param { string } alertOption 设置prompt是否模拟alert
	 * @example
	 * ```js
	 * // 只设置标题(但是input的初始值就变成了undefined)
	 * game.promises.prompt('###prompt标题').then(value => console.log(value));
	 * // 设置标题和input初始内容
	 * game.promises.prompt('###prompt标题###input初始内容').then(value => console.log(value));
	 * ```
	 * @returns { Promise<string> }
	 */
	/**
	 * @overload
	 * @param { string } title
	 * @returns { Promise<string | false> }
	 */
	/**
	 * @overload
	 * @param { string } title
	 * @param { boolean } [forced]
	 * @returns { Promise<string> }
	 *
	 */
	// @ts-ignore
	prompt(alertOption, title, forced) {
		return new Promise((resolve, reject) => {
			if (alertOption !== "alert") {
				// @ts-ignore
				forced = title || false;
				title = alertOption;
				game.prompt(title, forced, resolve);
			} else {
				game.prompt(title, alertOption, resolve);
			}
		});
	}
	/**
	 * 模仿h5的alert，用于显示信息的对话框
	 *
	 * @param { string } title
	 * @example
	 * ```js
	 * await game.promises.alert('弹窗内容');
	 * ```
	 * @returns { Promise<true> }
	 */
	alert(title) {
		return new Promise((resolve, reject) => {
			game.prompt(title, "alert", resolve);
		});
	}
	// 读写函数promises化(不用考虑其对应函数是否存在)
	download(url, folder, dev, onprogress) {
		return new Promise((resolve, reject) => {
			// @ts-ignore
			game.download(url, folder, resolve, reject, dev, onprogress);
		});
	}
	/**
	 * @param {string} filename
	 * @returns {Promise<ArrayBuffer | Buffer>}
	 */
	readFile(filename) {
		return new Promise((resolve, reject) => {
			// @ts-ignore
			game.readFile(filename, resolve, reject);
		});
	}
	readFileAsText(filename) {
		return new Promise((resolve, reject) => {
			// @ts-ignore
			game.readFileAsText(filename, resolve, reject);
		});
	}
	writeFile(data, path, name) {
		return new Promise((resolve, reject) => {
			// @ts-ignore
			game.writeFile(data, path, name, resolve);
		}).then((result) => {
			return new Promise((resolve, reject) => {
				if (result instanceof Error) {
					reject(result);
				} else {
					resolve(result);
				}
			});
		});
	}
	ensureDirectory(list, callback, file) {
		return new Promise((resolve, reject) => {
			// @ts-ignore
			game.ensureDirectory(list, resolve, file);
		});
	}
	createDir(directory) {
		return new Promise((resolve, reject) => {
			// @ts-ignore
			game.createDir(directory, resolve, reject);
		});
	}
	removeFile(filename) {
		return /** @type {Promise<void>} */ (
			new Promise((resolve, reject) => {
				// @ts-ignore
				game.removeFile(filename, (err) => {
					if (err) reject(err);
					else resolve();
				});
			})
		);
	}
	removeDir(directory) {
		return /** @type {Promise<void>} */ (
			new Promise((resolve, reject) => {
				// @ts-ignore
				game.removeDir(directory, resolve, reject);
			})
		);
	}
}
