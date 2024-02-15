/**
 * @name Lyké's Plugin Library
 * @author lykethebest
 * @authorId 576451390277156899
 * @version 1.0.0
 * @description A simple plugin library for Lyké's plugins.
 * @invite Not Available
 * @website https://github.com/LykeTheBest
 * @source https://github.com/LykeTheBest/BetterDiscordAddons/plugins/LykesPluginLibrary
 * @updateUrl https://github.com/LykeTheBest/BetterDiscordAddons/plugins/LykesPluginLibrary/LykesPluginLibrary.plugin.js
 */

module.exports = class findByProps {
    start() {
        let wreq; webpackChunkdiscord_app.push([[Symbol()],{},(r) => wreq = r]);
webpackChunkdiscord_app.pop();

let _mods = Object.values(wreq.c);

const findByProps = (...props) => {
    for (let m of _mods) {
        try {
            if (!m.exports || m.exports === window) continue;
            if (props.every((x) => m.exports?.[x])) return m.exports;

            for (let ex in m.exports) {
                if (props.every((x) => m.exports?.[ex]?.[x])) return m.exports[ex];
            }
        } catch {}
    }
}
    }

    stop() {
        BdApi.showNotice("Lyké's Plugin Library | You need to restart your Discord client for disabling Lyké's Plugin Library", {
      type: "warning",
      buttons: [{
        label: "Restart Discord Client",
        onClick: () => location.reload()
      }]
    });
    }
}
