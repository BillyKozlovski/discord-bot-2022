var Discord = require("discord.js");

var Client = new Discord.Client({
    intents: [
       Discord.Intents.FLAGS.GUILDS,
       Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
})

Client.on("ready", () => {
   console.log("bot opérationnel")
   //statue
   setInterval(function () {
    let status = [
      '🦉KobralostRP🦉',
    ];
    
    let rstatus = Math.floor(Math.random() * status.length);
    
    Client.user.setActivity(status[rstatus], { type: 'PLAYING' });
  },);

});

Client.login("OTgwMDA2NTY2ODIyNTQzMzgw.GL33XO.-P7FH1yUOIfXZhlJneVz7Ch3iW2f3RTWHPXgUo")

Client.on("messageCreate", message => {
     if(message.content === "bouton"){
        var row = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
            .setCustomId("bouton1")
            .setLabel("appuye pas !")
            .setStyle("DANGER")
            .setEmoji("⚠") 
        ).addComponents(new Discord.MessageButton()
            .setLabel("Site KobralostRP")
            .setStyle("LINK")
            .setEmoji("💻")
            .setURL("https://kobralost-rp.fr")
        ).addComponents(new Discord.MessageButton()
             .setLabel("Discord Kobralost")
             .setStyle("LINK")
             .setEmoji("🖥")
             .setURL("https://discord.com/invite/p2Rb8rZ6TM")
        );

        message.channel.send({content: "__Probléme__", components: [row]});
     }
});

Client.on("interactionCreate", Interaction => {
    if(Interaction.isButton()){
        if(Interaction.customId === "bouton1"){
            Interaction.reply(`<@${Interaction.member.id}> Je t'avais prévenu, t'es con ou quoi ?!`);
        }
    }
});
