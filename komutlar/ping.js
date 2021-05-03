const Discord = require('discord.js');
const config = require("../ayarlar.json")

exports.run = async (client, message) => {

    const ping = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(`Zaron V12 \n✔️ - Ping: ${client.ws.ping}ms`)
    .setTimestamp()
    .setFooter(`Zaron V12`)

    message.channel.send(ping);

};
//Zaron Discord https://discord.gg/5xyRqzVTJm
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ms','ping'],
   permLevel: 0
  };
   
  exports.help = {
   name: 'ping',
   description: 'botun gecikme süresini gösterir',
   usage: 'prefix+ping'
  };

  console.log(`BU ALT YAPI SB CAN & ZARON A AITTIR`);