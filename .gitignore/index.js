const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = "*";

bot.on('ready', function (){
    console.log("Kamiya RP");
})

bot.login('NTM3OTEzOTc5Mzg1Njc1Nzc2.Dytiww.mkv-OGzGZeYt14sYi3yZrFSA_HA');

bot.on('message', message => {
    if (message.content === prefix + "tuto")
    {
        var embed = new Discord.RichEmbed()
            .setTitle("Tutoriels pour les Métiers")
            .setDescription("Vous trouverez dans cette liste tous les tutoriels pour les métiers existants.")
            .setColor("0x00CBFD")

            .addField("Tutoriel Global du serveur", "[Voici le tutoriel global du serveur servant à tout les métiers !](https://www.youtube.com/watch?v=ntiIoh4zHzg&t)", false)

            .addField("Cuisinier", "[Voici le tutoriel du cuisinier](https://youtu.be/cp8JPd6whsg)", false)

            .addField("Fabricant de Meth", "[Voici le tutoriel du fabricant de meth](https://youtu.be/6W_41FR3gYQ)", false)

            .addField("Fermier", "[Voici le tutoriel du fermier](https://youtu.be/71fRjqO4JOg)", false)

            .addField("Gangster", "[Voici le tutoriel du gangster](https://youtu.be/ZwEHLdjN4zE)", false)

            .addField("Garagiste", "[Voici le tutoriel du garagiste](https://youtu.be/8t6fQyNIKF4)", false)

            .addField("Gouvernement", "[Voici le tutoriel du gouvernement](https://youtu.be/-n2csdNcqmo)", false)

        message.channel.sendEmbed(embed);
    }
    
    if (message.content === prefix + "info")
    {
        var embed = new Discord.RichEmbed()
            .setTitle("Informations sur le serveur")
            .setColor("0x00CBFD")

            .addField("Règlement du serveur", "[Retrouvez le règlement du serveur Kamiya RP](https://kamiyarp.mtxserv.com/showthread.php?tid=1)", false)

            .addField("Staff du serveur", "Voici la liste des membres du staff : \n \n Fondateur : Spyoo \n Fondateur : Robin", true)

        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "commandes")
    {
        var embed = new Discord.RichEmbed()
            .setTitle("Commandes sur le discord")
            .setColor("0x00CBFD")

            .addField("*tuto", "Permet d'afficher les tutoriels du serveur Kamiya RP", false)
            .addField("*info", "Permet d'avoir des informations du serveur Kamiya RP", false)
        message.channel.sendEmbed(embed);
    }
    
        if (message.content === prefix + "test")
    {
        var embed = new Discord.RichEmbed()
            .setTitle("test")
            .setColor("0x00CBFD")

            .addField("*tuto", "test", false)
        message.channel.sendEmbed(embed);
    }


})
