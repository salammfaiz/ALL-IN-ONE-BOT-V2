require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",
    clientID: process.env.CLIENT_ID || "", 
    prefix: process.env.PREFIX || "?", 
    ownerID: process.env.OWNER_ID || "963354050617815060",
    guildID: process.env.GUILD_ID || "1251227411903942719",
    SpotifyID: process.env.SPOTIFY_ID || "4b2a3f3c14a041378cae75799597d349",
    SpotifySecret: process.env.SPOTIFY_SECRET || "9222247bb10e4736b1ef6db7222639d1",
    mongourl: process.env.MONGO_URL || "",
    embedColor: process.env.EMBED_COLOR || 0xcc0000,
    logs: process.env.LOGS || "1257043354856718418",
    logs1: process.env.LOGS1 || "1257043354856718418",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "1257043354856718418",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "1257043354856718418",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER ||"youtube ,youtube music,youtube,soundcloud",
    links: {
        img: process.env.IMG || 'https://discord.com/channels/1247444478512336896/1247444478713659421/1254450678152167425', 
        support: process.env.SUPPORT || 'https://discord.gg/coderplanet',
        invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=1200011771151396864&permissions=279205464384&scope=applications.commands%20bot' 
    },
    nodes: [
           {
            host: process.env.NODE_HOST || "hk.aarubot.xyz",
            port: parseInt(process.env.NODE_PORT || "57082"),
            password: process.env.NODE_PASSWORD || "Kimo-the-cutiepie",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
            }
           ],

}


function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}