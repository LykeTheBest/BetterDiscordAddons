/**
 * @name God Mode
 * @author lykethebest
 * @authorId 576451390277156899
 * @version 1.0.0
 * @description Plugin that allows you to view server settings by pretending that you have authority over the servers.
 * @invite Not Available
 * @website https://github.com/LykeTheBest
 * @source https://github.com/LykeTheBest/BetterDiscordAddons/plugins/GodMode
 * @updateUrl https://github.com/LykeTheBest/BetterDiscordAddons/plugins/GodMode/GodMode.plugin.js
 */

module.exports = class findByProps {
    start() {
       let {IncidentAlertModeratorPermissions} = findByProps("IncidentAlertModeratorPermissions"),
    {MemberSafetyPagePermissions} = findByProps("MemberSafetyPagePermissions"),
    {ElevatedPermissions} = findByProps("ElevatedPermissions");

let permStore = findByProps("canBasicChannel");
["can","canAccessMemberSafetyPage","canAccessGuildSettings","canBasicChannel","canImpersonateRole","canManageUser","canWithPartialContext","getGuildVersion","getChannelsVersion","getChannelPermissions","getHighestRole","initialize","constructor","isRoleHigher"]
    .forEach(a => permStore.__proto__[a] = () => true);

let permUtils = findByProps("hasAny", "combine");
permUtils.hasAny = (a, b) => 
    [IncidentAlertModeratorPermissions, MemberSafetyPagePermissions, ElevatedPermissions].includes(b) || Boolean(a | b);
    }

    stop() {
        BdApi.showNotice("Lyké's Plugin Library | You need to restart your Discord client for disabling God Mode", {
      type: "warning",
      buttons: [{
        label: "Restart Discord Client",
        onClick: () => location.reload()
      }]
    });
    }
}
