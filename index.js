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
      .setTitle('Trainings/tryouts!')
      .setAuthor(botname, logo)
      .setDescription('Hello and welcome to the channel to see next trainings and tryouts.\n:warning: **ALL TIMES ARE GMT**')
      .addField("**Next trainings/tryouts:** \n", idk69)
      .setThumbnail(logo)
      .setTimestamp()
      .setFooter('Update every 2 minutes. Last update at: ');
      message.edit(surrvival)
        .catch(console.error);
      } else {
      const surrvival = new Discord.RichEmbed()
      .setColor('#00ff00')
      .setTitle('Trainings/tryouts!')
      .setAuthor(botname, logo)
      .addField("**Next trainings/tryouts:** \n\n", ':x: Nothing currently scheduled.')
      .setDescription('Hello and welcome to the channel to see next trainings and tryouts.\n:warning: **ALL TIMES ARE GMT**')
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
  let rolee69999 = message.guild.roles.find(r => r.name === "--------------Main Roles-----------------");
  let rolee6999 = message.guild.roles.find(r => r.name === "------------ Other Roles ------------");
  let rolee699 = message.guild.roles.find(r => r.name === "------------ Ping Roles ------------");
  member5.addRole(rolee69999).catch(console.error);
  member5.addRole(rolee6999).catch(console.error);
  member5.addRole(rolee699).catch(console.error);
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
                .setDescription(`A message was deleted in #${message.channel.name} made by ${user}`)
                .setThumbnail(logo)
	            .setTimestamp()
	            .setFooter('Bot made by bedrockminecart.');
                logs.send(Messagedelelfs);
  })




  bot.on('message', message => {
    if (message.content === '<@681244101152210953>' || message.content === '<@!681244101152210953>'){ 
      message.author.sendMessage('Hello there, Im the official bot for Barcelo and Im here to help. Please choose from one of the following: \n 1 For assissatnce! \n (Please react to this dm)').then(sentMessage => {
        sentMessage.react('1️⃣');

      const filter = (reaction, user) => {
      return ['1️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
      };

      sentMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
      .then(collected => {
      const reaction = collected.first();

      if (reaction.emoji.name === '1️⃣') {
        message.author.sendMessage('Hello there Im The official bot for Barcelo. I hear you need some help with a question or complaint. \nPlease use this format to start: \n-Title: \n-Question/complaint: \n-Additional imforamtion: \nTo ask a question please put the following code at the start of your question: `' + code + '` \nFor complaint use this `' + (code1) + '`')
        sentMessage.clearReactions().catch(error => console.error('Failed to clear reactions: ', error));
        sentMessage.edit('Chose: 1️⃣');
      } else {
        MessageEvent.author.sendMessage('did not react correctly')
      }
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
          bot.channels.get("678003091995361300").send('New question from ' + user123 + ': ' + s1 + question + s1)
        }
      });
        bot.on('message', message => {
          if (message.content.startsWith(code1)) {
            let user123 = message.author;
            const complaint = message.content.slice (4);
            message.author.sendMessage('Your complaint has been submited to the staffing team!')
            bot.channels.get("678003091995361300").send('New complaint from ' + user123 + ': ' + s1 + complaint + s1)  
          }});
        bot.on('message', message => {
          if (message.content.startsWith('642')) {
            const com = message.content.slice (4);
            message.author.sendMessage('Your reply has been submited to the staffing team!')
            bot.channels.get("678003091995361300").send('Reply to a reply ' + s1 + com + s1)  
          }});




bot.on('message', message => {
    console.log(message.content + '---' + message.author.username)
    let args = message.content.substring(PREFIX.length).split(" ");

        switch (args[0]) {
        case 'ping':
            message.channel.sendMessage('pong!');
            break;
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
                    case 'train5654':
                      if(message.channel.name == undefined)  { return }
                      if(message.member.roles.has(admin)) {
                      let member4 = message.member;
                      const user60 = message.guild.members.get(message.author.id).displayName;
                      let role69 = message.guild.roles.find(r => r.name === "Hosting");
                      member4.addRole(role69).catch(console.error);
                      bot.channels.get("649756880314302464").send('@here');
                      bot.channels.get("649756880314302464").send('Subway Security Trainings!! \n Are you still awaiting tryout? Then come along to this training.\n (Slock in 10-15 minutes)\n https://www.roblox.com/games/4582202027/Subway-Security-Tryout-Centre\n https://discord.gg/bvYgmDe');
                      bot.channels.get("649756880314302464").send('Training underway, hosted by ' + user60);
                      roblox.shout({group: GroupId, message: 'Subway security trainings are right now! Hop along whith others to get trained! Host: ' + user60})
                      message.author.send('Tell me when you have finished(React to this message with ✅.)\nIf training is cancelled press the ❎').then(sentMessage => {
                        sentMessage.react('✅').then(() => sentMessage.react('❎'));
                
                      const filter = (reaction, user) => {
                      return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                      };
                
                      sentMessage.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                      .then(collected => {
                      const reaction1 = collected.first();
                
                      if (reaction1.emoji.name === '✅') {
                        bot.channels.get("649756880314302464").send('Training finished, hosted by ' + user60)
                        sentMessage.edit('Chose: ✅');
                        roblox.shout({group: GroupId, message: 'Everyone who passed the training has been ranked! Congratulations'})
                      } else {
                          if (reaction.emoji.name === '❎') {
                            bot.channels.get("649756880314302464").send('*Tryout cancelled due to no-one showing*\nhosted by ' + user60)
                            sentMessage.edit('Chose: ❎');
                            roblox.shout({group: GroupId, message: 'Tryout has been cancelled.'})
                          } else {
                          message.channel.sendMessage('Did not react with the right')
                        }}
                      
                      })
                      .catch(collected => {
                        message.author.sendMessage('You took to long to react.');
                      });})
                     }
                       else {
                        message.channel.sendMessage('You do not have the permission to do this command')   
                    }break;

                    case 'tryouts5554':
                      if(message.channel.name == undefined)  { return }
                      let member3 = message.member;
                      if(message.member.roles.has(admin)) {
                      const user61 = message.guild.members.get(message.author.id).displayName;
                      let role96 = message.guild.roles.find(r => r.name === "Hosting");
                      member3.addRole(role96).catch(console.error);
                      bot.channels.get("649756880314302464").send('@here \nSubway Security Tryouts!!\n Want to protect the subway game, keep the trollers, exploiters away and make the game better in general? Then the Security Department is for you!\n (Slock in 10-15 minutes)\n https://www.roblox.com/games/4582202027/Subway-Security-Tryout-Centre \n https://discord.gg/bvYgmDe');
                          bot.channels.get("649756880314302464").send('Hosted by ' + user61 + '! Let ' + user61 + ' get set up and ready!');
                          roblox.shout({group: GroupId, message: 'Subway security tryout are right now! Hop along whith others to get tryouted! Host: ' + user61})
                          message.author.send('Tell me when you have finished(React to this message with ✅.)\nIf training is cancelled press the ❎').then(sentMessage => {
                            sentMessage.react('✅').then(() => sentMessage.react('❎'));
                    
                          const filter = (reaction, user) => {
                          return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                          };
                    
                          sentMessage.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                          .then(collected => {
                          const reaction = collected.first();
                    
                          if (reaction.emoji.name === '✅') {
                            bot.channels.get("649756880314302464").send('Tryout finished, hosted by ' + user61)
                            sentMessage.edit('Chose: ✅');
                            roblox.shout({group: GroupId, message: 'Everyone who passed the tryout has been ranked! Congratulations'})
                          } else {
                            if (reaction.emoji.name === '❎') {
                              bot.channels.get("649756880314302464").send('*Tryout cancelled due to no-one showing*\nhosted by ' + user61)
                              sentMessage.edit('Chose: ❎');
                              roblox.shout({group: GroupId, message: 'Tryout has been cancelled.'})
                            } else {
                              message.channel.sendMessage('Did not react with the right')
                            }}
                          
                          })
                          .catch(collected => {
                            message.author.sendMessage('You took to long to react.');
                          });})
                        } else {
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
                          else { if (args[1] === 'tryout') {
                          const lolololl1 = new Discord.RichEmbed()
                              .setColor('#00ff00')
                              .setTitle('You have passed tryouts! :white_check_mark:')
                              .setAuthor(botname, logo)
                              .setDescription('Hello there ' + user52 + '. You have passed a tryout \nYou have been promoted to trainee\nAssessed by: `' + user51 + '`')
                              .setTimestamp()
                              .setFooter('Bot made by Bedrockminecart.');
                              metion.sendMessage(lolololl1)} else {
                                const lolololl1111 = new Discord.RichEmbed()
                              .setColor('#00ff00')
                              .setTitle('You have passed! :white_check_mark:')
                              .setAuthor(botname, logo)
                              .setDescription('Hello there ' + user52 + '. You have passed a tryout/training \nYou have been promoted to the next rank.\nAssessed by: `' + user51 + '`')
                              .setTimestamp()
                              .setFooter('Bot made by Bedrockminecart.');
                              metion.sendMessage(lolololl1111)
                              }}
                            } else {
                              message.channel.sendMessage('You dont have the permision for that')
                              }break;
                      case 'shout': 
                      if(message.channel.name == undefined)  { return }
                      if(message.member.roles.has(admin)) {
                            const msg = message;
                              ShoutMessage = message.content.slice(7)
                              if (ShoutMessage) {
                                roblox.shout({group: GroupId, message: ShoutMessage})
                                message.channel.sendMessage('Sucessfully shouted to the Group!\n\nMessage: `' + ShoutMessage + '`');
                              }} break;
                      case 'promote':
                        if(message.channel.name == undefined)  { return }
                      if(message.member.roles.has(admin)) {
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
                      if(message.member.roles.has(admin)) {
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
                        if(message.member.roles.has(admin)) {
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
                        if(message.member.roles.has(admin)) {
                        var Talll = ':Managingdirector:'
                        fs.writeFileSync(`${process.cwd()}/Trainings.txt`, '')
                        message.channel.sendMessage('Cleared the Schedule!')
                        }break;
                      case 'Barcelo12':
                        message.channel.sendMessage('h')
        } 
                      
                      
    })

bot.on('error', err => {
  console.log(err)
});

bot.login(token);