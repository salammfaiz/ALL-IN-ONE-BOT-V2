require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",
    clientID: process.env.CLIENT_ID || "1255213301512667146", 
    prefix: process.env.PREFIX || "?", 
    ownerID: process.env.OWNER_ID || "963354050617815060",
    guildID: process.env.GUILD_ID || "1251227411903942719",
    SpotifyID: process.env.SPOTIFY_ID || "4b2a3f3c14a041378cae75799597d349",
    SpotifySecret: process.env.SPOTIFY_SECRET || "9222247bb10e4736b1ef6db7222639d1",
    mongourl: process.env.MONGO_URL || "",
    embedColor: process.env.EMBED_COLOR || 0xcc0000,
    logs: process.env.LOGS || "1264468048375709696",
    logs1: process.env.LOGS1 || "1264468048375709696",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "1264468048375709696",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "1264468048375709696",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER ||"youtube ,youtube music,youtube,soundcloud",
    links: {
        img: process.env.IMG || 'https://media.discordapp.net/attachments/1264468017853763614/1265881678526545971/20240712_113633.png?ex=66a9b72f&is=66a865af&hm=f4644a759cd604ada2f1d36b61821ae03e3faade5023f42efe3c9a54a22f0d3b&', 
        support: process.env.SUPPORT || 'https://discord.gg/coderplanet',
        invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=1200011771151396864&permissions=279205464384&scope=applications.commands%20bot' 
    },
    nodes: [
           {
            host: process.env.NODE_HOST || "hk.aarubot.xyz",
            port: parseInt(process.env.NODE_PORT || "57095"),
            password: process.env.NODE_PASSWORD || "Aaru-the-cutiepie",
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