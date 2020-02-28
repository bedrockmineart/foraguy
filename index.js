const Discord = require('discord.js');
let roblox = require('noblox.js');
const bot = new Discord.Client();
const fs = require("fs");
bot.msgs = require ("./msgs.json")

const token = require('./config.json').token
const botname = require('./config.json').Botname1
const PREFIX = require('./config.json').preefix
const logo = require('./config.json').Logoo;
const code = require('./config.json').codde;
const code1 = require('./config.json').codde1;
const s1 = "```";
const release = require('./config.json').nextrelease
const version = require('./config.json').versionofbot
let GroupId = 3049111; 
var cookie = require('./config.json').Cookie11
var maximumRank = 'SR | Vice Chairperson';
const admin = "681250688008716464"
var trainer = "0"

roblox.cookieLogin(cookie).catch(() => {console.log("Sorry, it failed.");});

bot.on('ready', () => {
    bot.user.setActivity("Tag for help!")
})

bot.on('ready', () => {
    console.log('Hello 1 2 1 2, Sub bot is online')
    console.log('We are online')
})

bot.on('ready', () => {
  bot.channels.get("681248976590209034").fetchMessage("681540364926320644").then((message) => {
    var interval = setInterval (function () {
      var idk69 = fs.readFileSync(`${process.cwd()}/Trainings.txt`, 'utf8');
      if (idk69) {
        const surrvival = new Discord.RichEmbed()
      .setColor('#00ff00')
      .setTitle('Trainings!')
      .setAuthor(botname, logo)
      .setDescription('Hello and welcome to the channel to see next trainings.\nTimes will be wiped at the end of day\nPlease include am/am\n:warning: **ALL TIMES ARE GMT**')
      .addField("**Next trainings:** \n", idk69)
      .setThumbnail(logo)
      .setTimestamp()
      .setFooter('Update every 2 minutes. Last update at: ');
      message.edit(surrvival)
        .catch(console.error);
      } else {
      const surrvival = new Discord.RichEmbed()
      .setColor('#00ff00')
      .setTitle('Trainings!')
      .setAuthor(botname, logo)
      .addField("**Next trainings/tryouts:** \n\n", ':x: Nothing currently scheduled.')
      .setDescription('Hello and welcome to the channel to see next trainings.\nTimes will be wiped at the end of day\nPlease include am/am\n:warning: **ALL TIMES ARE GMT**')
      .setThumbnail(logo)
      .setTimestamp()
      .setFooter('Update every 2 minutes. Last update at: ');
      message.edit(surrvival)
        .catch(console.error);}
    }, 120 * 1000); 
})
})

bot.on('ready', () => {
  roblox.shout('Loading functions.')
    var interval = setInterval (function () {
      var idk697 = fs.readFileSync(`${process.cwd()}/Trainings.txt`, 'utf8');
      if (idk697) {
        roblox.shout('Training: ' + idk697)
        .catch(console.error);
      } else {
      roblox.shout('Sorry everyone but there is not trainings scheduled.')
        .catch(console.error);}
    }, 18 * 1000); 
})

bot.on('ready', () => {
  bot.channels.get("682276634698579982").fetchMessage("682276665115541638").then((message) => {
    var interval = setInterval (function () {
      var idk695 = fs.readFileSync(`${process.cwd()}/Applications.txt`, 'utf8');
      if (idk695) {
        const surrvivalh = new Discord.RichEmbed()
      .setColor('#00ff00')
      .setTitle('Trainings!')
      .setAuthor(botname, logo)
      .setDescription('Hello,\nThis channel is to show which application are currently open.')
      .addField("**Open applications:** \n", idk695)
      .setThumbnail(logo)
      .setTimestamp()
      .setFooter('Update every 2 minutes. Last update at: ');
      message.edit(surrvivalh)
        .catch(console.error);
      } else {
      const surrvivalg = new Discord.RichEmbed()
      .setColor('#00ff00')
      .setTitle('Trainings!')
      .setAuthor(botname, logo)
      .addField("**Open applications:** \n\n", ':x: No currently open applications.')
      .setDescription('Hello,\nThis channel is to show which application are currently open.')
      .setThumbnail(logo)
      .setTimestamp()
      .setFooter('Update every 2 minutes. Last update at: ');
      message.edit(surrvivalg)
        .catch(console.error);}
    }, 120 * 1000); 
})
})


bot.on('ready', () => {
  bot.channels.get("661290402816458762").fetchMessage("681600346220789917").then((message) => {
    var interval = setInterval (function () {
      var idk6999 = fs.readFileSync(`${process.cwd()}/Shifts.txt`, 'utf8');
      if (idk6999) {
        const surrvival = new Discord.RichEmbed()
      .setColor('#00ff00')
      .setTitle('Trainings/tryouts!')
      .setAuthor(botname, logo)
      .setDescription('Hello and welcome to the channel to see next Shifts.\nDo !claim-shift with the time you want.\nTimes will be wiped at the end of day\nPlease include am/am\n:warning: **ALL TIMES ARE GMT**')
      .addField("**Next Shifts:** \n", idk6999)
      .setThumbnail(logo)
      .setTimestamp()
      .setFooter('Update every 2 minutes. Last update at: ');
      message.edit(surrvival)
        .catch(console.error);
      } else {
      const surrvival = new Discord.RichEmbed()
      .setColor('#00ff00')
      .setTitle('Shifts!')
      .setAuthor(botname, logo)
      .addField("**Next shifts:** \n\n", ':x: Nothing currently scheduled.')
      .setDescription('Hello and welcome to the channel to see next Shifts.\nDo !claim-shift with the time you want.\nTimes will be wiped at the end of day\nPlease include am/am\n:warning: **ALL TIMES ARE GMT**')
      .setThumbnail(logo)
      .setTimestamp()
      .setFooter('Update every 2 minutes. Last update at: ');
      message.edit(surrvival)
        .catch(console.error);}
    }, 120 * 1000); 
})
})

bot.on('ready', () => {
  let myGuild = bot.guilds.get('661271791636971520');
  let membercount = myGuild.memberCount;
  let memberCountChannel = myGuild.channels.get('681249520251699214');
  memberCountChannel.setName('Members: ' + membercount)
  .then(result => console.log(result))
  .catch(error => console.log(error));
});

bot.on('guildMemberAdd', member => {
  member6 = member;
    let myGuild = bot.guilds.get('661271791636971520');
  let membercount = myGuild.memberCount;
  let memberCountChannel = myGuild.channels.get('681249520251699214');
  memberCountChannel.setName('Members: ' + membercount)
  .then(result => console.log(result))
  .catch(error => console.log(error));
});

bot.on('guildMemberRemove', member => {
  let myGuild = bot.guilds.get('661271791636971520');
  let membercount = myGuild.memberCount;
  let memberCountChannel = myGuild.channels.get('681249520251699214');
  memberCountChannel.setName('Members: ' + membercount)
  .then(result => console.log(result))
  .catch(error => console.log(error));
});

bot.on('messageDelete', async (message) => {
    const logs = message.guild.channels.find(channel => channel.name === "audit-log");
    if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
      message.guild.createChannel('audit-log', 'text');
    }
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) { 
      console.log('The logs channel does not exist and tried to create the channel but I am lacking permissions')
    }  
    const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first())
    let user = ""
      if (entry.extra.channel.id === message.channel.id
        && (entry.target.id === message.author.id)
        && (entry.createdTimestamp > (Date.now() - 5000))
        && (entry.extra.count >= 1)) {
      user = entry.executor.username
    } else { 
      user = message.author.username
    }
    const Messagedelelfs = new Discord.RichEmbed()
	            .setColor('#ff0000')
	            .setTitle('A message was deleted!')
                .setAuthor(botname, logo)
                .setDescription(`A message was deleted in <#${message.channel}> made by ${user}`)
                .setThumbnail(logo)
	            .setTimestamp()
	            .setFooter('Bot made by bedrockminecart.');
                logs.send(Messagedelelfs);
  })




  bot.on('message', message => {
    if (message.content === '<@681244101152210953>' || message.content === '<@!681244101152210953>'){ 
      message.author.sendMessage('Hello there, Im the official bot for Barcelo and Im here to help. Please choose from one of the following: \n 1 For assissatnce! \n 2 for role classes! \n (Please react to this dm)').then(sentMessage => {
        sentMessage.react('1️⃣').then(() => sentMessage.react('2️⃣'));

      const filter = (reaction, user) => {
      return ['1️⃣', '2️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
      };

      sentMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
      .then(collected => {
      const reaction = collected.first();

      if (reaction.emoji.name === '1️⃣') {
        message.author.sendMessage('Hello there Im The official bot for Barcelo. I hear you need some help with a question or complaint. \nPlease use this format to start: \n-Title: \n-Question/complaint: \n-Additional imforamtion: \nTo ask a question please put the following code at the start of your question: `' + code + '` \nFor complaint use this `' + (code1) + '`')
        sentMessage.clearReactions().catch(error => console.error('Failed to clear reactions: ', error));
        sentMessage.edit('Chose: 1️⃣');
      } else {
        if (reaction.emoji.name === '2️⃣') {
          const roleclasses = new Discord.RichEmbed()
      .setColor('#00ff00')
      .setTitle('Role classes!')
      .setAuthor(botname, logo)
      .setDescription('Here is a description of role classes:')
      .addField("**Hotel guest**", "someone who is a hotel guest and not a worker.")
      .addField("**LR**", "Lr is a \'Low rank\'. And is the first 5 roles you can get!")
      .addField("**MR**", "This role consitists of MR | Supervisor and more! \'Meduim rank\'")
      .addField("**HR**", "Commonly known as \'High rank\' And can pretty much do anything BUT promote someone (can still log it but not actually do it) can stil do promotions at training.")
      .addField("**SHR**", "SHR stands for \'Super high rank\'. Have a super high role. They can tell people if they can do a promo at trainign or not.")
      .addField("**SR**", "These people ,\'Special rank\', Can actually rank people.")
      .addField("**Higher**", "These people are the highest of all and consist of 3 roles, Development, co-founder and founder.")
      .setThumbnail(logo)
      .setTimestamp()
      .setFooter('Bot made by TallBobber123 - | Development Staff');
          message.author.sendMessage(roleclasses)
        } else {
        MessageEvent.author.sendMessage('did not react correctly')
      }}
      })
      .catch(collected => {
        message.author.sendMessage('You took to long to react.');
      });})
    }});

      bot.on('message', message => {
        if (message.content.startsWith(code)) {
          let user123 = message.author;
          const question = message.content.slice (4);
          message.author.sendMessage('Your question has been submited to the staffing team!')
          bot.channels.get("681558326781149301").send('New question from ' + user123 + ': ' + s1 + question + s1)
        }
      });
        bot.on('message', message => {
          if (message.content.startsWith(code1)) {
            let user123 = message.author;
            const complaint = message.content.slice (4);
            message.author.sendMessage('Your complaint has been submited to the staffing team!')
            bot.channels.get("681558326781149301").send('New complaint from ' + user123 + ': ' + s1 + complaint + s1)  
          }});
        bot.on('message', message => {
          if (message.content.startsWith('642')) {
            const com = message.content.slice (4);
            message.author.sendMessage('Your reply has been submited to the staffing team!')
            bot.channels.get("681558326781149301").send('Reply to a reply ' + s1 + com + s1)  
          }});




bot.on('message', message => {
    console.log(message.content + '---' + message.author.username)
    let args = message.content.substring(PREFIX.length).split(" ");

        switch (args[0]) {
        case 'ping':
          message.channel.send("Pinging ...") // Placeholder for pinging ... 
          .then((msg4) => { // Resolve promise
            msg4.edit("Ping: " + (Date.now() - msg4.createdTimestamp)) // Edits message with current timestamp minus timestamp of message
          }); break;
        case 'time':
            const time = new Discord.RichEmbed()
	          .setColor('#ff0000')
              .setTitle('Time')
              .setThumbnail(logo)
              .setDescription('Time')
              .setTimestamp()
              message.channel.sendMessage(time);
              break;
             case 'delete':
              if(message.channel.name == undefined)  { return }
              if(message.member.roles.has(admin)) {
              message.delete();
              if (!args[1]) return message.reply('Error please define number')
              message.channel.bulkDelete(args[1])
            } else {
              message.channel.sendMessage('badboy') 
            }break;
              case 'talk':
                if(message.channel.name == undefined)  { return }
                if(message.member.roles.has(admin)) {
                  if (!args[1]) { return }
                   else {
                    message.delete();
                    const lol = args[1].length;
                    const annnnonnonii = message.content.slice (7 + lol);
                    const talkannounce = new Discord.RichEmbed()
                        .setColor('#ff0000')
                        .setTitle(args[1])
                        .setAuthor(botname, logo)
                        .setDescription(annnnonnonii)
                        .setTimestamp()
                        .setFooter('Bot made by Bedrockminecart.');
                        message.channel.sendMessage(talkannounce)
                      }break;
                } else {
                  message.channel.sendMessage('You do not have the permission to do this command') 
                  }break;
                    case 'train':
                      if(message.channel.name == undefined)  { return }
                      if(message.member.roles.has(admin)) {
                      let member4 = message.member;
                      const user60 = message.guild.members.get(message.author.id).displayName;
                      trainer = user60
                      const trainingaa = new Discord.RichEmbed()
                        .setColor('#00ff00')
                        .setTitle('Trainings!')
                          .setAuthor(botname, logo)
                          .setDescription(`Training has started!\n Hop along to the training centre (link in <#661290395216379914>)\nThis might be last one for a while so hop along!\nHosted by ${user60}`)
                          .setThumbnail(logo)
                          .setTimestamp()
                          .setFooter('Training started: ');
                      bot.channels.get("661290395216379914").send('<@&661290357589540890>');
                      bot.channels.get("661290395216379914").send('Barcelo Trainings!! \n Are you still awaiting Training? Then come along to this training.\n (Slock in 10-15 minutes)\n https://www.roblox.com/games/897546096/Barcelo-Training-Center-V1');
                      bot.channels.get("661290395216379914").send('More info in <#681248976590209034>');
                      bot.channels.get("681248976590209034").send(trainingaa).then((message5) => {
                      roblox.shout({group: GroupId, message: 'Barcelo trainings are right now! Hop along whith others to get trained! Host: ' + user60})
                      message.author.send('Tell me when you have finished(React to this message with ✅.)\nIf training is cancelled press the ❎').then(sentMessage => {
                        sentMessage.react('✅').then(() => sentMessage.react('❎'));
                
                      const filter = (reaction, user) => {
                      return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                      };
                
                      sentMessage.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                      .then(collected => {
                      const reaction1 = collected.first();
                
                      if (reaction1.emoji.name === '✅') {
                        bot.channels.get("661290395216379914").send('Training finished, hosted by ' + user60)
                        sentMessage.edit('Chose: ✅');
                        roblox.shout({group: GroupId, message: 'Everyone who passed the training has been ranked! Congratulations'})
                        const trainingaaa = new Discord.RichEmbed()
                        .setColor('#ff0000')
                        .setTitle('Trainings!')
                          .setAuthor(botname, logo)
                          .setDescription(`Training has finished! everyone who passed has been ranked!\nHosted by ${user60}`)
                          .setThumbnail(logo)
                          .setTimestamp()
                          .setFooter('This message will be deleted after 5 minutes. Ended: ');
                        message5.edit(trainingaaa).then(mesasge7 => {
                          mesasge7.delete(5 * 60 * 1000);
                          });
                      } else {
                          if (reaction1.emoji.name === '❎') {
                            bot.channels.get("661290395216379914").send('*Tryout cancelled due to no-one showing*\nhosted by ' + user60)
                            sentMessage.edit('Chose: ❎');
                            roblox.shout({group: GroupId, message: 'Training has been cancelled.'})
                            const trainingaaa = new Discord.RichEmbed()
                            .setColor('#ff0000')
                            .setTitle('Trainings!')
                            .setAuthor(botname, logo)
                            .setDescription(`Due to unforseen circumstances the training has been cancelled. :(\nHosted by ${user60}`)
                            .setThumbnail(logo)
                            .setTimestamp()
                            .setFooter('This message will be deleted after 5 minutes. Ended: ');
                        message5.edit(trainingaaa).then(mesasge6 => {
                          mesasge6.delete(5 *60 *1000);
                          });
                          } else {
                          message.channel.sendMessage('Did not react with the right')
                        }}
                      
                      })
                      .catch(collected => {
                        message.author.sendMessage('You took to long to react.');
                      });})
                      })}
                       else {
                        message.channel.sendMessage('You do not have the permission to do this command')   
                    }break;
                    case 'me':
                      const user59 = message.guild.members.get(message.author.id).displayName
                      message.channel.sendMessage(user59)
                      break;
                    case 'important':
                      if(message.channel.name == undefined)  { return }
                      if(message.member.roles.has(admin)) {
                        if (!args[1]) { return }
                         else {
                          message.delete();
                          const annnnonnonii = message.content.slice (10);
                          const lololol = new Discord.RichEmbed()
                              .setColor('#ff0000')
                              .setTitle('VERY IMPORTANT')
                              .setAuthor(botname, logo)
                              .setDescription(annnnonnonii)
                              .setTimestamp()
                              .setFooter('Bot made by Bedrockminecart.');
                              bot.channels.get("675398315311104030").send(lololol)
                            }break;
                      } else {
                        message.channel.sendMessage('You do not have the permission to do this command') 
                        }break;
                      case 'release':
                        message.channel.sendMessage(release)
                        break;
                      case 'version':
                        message.channel.sendMessage('This bot is on ' + version)
                        break;
                      case 'shutdown':
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has(admin)) {
                          message.channel.bulkDelete(2)
                          bot.channels.get("675696521857073165").send('Bot is going offline! :(')
                            } else {
                              message.channel.sendMessage('You do not have the permission to do this command')  
                            }break;
                      case 'online':
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has(admin)) {
                          message.channel.bulkDelete(2)
                          bot.channels.get("675696521857073165").send('The bot is online!')
                            } else {
                               message.channel.sendMessage('You do not have the permission to do this command')  
                            }break;
                      case 'reply':
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has(admin)) {
                        var mention = message.mentions.users.first();
                        const lol1 = args[1].length;
                        if (mention == null) { return; }
                        const user54 = message.author.username
                        message.delete();
                        mentionMessage = message.content.slice (7 + lol1);
                        mention.sendMessage ('Reply has been sent from ' + user54 + s1 + mentionMessage + s1 + '\n And as always If you think you have not been answered correctly please Submit it with 642 at the start.');
                        message.channel.sendMessage('Reply sent!')
                      }break;
                      case 'pass':
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has(admin)) {
                          message.delete();
                          var metion = message.mentions.users.first();
                          if (metion == null) { return; }
                          const user51 = message.guild.members.get(message.author.id).displayName
                          const user52 = message.guild.members.get(metion.id).displayName
                          if (args[1] === 'training') {
                            if (!(args[3])) {
                              const lolololl111 = new Discord.RichEmbed()
                                  .setColor('#00ff00')
                                  .setTitle('You have passed training! :white_check_mark:')
                                  .setAuthor(botname, logo)
                                  .setDescription('Hello there ' + user52 + '. You have passed a training \nYou have been promoted\nAssessed by: `' + user51 + '`')
                                  .setTimestamp()
                                  .setFooter('Bot made by Bedrockminecart.');
                                  metion.sendMessage(lolololl111) } else {
                                    const lolololl11 = new Discord.RichEmbed()
                                  .setColor('#00ff00')
                                  .setTitle('You have passed training! :white_check_mark:')
                                  .setAuthor(botname, logo)
                                  .setDescription('Hello there ' + user52 + '. You have passed a training \nYou have been promoted to ' + args[3] + '\nAssessed by: `' + user51 + '`')
                                  .setTimestamp()
                                  .setFooter('Bot made by Bedrockminecart.');
                                  metion.sendMessage(lolololl11)
                                  }}
                            } else {
                              message.channel.sendMessage('You dont have the permision for that')
                        }break;
                      case 'shout': 
                      if(message.channel.name == undefined)  { return }
                      if(message.member.roles.has("676206157815218177")) {
                            const msg = message;
                              ShoutMessage = message.content.slice(7)
                              if (ShoutMessage) {
                                roblox.shout({group: GroupId, message: ShoutMessage})
                                message.channel.sendMessage('Sucessfully shouted to the Group!\n\nMessage: `' + ShoutMessage + '`');
                              }} break;
                      case 'promote':
                        if(message.channel.name == undefined)  { return }
                      if(message.member.roles.has("676206157815218177")) {
                        var username2 = args[1]
                        if (username2){
                          message.channel.send(`Checking ROBLOX for ${username2}`)
                          roblox.getIdFromUsername(username2)
                        .then(function(id){
                          roblox.getRankInGroup(GroupId, id)
                          .then(function(rank){
                            if(maximumRank <= rank){
                              message.channel.send(`${id} is rank ${rank} and not promotable.`)
                            } else {
                              message.channel.send(`${username2} is able to be promoted.`)
                              roblox.promote(GroupId, id)
                              .then(function(roles){
                                message.channel.send(`Succesfully promoted ${username2} to 1 rank above their Previous rank`)
                              })
                            }
                          })
                        })
                        } else {
                          message.channel.send("Please enter a username.")
                        }}
                        break;;
                      case 'demote':
                        if(message.channel.name == undefined)  { return }
                      if(message.member.roles.has("676206157815218177")) {
                        var username1 = args[1]
                        if (username1){
                          message.channel.send(`Checking ROBLOX for ${username1}`)
                          roblox.getIdFromUsername(username1)
                        .then(function(id){
                          roblox.getRankInGroup(GroupId, id)
                          .then(function(rank){
                            if(maximumRank <= rank){
                              message.channel.send(`${id} is rank ${rank} and not promotable.`)
                            } else {
                              message.channel.send(`${username1} is able to be demoted.`)
                              roblox.demote(GroupId, id)
                              .then(function(roles){
                                message.channel.send(`Succesfully demoted ${username1} to 1 rank below their Previous rank`)
                              })
                            }
                          })
                        })
                       }} break;
                      case 'fetch':
                        if(message.channel.name == undefined)  { return }
                        message.channel.fetchMessage(args[1])
                        .then(message => {
                          const fetcher = new Discord.RichEmbed()
                              .setColor('#ff0000')
                              .setTitle(`Author: ${message.author.username}`)
                              .setAuthor(botname, logo)
                              .setDescription('`' + `${message.content}` + '`')
                              .setTimestamp()
                              .setFooter('Bot made by Bedrockminecart.');
                          message.channel.sendMessage(fetcher)
                        .catch(console.error);
                        })
                       break;
                      case 'accept':
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has("676206157815218177")) {
                        roblox.getIdFromUsername(args[1])
                        .then(function(id){roblox.handleJoinRequest(GroupId, id, 1)
                        message.channel.sendMessage(`Succesfully accepted user ${args[1]}`)})
                        }break;
                      case 'link':
                        let str = args[1];
                        str = str.substring(0, str.length - 1);
                        str = str.substring(2, str.length, 0);
                        message.channel.sendMessage('https://discordapp.com/channels/649745201849696297/' + str + '/' + args[2])
                      break;
                      case 'schedule':
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has(admin)) {
                        var Talll = ':Managingdirector:'
                        if (message.guild.members.get(message.author.id).displayName == 'TallBobber123') { Talll = '<:Managingdirector:649745201849696297>'} else {
                        if (message.guild.members.get(message.author.id).displayName == 'xXMonkey_ChapXx') { Talll = ':director:'} else 
                         { Talll = '<:soontm:230340006219087873>'}}
                        var idk699 = fs.readFileSync(`${process.cwd()}/Trainings.txt`, 'utf8');
                        fs.writeFileSync(`${process.cwd()}/Trainings.txt`, (idk699 + `\n${(args[1])}` + ' at ' + (args[2]) + `. Hosted by ${message.guild.members.get(message.author.id).displayName}.`))
                        message.channel.sendMessage('Scheduled!')
                        }break;
                      case 'clear-schedule':
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has(admin)) {
                        var Talll = ':Managingdirector:'
                        fs.writeFileSync(`${process.cwd()}/Trainings.txt`, '')
                        message.channel.sendMessage('Cleared the Schedule!')
                        }break;
                      case 'Barcelo12':
                        if(message.channel.name == undefined)  { return }
                        message.channel.sendMessage('h')
                        break;
                      case 'claim-shift':
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has(admin)) {
                          var idk699 = fs.readFileSync(`${process.cwd()}/Shifts.txt`, 'utf8');
                          fs.writeFileSync(`${process.cwd()}/Shifts.txt`, (idk699 + `\n` + 'Shift at ' + (args[1]) + `. Hosted by ${message.guild.members.get(message.author.id).displayName}.`))
                          message.channel.sendMessage('Scheduled!')
                          }break;
                      case 'clear-shifts':
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has("681588492802850837")) {
                        var Talll = ':Managingdirector:'
                        fs.writeFileSync(`${process.cwd()}/Trainings.txt`, '')
                        message.channel.sendMessage('Cleared the Schedule!')
                        }break;
                      case 'invite':
                        message.author.sendMessage('Please copy the following: ```Do you like to spend your time in a nice resort? well join Barcelo! About us: • Since January the First 2017. As one of the quickest growing Hotel groups on ROBLOX, Barcelo brings you clean and beautiful rooms, making you want to come back for more every single day. Here at Barcelo, we have cosy seats & heating making sure you are filled with joy every single day. We have many different things like milkshakes to satisfy your day and having you say \"Let\'s go to Barcelo!\" We hope you enjoy your stay here at Barcelo\.\ndiscord.gg/BT65vQf.```')
                        break;
                      case 'open-app':
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has("676206157815218177")) {
                          var idk699 = fs.readFileSync(`${process.cwd()}/Applications.txt`, 'utf8');
                          fs.writeFileSync(`${process.cwd()}/Applications.txt`, (idk699 + `\n` + '**OPEN APPLICATION** For' + (args[1]) + `. Opened by ${message.guild.members.get(message.author.id).displayName}.\nLink:\`\`\`${args[2]}\`\`\``))
                          message.channel.sendMessage('Opended!')
                          }break;
                      case 'clear-apps':
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has("676206157815218177")) {
                        var Talll = ':Managingdirector:'
                        fs.writeFileSync(`${process.cwd()}/Applications.txt`, '')
                        message.channel.sendMessage('Cleared apps!')
                        }break;
        } 
                      
                      
    })

bot.on('error', err => {
  console.log(err)
});

bot.login(token);