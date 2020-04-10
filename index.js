const Discord = require('discord.js');
let roblox = require('noblox.js');
const bot = new Discord.Client();
const fs = require("fs");
const { GoogleSpreadsheet } = require('google-spreadsheet');
const nodemailer = require('nodemailer')



const profanity = ['shit', '$hit', 'sh1t', 'sh!t', '$h!t', '$h!t', 'ass', '@ss', '@$s', '@s$', '@$$', 'faggot', 'f@ggot', 'fagg0t', 'f@gg0t', 'nigga', 'n1gga', 'nigg@', 'n!gga', 'n!gg@', 'n1gg@', 'nigger', 'n!gger', 'n1gger', 'nigg3r', 'n1gg3r', 'n!gg3r', 'piss', 'p1ss', 'p!ss', 'pi$s', 'p1$s', 'p!$s', 'pis$', 'p1s$', 'p!s$', 'pi$$', 'p1$$', 'p!$$', 'cunt', 'bitch', 'b1tch', 'b!tch', 'fuck', 'fucked', 'fucking', 'boring', 'bad', 'fuck you']
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
var maximumRank = '24';
const admin = "681250688008716464"
var trainer = "0"
var ssssshouts = false
var announcement = '.'
var loooooool = "681540364926320644"
var trrrrrrrrrr = 'Sorry but I\'m not quite sure how you got here...'
const changedlog =  '> > 24/2/20 - Bot is created \n> > 30/2/20 - Roblox API \n> > 17/3/20 - Application made \n> > 4/4/20 - Verification made'

async function retrievedata(area) {
  // spreadsheet key is the long id in the sheets URL
  const doc = new GoogleSpreadsheet('1NNsdEscPgYOAW2tmuOtHYy4sNPJGmSwojwocQSpzOiE');

  await doc.useServiceAccountAuth(require('./client_secret.json'));
  
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0];
  await sheet.loadCells(area + ':' + area); // loads a range of cells
  const b2 = sheet.getCellByA1(area);
  const space = b2.value;
  return b2.value
}

bot.on('message', message => {
  if(message.author.username === 'Bedrockminecart' || message.author.username === 'xXMonkey_ChapXx') {
    return;
  }
  for (let i = 0; i < profanity.length; i++) {
    if (message.content.toLowerCase().includes(profanity[i])) {
      message.author.send("That word cannot be used there")
      return message.delete()
        .catch(console.error);
    }
  }
});

async function setdatadata(area, setter) {
  // spreadsheet key is the long id in the sheets URL
  const doc = new GoogleSpreadsheet('1NNsdEscPgYOAW2tmuOtHYy4sNPJGmSwojwocQSpzOiE');

  await doc.useServiceAccountAuth(require('./client_secret.json'));
  
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0];
  await sheet.loadCells(area + ':' + area); // loads a range of cells
  const b2 = sheet.getCellByA1(area);
  b2.value = setter
  await sheet.saveUpdatedCells();
}


//admin const/variable
const modapp = '**CLOSED**'
const adminapp = '**CLOSED**'
var timeonline = 0
const adminpass = ["Barcelo1342" , "Administrationpass2"];
const modpass = ["Barcelo1234", "Moderationpass4"];


bot.on('ready', () => {
  bot.channels.get("681248976590209034").fetchMessage("681540364926320644").then((message) => {
    var interval = setInterval (function () {
      timeonline += 1
    }, 1 * 1000); 
})
})


if (modapp === '**CLOSED**' && adminapp === '**CLOSED**') {
  decider = 4
} else {
  if (modapp === '**OPEN**' && adminapp === '**OPEN**') {
    decider = 1
  } else {
    if (modapp === '**OPEN**') {
      decider = 2
    } else {
      decider = 3
    }
  }
}


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
      .setDescription('Hello and welcome to the channel to see next trainings.\nTimes will be wiped at the end of day\nPlease include am/am\n:warning: **ALL TIMES ARE BST**')
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
      .setDescription('Hello and welcome to the channel to see next trainings.\nTimes will be wiped at the end of day\nPlease include am/am\n:warning: **ALL TIMES ARE BST**')
      .setThumbnail(logo)
      .setTimestamp()
      .setFooter('Update every 2 minutes. Last update at: ');
      message.edit(surrvival)
        .catch(console.error);}
    }, 120 * 1000); 
})
})

bot.on('messageReactionAdd', async (reaction, user) => {
  console.log("Hi")
  bot.channels.get("681248976590209034").fetchMessage(loooooool).then((messag1e) => {
    if (reaction.message === messag1e && reaction.emoji.name === "❓") {
      user.send(trrrrrrrrrr)
    } else {
    console.log("HAHA")
    bot.channels.get("698159679389565029").fetchMessage("698165482234052668").then((messag11e) => {
      if (reaction.message === messag11e && reaction.emoji.name === "1️⃣") {
        console.log("Hi")
        user.send("Given you the role \'Giveaway ping\'")
        const member1 = bot.guilds.get("541942314910613504").members.get(user.id)
        let myRole = bot.guilds.get("541942314910613504").roles.get("264410914592129025");
        member1.addRole(myRole).catch(console.error);
  
    }})
  }})
})

bot.on('messageReactionRemove', async (reaction, user) => {
    console.log("HAHA")
    bot.channels.get("698159679389565029").fetchMessage("698165482234052668").then((messag11e) => {
      if (reaction.message === messag11e && reaction.emoji.name === "1️⃣") {
        console.log("Hi")
        user.send("Removed the role \'Giveaway ping\'")
        const member1 = bot.guilds.get("541942314910613504").members.get(user.id)
        let myRole = bot.guilds.get("541942314910613504").roles.get("264410914592129025");
        member1.removeRole(myRole).catch(console.error);
  
    }})
})


bot.on('ready', () => {
    var interval = setInterval (function () {
      if (ssssshouts === true) {
      var idk697 = fs.readFileSync(`${process.cwd()}/Trainings.txt`, 'utf8');
      var idk333 = fs.readFileSync(`${process.cwd()}/Shifts.txt`, 'utf8');
      if (idk697 && idk333) {
        fs.readFile('./Trainings.txt', 'utf8', (err, data) => {
        var hhhhh = data.split('\n').length
        hhhhh = Math.round(hhhhh - 1)
        fs.readFile('./shifts.txt', 'utf8', (err, data) => {
          var Ihopeu = data.split('\n').length
          Ihopeu = Math.round(Ihopeu - 1)
        })})} else {
          if (!Idk333 && !idk697) {
            var Ihopeu = '0'
            var hhhhh = '0'
          } else {
            if (!Idk333) {
              var Ihopeu = '0'
                fs.readFile('./Trainings.txt', 'utf8', (err, data) => {
                var hhhhh = data.split('\n').length
                hhhhh = Math.round(hhhhh - 1)
                })
            } else {
              var hhhhh = '0'
                fs.readFile('./Shifts.txt', 'utf8', (err, data) => {
                  var Ihopeu = data.split('\n').length
                  Ihopeu = Math.round(Ihopeu - 1)
                })
            }}
          
        }
  

        roblox.shout({group: GroupId, message: 'Training scheduled: ' + hhhhh + ' Shift scheduled: ' + ' ' +  Ihopeu + announcement + '   ALL TIMES ARE GMT!'})
        .catch(console.error);}
    }, 1800000); 
})

bot.on('ready', () => {
  bot.channels.get("682276634698579982").fetchMessage("682276665115541638").then((message) => {
    var interval = setInterval (function () {
      if (decider === 1 || decider === 2 || decider === 3) {
        if (decider === 1) {
          idk695 = 'Both Moderation and Admin applications are open!'
        } else {
          if (decider === 2) {
            idk695 = 'Mod applications are open!'
          } else {
            idk695 = 'Admin applications are open!'
          }}
        const surrvivalh = new Discord.RichEmbed()
      .setColor('#00ff00')
      .setTitle('Trainings!')
      .setAuthor(botname, logo)
      .setDescription('Hello,\nThis channel is to show which application are currently open.\nYou can also check by tagging the bot and picking 3️⃣\nTo apply please use the same function')
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
      .setDescription('Hello,\nThis channel is to show which application are currently open.\nYou can also check by tagging the bot and picking 3️⃣\nTo apply please use the same function')
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
      .setDescription('Hello and welcome to the channel to see next Shifts.\nDo !claim-shift with the time you want.\nTimes will be wiped at the end of day\nPlease include am/am\n:warning: **ALL TIMES ARE BST**')
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
      .setDescription('Hello and welcome to the channel to see next Shifts.\nDo !claim-shift with the time you want.\nTimes will be wiped at the end of day\nPlease include am/am\n:warning: **ALL TIMES ARE BST**')
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
  .catch(error => console.log(error));
});

bot.on('guildMemberAdd', member => {
  member6 = member;
    let myGuild = bot.guilds.get('661271791636971520');
  let membercount = myGuild.memberCount;
  let memberCountChannel = myGuild.channels.get('681249520251699214');
  memberCountChannel.setName('Members: ' + membercount)
  .catch(error => console.log(error));
});

bot.on('guildMemberRemove', member => {
  let myGuild = bot.guilds.get('661271791636971520');
  let membercount = myGuild.memberCount;
  let memberCountChannel = myGuild.channels.get('681249520251699214');
  memberCountChannel.setName('Members: ' + membercount)
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
                .setDescription(`A message was deleted in ${message.channel} made by ${user}`)
                .addField('Content', message.content)
                .setThumbnail(logo)
	            .setTimestamp()
	            .setFooter('Bot made by bedrockminecart.');
                logs.send(Messagedelelfs);
  })




  bot.on('message', message => {
    if (message.content === '<@681244101152210953>' || message.content === '<@!681244101152210953>'){
      message.author.sendMessage('Hello there, Im the official bot for Barcelo and Im here to help. Please choose from one of the following: \n 1 For question or comaplaint! \n 2 for role classes!\n 3 to apply for a Discord role \n 4 for changelog \n (Please react to this dm)').then(sentMessage => {
        sentMessage.react('1️⃣').then(() => sentMessage.react('2️⃣').then(() => sentMessage.react('3️⃣').then(() => sentMessage.react('4️⃣'))));

      const filter = (reaction, user) => {
      return ['1️⃣', '2️⃣', '3️⃣', '4️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
      };

      sentMessage.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
      .then(collected => {
      const reaction = collected.first();

      if (reaction.emoji.name === '1️⃣') {
        sentMessage.delete();
        message.author.sendMessage('1 for a question\n2 for a complaint').then(sentMessage => {
          sentMessage.react('1️⃣').then(() => sentMessage.react('2️⃣'));
  
        const filter = (reaction, user) => {
        return ['1️⃣', '2️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
  
        sentMessage.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
        .then(collected => {
        const reaction = collected.first();
  
        if (reaction.emoji.name === '1️⃣') {
          sentMessage.delete();
          //question
          message.author.sendMessage('**You have started a convosation!**').then(Meesage => {
            message.author.sendMessage('What is you question about?').then(tellmetitle => {
      
             Meesage.channel.awaitMessages(response => (response.author === message.author), {
              max: 1,
              time: 60000000,
              errors: ['time']
          }).then(collected => {
                 const senter1 = collected.first();
              if (senter1) {
                var title = senter1.content
                Meesage.edit('**Started a conversation\n✅Title: ' + title + '**')
                tellmetitle.edit('added title')
                tellmetitle.delete(3 * 1000)
                Meesage.channel.sendMessage('Please describe your question in full.').then(Meesage5 => {
      
                  Meesage.channel.awaitMessages(response2 => (response2.author === message.author), {
                   max: 1,
                   time: 60000000,
                   errors: ['time']
               }).then(collected => {
                      const senter2 = collected.first();
                   if (senter2) {
                     var dess = senter2.content
                     Meesage.edit('**Started a conversation\n✅Title: ' + title + '\n✅Description: ' + dess + '**')
                     Meesage5.edit('Added description!')
                     Meesage5.delete(3 * 1000)
                     Meesage.channel.sendMessage('Please tell me any additipnal notes.').then(Meesage6 => {
      
                      Meesage.channel.awaitMessages(response3 => (response3.author === message.author), {
                       max: 1,
                       time: 60000000,
                       errors: ['time']
                   }).then(collected => {
                          const senter3 = collected.first();
                       if (senter3) {
                         var notes = senter3.content
                         Meesage.delete();
                         Meesage.channel.sendMessage('**Started a conversation\n✅Title: ' + title + '\n✅Description: ' + dess + '\nℹ️Additional notes: ' + notes + '**').then(sentMessage => {
                         Meesage6.edit('Added addidtional notes!')
                         Meesage6.delete(3 * 1000)
                          sentMessage.react('✅').then(() => sentMessage.react('❎'));
              
                          const filter = (reaction, user) => {
                            return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                            };
                      
                            sentMessage.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                            .then(collected => {
                            const reaction1 = collected.first();
                      
                            if (reaction1.emoji.name === '✅') {
                              var gitinittttt = 'Title: ' + title + '\nDescription: ' + dess + '\nℹ️Additional notes: ' + notes
                              const questionnnnn = new Discord.RichEmbed()
                                .setColor('#ff0000').setTitle('New question').setAuthor(botname, logo).setDescription(gitinittttt).setTimestamp().setFooter('Average response it 5-10 minutes');
                              bot.channels.get("681558326781149301").send(questionnnnn)
                              bot.channels.get("681558326781149301").send("From: " + message.author)
                              Meesage.channel.sendMessage('Sent! Our team should respond in the next few hours.')
                            } else {
                                if (reaction1.emoji.name === '❎') {
                                  Meesage.channel.sendMessage('Cancelled and deleted.')
                                } else {
                                message.channel.sendMessage('Did not react with the right')
                              }}
                            
                            })
                            .catch(collected => {
                              message.author.sendMessage('You took to long to react.');
                            });})}
                        })
                       })
                   }
                    })
                   })
              }
               })
              })
            })
         } else {
           if (reaction.emoji.name === "2️⃣") {
            sentMessage.delete();
            //complaint
            message.author.sendMessage("Is this complaint relating to a person or the game?\n1 for a person\n2 for the game").then(persorgame => {
              persorgame.react('1️⃣').then(() => persorgame.react('2️⃣'));



            const filter = (reaction, user) => {
              return ['2️⃣', '1️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
              };
        
              persorgame.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
              .then(collected => {
              const reaction9 = collected.first();
        
              if (reaction9.emoji.name === '1️⃣') {
                persorgame.delete();
                message.author.sendMessage('**You have started a convosation!**').then(Meesage => {
                  message.author.sendMessage('Please tell me who this is about').then(tellmetitle => {
            
                   Meesage.channel.awaitMessages(response => (response.author === message.author), {
                    max: 1,
                    time: 60000000,
                    errors: ['time']
                }).then(collected => {
                       const senter1 = collected.first();
                    if (senter1) {
                      var title = senter1.content
                      Meesage.edit('**Started a conversation\n✅Person: ' + title + '**')
                      tellmetitle.edit('added person')
                      tellmetitle.delete(3 * 1000)
                      Meesage.channel.sendMessage('Please describe why you are submiting a complaint against this person in full.').then(Meesage5 => {
            
                        Meesage.channel.awaitMessages(response2 => (response2.author === message.author), {
                         max: 1,
                         time: 60000000,
                         errors: ['time']
                     }).then(collected => {
                            const senter2 = collected.first();
                         if (senter2) {
                           var dess = senter2.content
                           Meesage.edit('**Started a conversation\n✅Person: ' + title + '\n✅Complaint: ' + dess + '**')
                           Meesage5.edit('Added complaint!')
                           Meesage5.delete(3 * 1000)
                           Meesage.channel.sendMessage('Please tell me any additipnal notes.').then(Meesage6 => {
            
                            Meesage.channel.awaitMessages(response3 => (response3.author === message.author), {
                             max: 1,
                             time: 60000000,
                             errors: ['time']
                         }).then(collected => {
                                const senter3 = collected.first();
                             if (senter3) {
                               var notes = senter3.content
                               Meesage.delete();
                               Meesage.channel.sendMessage('**Started a conversation\n✅Person: ' + title + '\n✅Complaint: ' + dess + '\nℹ️Additional notes: ' + notes + '**').then(sentMessage => {
                               Meesage6.edit('Added addidtional notes!')
                               Meesage6.delete(3 * 1000)
                                sentMessage.react('✅').then(() => sentMessage.react('❎'));
                    
                                const filter = (reaction, user) => {
                                  return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                  };
                            
                                  sentMessage.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                  .then(collected => {
                                  const reaction1 = collected.first();
                            
                                  if (reaction1.emoji.name === '✅') {
                                    var gitinittttt = 'Title: ' + title + '\nDescription: ' + dess + '\nℹ️Additional notes: ' + notes
                                    const questionnnnn = new Discord.RichEmbed()
                                      .setColor('#ff0000').setTitle('New complaint relating to a **PERSON**').setAuthor(botname, logo).setDescription(gitinittttt).setTimestamp().setFooter('Average response it 5-10 minutes');
                                    bot.channels.get("681558326781149301").send(questionnnnn)
                                    bot.channels.get("681558326781149301").send("From: " + message.author)
                                    Meesage.channel.sendMessage('Sent! Our team should respond in the next few hours.')
                                  } else {
                                      if (reaction1.emoji.name === '❎') {
                                        Meesage.channel.sendMessage('Cancelled and deleted.')
                                      } else {
                                      message.channel.sendMessage('Did not react with the right')
                                    }}
                                  
                                  })
                                  .catch(collected => {
                                    message.author.sendMessage('You took to long to react.');
                                  });})}
                              })
                             })
                         }
                          })
                         })
                    }
                     })
                    })
                  })
              } else {
                  if (reaction9.emoji.name === '2️⃣') {
                    Meesage.channel.sendMessage('Cancelled and deleted.')
                  } else {
                  message.channel.sendMessage('Did not react with the right')
                }}
              
              })
            })
              .catch(collected => {
                message.author.sendMessage('You took to long to react.');
              });
           }
         }
      })})
        
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
      .setFooter('Bot made by TallBobber123 - | Co Founder');
          message.author.sendMessage(roleclasses)
        } else {
          if (reaction.emoji.name === '3️⃣') {


            function admind () {
              message.author.sendMessage('You have picked to apply for admin!\nSome things are multiple choice and others need you to type an answer\n❌1.\n❌2.\n❌3.\n❌4.\n❌5.\n❌6.\n❌7.').then(statrtmessage => {
              message.author.sendMessage('First question. What is your discord name + roblox name (format: [tag yourself] [roblox username]) If this is not done your application will be deleted.').then(rdgfdcvgfd => {
                rdgfdcvgfd.channel.awaitMessages(response => (response.author === message.author), {
                  max: 1,
                  time: 60000000,
                  errors: ['time']
              }).then(collected => {
                     const senter1 = collected.first();
                     if (senter1.content === 'cancel') {
                      message.author.sendMessage('Cancelled.')
                      return;
                    } else {
                    const q1 = senter1.content
                    rdgfdcvgfd.delete();
                    statrtmessage.edit(`You have picked to apply for admin!\nSome things are multiple choice and others need you to type an answer\n✅1.${q1}\n❌2.\n❌3.\n❌4.\n❌5.\n❌6.\n❌7.`)
                    message.author.sendMessage('Second question. What is the role of an admin? (Please type an answer) (300 characters max)').then(rdgfdcvgfd => {
                      rdgfdcvgfd.channel.awaitMessages(response => (response.author === message.author), {
                        max: 1,
                        time: 60000000,
                        errors: ['time']
                    }).then(collected => {
                           const senter1 = collected.first();
                           if (senter1.content === 'cancel') {
                            message.author.sendMessage('Cancelled.')
                            return;
                          } else {
                          const q2 = senter1.content
                          rdgfdcvgfd.delete();
                          statrtmessage.edit(`You have picked to apply for admin!\nSome things are multiple choice and others need you to type an answer\n✅1.${q1}\n✅2.${q2}\n❌3.\n❌4.\n❌5.\n❌6.\n❌7.\n.`)
                          message.author.sendMessage('Third question. Why should we pick you to become an admin? (Please type an answer) (300 characters max)').then(rdgfdcvgfd => {
                            rdgfdcvgfd.channel.awaitMessages(response => (response.author === message.author), {
                              max: 1,
                              time: 60000000,
                              errors: ['time']
                          }).then(collected => {
                                 const senter1 = collected.first();
                                 if (senter1.content === 'cancel') {
                                  message.author.sendMessage('Cancelled.')
                                  return;
                                } else {
                                const q3 = senter1.content
                                rdgfdcvgfd.delete();
                                statrtmessage.edit(`You have picked to apply for admin!\nSome things are multiple choice and others need you to type an answer\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n❌4.\n❌5.\n❌6.\n❌7.`)
                                message.author.sendMessage('Fourth question. What would you do if someone was asking for a training? (Please type an answer) (300 characters max)').then(rdgfdcvgfd => {
                                  rdgfdcvgfd.channel.awaitMessages(response => (response.author === message.author), {
                                    max: 1,
                                    time: 60000000,
                                    errors: ['time']
                                }).then(collected => {
                                       const senter1 = collected.first();
                                       if (senter1.content === 'cancel') {
                                        message.author.sendMessage('Cancelled.')
                                        return;
                                      } else {
                                      const q4 = senter1.content
                                      rdgfdcvgfd.delete();
                                      statrtmessage.edit(`You have picked to apply for admin!\nSome things are multiple choice and others need you to type an answer\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n❌5.\n❌6.\n❌7.`)
                                      message.author.sendMessage('Fifth question. What would you do if someone was asking for a promotion over and and over? (Please type an answer) (300 characters max)').then(rdgfdcvgfd => {
                                        rdgfdcvgfd.channel.awaitMessages(response => (response.author === message.author), {
                                          max: 1,
                                          time: 60000000,
                                          errors: ['time']
                                      }).then(collected => {
                                             const senter1 = collected.first();
                                             if (senter1.content === 'cancel') {
                                              message.author.sendMessage('Cancelled.')
                                              return;
                                            } else {
                                            const q5 = senter1.content
                                            rdgfdcvgfd.delete();
                                            statrtmessage.edit(`You have picked to apply for admin!\nSome things are multiple choice and others need you to type an answer\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n✅5.${q5}\n❌6.\n❌7.`)
                                            message.author.sendMessage('Sixth question, If someone was spamming, would you mute them?').then(sentMessage => {
                                              
                                               sentMessage.react('✅').then(() => sentMessage.react('❎'));
                                   
                                               const filter = (reaction, user) => {
                                                 return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                                 };
                                           
                                                 sentMessage.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                                 .then(collected => {
                                                 const reaction1 = collected.first();
                                           
                                                 if (reaction1.emoji.name === '✅') {
                                                   q6 = '✅'
                                                   statrtmessage.edit(`You have picked to apply for admin!\nSome things are multiple choice and others need you to type an answer\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n✅5.${q5}\n6. ${q6}\n❌7.`)
                                                   message.author.sendMessage('Seventh question, if someone was annoying an moderator, Would you Ban them for bad words?').then(sentMessage => {
                                                  
                                                    sentMessage.react('✅').then(() => sentMessage.react('❎'));
                                        
                                                    const filter = (reaction, user) => {
                                                      return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                                      };
                                                
                                                      sentMessage.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                                      .then(collected => {
                                                      const reaction1 = collected.first();
                                                
                                                      if (reaction1.emoji.name === '✅') {
                                                        q7 = '✅'
                                                        statrtmessage.delete()
                                                        message.author.sendMessage(`Would you like to submit the following answers?\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`).then(idk87654 => {
                                                          idk87654.react('✅').then(() => idk87654.react('❎'));
                                                
                                                            const filter = (reaction, user) => {
                                                              return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                                              };
                                                        
                                                              idk87654.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                                              .then(collected => {
                                                              const reaction1 = collected.first();
                                                        
                                                              if (reaction1.emoji.name === '✅') {
                                                                var gitinittttt = `✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`
                                                                const questionnnnn = new Discord.RichEmbed()
                                                                  .setColor('#ff0000').setTitle('New application').setAuthor(botname, logo).setDescription(gitinittttt).setTimestamp().setFooter('Application sent:');
                                                                bot.channels.get("689431057581473845").send(questionnnnn)
                                                                Meesage.channel.sendMessage('Sent! Our team should respond in the next few hours.')
                                                              } else {
                                                                  if (reaction1.emoji.name === '❎') {
                                                                    Meesage.channel.sendMessage('Cancelled and deleted.')
                                                                  } else {
                                                                    console.log('You took to long to react.');
                                                                }}
                                                              
                                                              })
                                                              .catch(collected => {
                                                                console.log('You took to long to react.');
                                                              });
                                                        })
                                                      } else {
                                                          if (reaction1.emoji.name === '❎') {
                                                           q7 = '❎'
                                                           statrtmessage.delete()
                                                           message.author.sendMessage(`Would you like to submit the following answers?\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`).then(idk87654 => {
                                                            idk87654.react('✅').then(() => idk87654.react('❎'));
                                                   
                                                               const filter = (reaction, user) => {
                                                                 return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                                                 };
                                                           
                                                                 idk87654.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                                                 .then(collected => {
                                                                 const reaction1 = collected.first();
                                                           
                                                                 if (reaction1.emoji.name === '✅') {
                                                                   var gitinittttt = `✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`
                                                                   const questionnnnn = new Discord.RichEmbed()
                                                                     .setColor('#ff0000').setTitle('New application').setAuthor(botname, logo).setDescription(gitinittttt).setTimestamp().setFooter('Application sent:');
                                                                   bot.channels.get("689431057581473845").send(questionnnnn)
                                                                   Meesage.channel.sendMessage('Sent! Our team should respond in the next few hours.')
                                                                 } else {
                                                                     if (reaction1.emoji.name === '❎') {
                                                                       Meesage.channel.sendMessage('Cancelled and deleted.')
                                                                     } else {
                                                                      console.log('You took to long to react.');
                                                                   }}
                                                                 
                                                                 })
                                                                 .catch(collected => {
                                                                  console.log('You took to long to react.');
                                                                 });
                                                           })
                                                          } else {
                                                            console.log('You took to long to react.');
                                                        }}
                                                      
                                                      })
                                                      .catch(collected => {
                                                        console.log('You took to long to react.');
                                                      });})
                                                 } else {
                                                     if (reaction1.emoji.name === '❎') {
                                                       q6 = '❎'
                                                       statrtmessage.edit(`You have picked to apply for admin!\nSome things are multiple choice and others need you to type an answer\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n✅5.${q5}\n6. chose: ${q6}\n❌7.\n❌8.`)
                                                       message.author.sendMessage('Seventh question, if someone was annoying an moderator, Would you Ban them for bad words?').then(sentMessage => {
                                                  
                                                        sentMessage.react('✅').then(() => sentMessage.react('❎'));
                                            
                                                        const filter = (reaction, user) => {
                                                          return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                                          };
                                                    
                                                          sentMessage.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                                          .then(collected => {
                                                          const reaction1 = collected.first();
                                                    
                                                          if (reaction1.emoji.name === '✅') {
                                                            q7 = '✅'
                                                            statrtmessage.delete()
                                                            message.author.sendMessage(`Would you like to submit the following answers?\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`).then(idk87654 => {
                                                              idk87654.react('✅').then(() => idk87654react('❎'));
                                                    
                                                                const filter = (reaction, user) => {
                                                                  return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                                                  };
                                                            
                                                                  idk87654.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                                                  .then(collected => {
                                                                  const reaction1 = collected.first();
                                                            
                                                                  if (reaction1.emoji.name === '✅') {
                                                                    var gitinittttt = `✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`
                                                                    const questionnnnn = new Discord.RichEmbed()
                                                                      .setColor('#ff0000').setTitle('New application').setAuthor(botname, logo).setDescription(gitinittttt).setTimestamp().setFooter('Application sent:');
                                                                    bot.channels.get("689431057581473845").send(questionnnnn)
                                                                    Meesage.channel.sendMessage('Sent! Our team should respond in the next few hours.')
                                                                  } else {
                                                                      if (reaction1.emoji.name === '❎') {
                                                                        Meesage.channel.sendMessage('Cancelled and deleted.')
                                                                      } else {
                                                                        console.log('You took to long to react.');
                                                                    }}
                                                                  
                                                                  })
                                                                  .catch(collected => {
                                                                    console.log('You took to long to react.');
                                                                  });
                                                            })
                                                          } else {
                                                              if (reaction1.emoji.name === '❎') {
                                                               q7 = '❎'
                                                               statrtmessage.delete()
                                                               message.author.sendMessage(`Would you like to submit the following answers?\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`).then(idk87654 => {
                                                                idk87654.react('✅').then(() => idk87654.react('❎'));
                                                       
                                                                   const filter = (reaction, user) => {
                                                                     return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                                                     };
                                                               
                                                                     idk87654.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                                                     .then(collected => {
                                                                     const reaction1 = collected.first();
                                                               
                                                                     if (reaction1.emoji.name === '✅') {
                                                                       var gitinittttt = `✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`
                                                                       const questionnnnn = new Discord.RichEmbed()
                                                                         .setColor('#ff0000').setTitle('New application').setAuthor(botname, logo).setDescription(gitinittttt).setTimestamp().setFooter('Application sent:');
                                                                       bot.channels.get("689431057581473845").send(questionnnnn)
                                                                       Meesage.channel.sendMessage('Sent! Our team should respond in the next few hours.')
                                                                     } else {
                                                                         if (reaction1.emoji.name === '❎') {
                                                                           Meesage.channel.sendMessage('Cancelled and deleted.')
                                                                         } else {
                                                                         message.channel.sendMessage('Did not react with the right')
                                                                       }}
                                                                     
                                                                     })
                                                                     .catch(collected => {
                                                                      console.log('You took to long to react.');
                                                                     });
                                                               })
                                                              } else {
                                                                console.log('You took to long to react.');
                                                            }}
                                                          
                                                          })
                                                          .catch(collected => {
                                                            console.log('You took to long to react.');
                                                          });})
                                                     } else {
                                                      console.log('You took to long to react.');
                                                   }}
                                                 
                                                 })
                                                 .catch(collected => {
                                                  console.log('You took to long to react.');
                                                 });})
                                          }
                                        })
                                      })
                                    }
                                  })
                                })
                              }
                            })
                          })
                        }
                      })
                    })
                  }
                })
              })
            })
          }




          function modd () {
            message.author.sendMessage('You have picked to apply for mod!\nSome things are multiple choice and others need you to type an answer\n❌1.\n❌2.\n❌3.\n❌4.\n❌5.\n❌6.\n❌7.').then(statrtmessage => {
            message.author.sendMessage('If at any point you want to cancel the type cancel')
            message.author.sendMessage('First question. What is your discord name + roblox name (format: [tag yourself] [roblox username]) If this is not done your application will be deleted.').then(rdgfdcvgfd => {
              rdgfdcvgfd.channel.awaitMessages(response => (response.author === message.author), {
                max: 1,
                time: 60000000,
                errors: ['time']
            }).then(collected => {
                   const senter1 = collected.first();
                if (senter1.content === 'cancel') {
                  message.author.sendMessage('Cancelled.')
                  return;
                } else {
                  const q1 = senter1.content
                  rdgfdcvgfd.delete();
                  statrtmessage.edit(`You have picked to apply for mod!\nSome things are multiple choice and others need you to type an answer\n✅1.${q1}\n❌2.\n❌3.\n❌4.\n❌5.\n❌6.\n❌7.`)
                  message.author.sendMessage('Second question. What is the role of an mod? (Please type an answer) (300 characters max)').then(rdgfdcvgfd => {
                    rdgfdcvgfd.channel.awaitMessages(response => (response.author === message.author), {
                      max: 1,
                      time: 60000000,
                      errors: ['time']
                  }).then(collected => {
                         const senter1 = collected.first();
                         if (senter1.content === 'cancel') {
                          message.author.sendMessage('Cancelled.')
                          return;
                        } else {
                        const q2 = senter1.content
                        rdgfdcvgfd.delete();
                        statrtmessage.edit(`You have picked to apply for mod!\nSome things are multiple choice and others need you to type an answer\n✅1.${q1}\n✅2.${q2}\n❌3.\n❌4.\n❌5.\n❌6.\n❌7.\n.`)
                        message.author.sendMessage('Third question. Why should we pick you to become an mod? (Please type an answer) (300 characters max)').then(rdgfdcvgfd => {
                          rdgfdcvgfd.channel.awaitMessages(response => (response.author === message.author), {
                            max: 1,
                            time: 60000000,
                            errors: ['time']
                        }).then(collected => {
                               const senter1 = collected.first();
                               if (senter1.content === 'cancel') {
                                message.author.sendMessage('Cancelled.')
                                return;
                              } else {
                              const q3 = senter1.content
                              rdgfdcvgfd.delete();
                              statrtmessage.edit(`You have picked to apply for mod!\nSome things are multiple choice and others need you to type an answer\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n❌4.\n❌5.\n❌6.\n❌7.`)
                              message.author.sendMessage('Fourth question. What would you do if someone was asking for a training? (Please type an answer) (300 characters max)').then(rdgfdcvgfd => {
                                rdgfdcvgfd.channel.awaitMessages(response => (response.author === message.author), {
                                  max: 1,
                                  time: 60000000,
                                  errors: ['time']
                              }).then(collected => {
                                     const senter1 = collected.first();
                                     if (senter1.content === 'cancel') {
                                      message.author.sendMessage('Cancelled.')
                                      return;
                                    } else {
                                    const q4 = senter1.content
                                    rdgfdcvgfd.delete();
                                    statrtmessage.edit(`You have picked to apply for mod!\nSome things are multiple choice and others need you to type an answer\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n❌5.\n❌6.\n❌7.`)
                                    message.author.sendMessage('Fifth question. What would you do if someone was asking for a promotion over and and over? (Please type an answer) (300 characters max)').then(rdgfdcvgfd => {
                                      rdgfdcvgfd.channel.awaitMessages(response => (response.author === message.author), {
                                        max: 1,
                                        time: 60000000,
                                        errors: ['time']
                                    }).then(collected => {
                                           const senter1 = collected.first();
                                           if (senter1.content === 'cancel') {
                                            message.author.sendMessage('Cancelled.')
                                            return;
                                          } else {
                                          const q5 = senter1.content
                                          rdgfdcvgfd.delete();
                                          statrtmessage.edit(`You have picked to apply for mod!\nSome things are multiple choice and others need you to type an answer\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n✅5.${q5}\n❌6.\n❌7.`)
                                          message.author.sendMessage('Sixth question, If someone was spamming, would you mute them?').then(sentMessage => {
                                            
                                             sentMessage.react('✅').then(() => sentMessage.react('❎'));
                                 
                                             const filter = (reaction, user) => {
                                               return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                               };
                                         
                                               sentMessage.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                               .then(collected => {
                                               const reaction1 = collected.first();
                                         
                                               if (reaction1.emoji.name === '✅') {
                                                 q6 = '✅'
                                                 statrtmessage.edit(`You have picked to apply for mod!\nSome things are multiple choice and others need you to type an answer\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n✅5.${q5}\n6. ${q6}\n❌7.`)
                                                 message.author.sendMessage('Seventh question, if someone was annoying an moderator, Would you Ban them for bad words?').then(sentMessage => {
                                                
                                                  sentMessage.react('✅').then(() => sentMessage.react('❎'));
                                      
                                                  const filter = (reaction, user) => {
                                                    return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                                    };
                                              
                                                    sentMessage.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                                    .then(collected => {
                                                    const reaction1 = collected.first();
                                              
                                                    if (reaction1.emoji.name === '✅') {
                                                      q7 = '✅'
                                                      statrtmessage.delete()
                                                      message.author.sendMessage(`Would you like to submit the following answers?\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`).then(idk87654 => {
                                                        idk87654.react('✅').then(() => idk87654.react('❎'));
                                              
                                                          const filter = (reaction, user) => {
                                                            return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                                            };
                                                      
                                                            idk87654.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                                            .then(collected => {
                                                            const reaction1 = collected.first();
                                                      
                                                            if (reaction1.emoji.name === '✅') {
                                                              var gitinittttt = `✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`
                                                              const questionnnnn = new Discord.RichEmbed()
                                                                .setColor('#ff0000').setTitle('New application').setAuthor(botname, logo).setDescription(gitinittttt).setTimestamp().setFooter('Application sent:');
                                                              bot.channels.get("689431057581473845").send(questionnnnn)
                                                              Meesage.channel.sendMessage('Sent! Our team should respond in the next few hours.')
                                                            } else {
                                                                if (reaction1.emoji.name === '❎') {
                                                                  Meesage.channel.sendMessage('Cancelled and deleted.')
                                                                } else {
                                                                  console.log('You took to long to react.');
                                                              }}
                                                            
                                                            })
                                                            .catch(collected => {
                                                              console.log('You took to long to react.');
                                                            });
                                                      })
                                                    } else {
                                                        if (reaction1.emoji.name === '❎') {
                                                         q7 = '❎'
                                                         statrtmessage.delete()
                                                         message.author.sendMessage(`Would you like to submit the following answers?\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`).then(idk87654 => {
                                                          idk87654.react('✅').then(() => idk87654.react('❎'));
                                                 
                                                             const filter = (reaction, user) => {
                                                               return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                                               };
                                                         
                                                               idk87654.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                                               .then(collected => {
                                                               const reaction1 = collected.first();
                                                         
                                                               if (reaction1.emoji.name === '✅') {
                                                                 var gitinittttt = `✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`
                                                                 const questionnnnn = new Discord.RichEmbed()
                                                                   .setColor('#ff0000').setTitle('New application').setAuthor(botname, logo).setDescription(gitinittttt).setTimestamp().setFooter('Application sent:');
                                                                 bot.channels.get("689431057581473845").send(questionnnnn)
                                                                 Meesage.channel.sendMessage('Sent! Our team should respond in the next few hours.')
                                                               } else {
                                                                   if (reaction1.emoji.name === '❎') {
                                                                     Meesage.channel.sendMessage('Cancelled and deleted.')
                                                                   } else {
                                                                    console.log('You took to long to react.');
                                                                 }}
                                                               
                                                               })
                                                               .catch(collected => {
                                                                console.log('You took to long to react.');
                                                               });
                                                         })
                                                        } else {
                                                          console.log('You took to long to react.');
                                                      }}
                                                    
                                                    })
                                                    .catch(collected => {
                                                      console.log('You took to long to react.');
                                                    });})
                                               } else {
                                                   if (reaction1.emoji.name === '❎') {
                                                     q6 = '❎'
                                                     statrtmessage.edit(`You have picked to apply for admin!\nSome things are multiple choice and others need you to type an answer\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n✅5.${q5}\n6. chose: ${q6}\n❌7.\n❌8.`)
                                                     message.author.sendMessage('Seventh question, if someone was annoying an moderator, Would you Ban them for bad words?').then(sentMessage => {
                                                
                                                      sentMessage.react('✅').then(() => sentMessage.react('❎'));
                                          
                                                      const filter = (reaction, user) => {
                                                        return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                                        };
                                                  
                                                        sentMessage.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                                        .then(collected => {
                                                        const reaction1 = collected.first();
                                                  
                                                        if (reaction1.emoji.name === '✅') {
                                                          q7 = '✅'
                                                          statrtmessage.delete()
                                                          message.author.sendMessage(`Would you like to submit the following answers?\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`).then(idk87654 => {
                                                            idk87654.react('✅').then(() => idk87654react('❎'));
                                                  
                                                              const filter = (reaction, user) => {
                                                                return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                                                };
                                                          
                                                                idk87654.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                                                .then(collected => {
                                                                const reaction1 = collected.first();
                                                          
                                                                if (reaction1.emoji.name === '✅') {
                                                                  var gitinittttt = `✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`
                                                                  const questionnnnn = new Discord.RichEmbed()
                                                                    .setColor('#ff0000').setTitle('New application').setAuthor(botname, logo).setDescription(gitinittttt).setTimestamp().setFooter('Application sent:');
                                                                  bot.channels.get("689431057581473845").send(questionnnnn)
                                                                  Meesage.channel.sendMessage('Sent! Our team should respond in the next few hours.')
                                                                } else {
                                                                    if (reaction1.emoji.name === '❎') {
                                                                      Meesage.channel.sendMessage('Cancelled and deleted.')
                                                                    } else {
                                                                      console.log('You took to long to react.');
                                                                  }}
                                                                
                                                                })
                                                                .catch(collected => {
                                                                  console.log('You took to long to react.');
                                                                });
                                                          })
                                                        } else {
                                                            if (reaction1.emoji.name === '❎') {
                                                             q7 = '❎'
                                                             statrtmessage.delete()
                                                             message.author.sendMessage(`Would you like to submit the following answers?\n✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`).then(idk87654 => {
                                                              idk87654.react('✅').then(() => idk87654.react('❎'));
                                                     
                                                                 const filter = (reaction, user) => {
                                                                   return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                                                   };
                                                             
                                                                   idk87654.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
                                                                   .then(collected => {
                                                                   const reaction1 = collected.first();
                                                             
                                                                   if (reaction1.emoji.name === '✅') {
                                                                     var gitinittttt = `✅1.${q1}\n✅2.${q2}\n✅3.${q3}\n✅4.${q4}\n5.${q5}\n6.${q6}\n7.${q7}`
                                                                     const questionnnnn = new Discord.RichEmbed()
                                                                       .setColor('#ff0000').setTitle('New application').setAuthor(botname, logo).setDescription(gitinittttt).setTimestamp().setFooter('Application sent:');
                                                                     bot.channels.get("689431057581473845").send(questionnnnn)
                                                                     Meesage.channel.sendMessage('Sent! Our team should respond in the next few hours.')
                                                                   } else {
                                                                       if (reaction1.emoji.name === '❎') {
                                                                         Meesage.channel.sendMessage('Cancelled and deleted.')
                                                                       } else {
                                                                        console.log('You took to long to react.');
                                                                     }}
                                                                   
                                                                   })
                                                                   .catch(collected => {
                                                                    console.log('You took to long to react.');
                                                                   });
                                                             })
                                                            } else {
                                                              console.log('You took to long to react.');
                                                          }}
                                                        
                                                        })
                                                        .catch(collected => {
                                                          console.log('You took to long to react.');
                                                        });})
                                                   } else {
                                                    console.log('You took to long to react.');
                                                 }}
                                               
                                               })
                                               .catch(collected => {
                                                 console.log('You took to long to react.');
                                               });})
                                        }
                                      })
                                    })
                                  }
                                })
                              })
                            }
                          })
                        })
                      }
                    })
                  })
                }
              })
            })
          })
        }







            if (decider === 4) {
              message.author.sendMessage('Sorry but all applications are closed. Please try again soon.\nBut if you have been given a pascode please enter it now!').then(Meesage6 => {
            
                Meesage6.channel.awaitMessages(response3 => (response3.author === message.author), {
                 max: 1,
                 time: 60000000,
                 errors: ['time']
             }).then(collected => {
                    const senter3 = collected.first();
                 if (senter3) {
                   var notes = senter3.content
                   var trueorfalse2 = adminpass.includes(notes);
                   if (trueorfalse2 === true) {
                     message.author.sendMessage('Ok! I have checked and the code ' + notes + ' works!\nThis code is for Admin')
                     admind();
                   } else {
                     if (modpass.includes(notes)) {
                       message.author.sendMessage('Ok! I have checked and the code ' + notes + ' works!\nThis code is for Moderator')
                       modd();

                     } else {
                       message.author.sendMessage('The code does not work sorry.')
                     }
                   }
                  }
                  })
                 })
            }
            if (decider === 1) {
              message.author.sendMessage('Both of the applications are open! Please choose from one!\n1 for mod\n2 for admin').then(persorgame1 => {
                persorgame1.react('1️⃣').then(() => persorgame1.react('2️⃣'));



            const filter = (reaction, user) => {
              return ['2️⃣', '1️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
              };
        
              persorgame1.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
              .then(collected => {
              const reaction9 = collected.first();
        
              if (reaction9.emoji.name === '1️⃣') {
                message.author.sendMessage('So you chose to take the mod quiz!')
                modd();
              } else {
                if (reaction9.emoji.name === '2️⃣') {
                  message.author.sendMessage('So admin application! Here it is!')
                  admind();
                }
              }
              })
              .catch(collected => {
                console.log("HE TOOK TO LONG NOT MY PROBLEMO")
              });
            })
            }
            if (decider === 2) {
              message.author.sendMessage('You are in luck! Mod applications are open! Would you like to continue?').then(persorgame1 => {
                persorgame1.react('✅').then(() => persorgame1.react('❎'));



            const filter = (reaction, user) => {
              return ['✅', '1️⃣', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
              };
        
              persorgame1.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
              .then(collected => {
              const reaction9 = collected.first();
        
              if (reaction9.emoji.name === '✅') {
                message.author.sendMessage('So you chose to carry on with the the mod quiz!')
                modd();
              } else {
                if (reaction9.emoji.name === '❎') {
                  message.author.sendMessage('Ok, bye!')
                  return;
                }
              }
              })
              .catch(collected => {
                console.log("HE TOOK TO LONG NOT MY PROBLEMO")
              });
            })
            }
            if (decider === 3) {
              message.author.sendMessage('You are in luck! Admin applications are open! Would you like to continue?').then(persorgame1 => {
                persorgame1.react('✅').then(() => persorgame1.react('❎'));



            const filter = (reaction, user) => {
              return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
              };
        
              persorgame1.awaitReactions(filter, { max: 1, time: 60000000, errors: ['time'] })
              .then(collected => {
              const reaction9 = collected.first();
        
              if (reaction9.emoji.name === '✅') {
                message.author.sendMessage('So you chose to carry on with the the admin quiz!')
                admind();
              } else {
                if (reaction9.emoji.name === '❎') {
                  message.author.sendMessage('Ok, bye!')
                  return;
                }
              }
              })
              .catch(collected => {
                console.log("HE TOOK TO LONG NOT MY PROBLEMO")
              });
            })
            }



          } else {
            if (reaction.emoji.name === '4️⃣') {
              message.author.send(changedlog)
          }
      }
      }}
      })
      .catch(collected => {
        console.log("HE TOOK TO LONG NOT MY PROBLEMO")
      });
    })
    }});

      bot.on('message', message => {
        if (message.content.startsWith(code)) {
          let user123 = message.author;
          const question = message.content.slice (4);
          message.author.sendMessage('Your question has been submited to the staffing team!')
          const questionnn = new Discord.RichEmbed()
                        .setColor('#ff0000')
                        .setTitle('New question')
                        .setAuthor(botname, logo)
                        .setDescription(question)
                        .setTimestamp()
                        .setFooter('Average response it 5-10 minutes');
          bot.channels.get("681558326781149301").send(questionnn)
          bot.channels.get("681558326781149301").send('From ' + user123)
        }
      });

         //   bot.on("message", async (message) => {
         //   if (!Meesage.guild) { return; }
         //   let role = message.guild.roles.find(r => r.name === "Muted");
         //   const member = await message.guild.fetchMember(message.author);
         //   if(member.roles.has(role.id)) {
         //     if (member.roles.has("681588492802850837")){
         //       message.author.sendMessage("You had the muted role but because you are a SR+ You get a bypass! I took it of you.")
         //       member.removeRole(role).catch(console.error);
         //     } else {
         //       message.delete();
         //       message.author.sendMessage(":x: You cannot send there as you are muted!")
         //     }
         //}});
  
  




bot.on('message', message => {
    console.log(message.content + '---' + message.author.username)
    let args = message.content.substring(PREFIX.length).split(" ");
    if (message.author.id === bot.user.id) { return; }
    if (!message.content.startsWith(PREFIX)) { return; }

        switch (args[0]) {
        case 'ping':
          if(message.channel.name == 'chat-logs')  { return }
          message.channel.send("Pinging ...") // Placeholder for pinging ... 
          .then((msg4) => { // Resolve promise
            msg4.edit("Ping: " + (Date.now() - msg4.createdTimestamp)) // Edits message with current timestamp minus timestamp of message
          }); break;
        case 'time':
          if(message.channel.name == 'chat-logs')  { return }
            const time = new Discord.RichEmbed()
	          .setColor('#ff0000')
              .setTitle('Time')
              .setThumbnail(logo)
              .setDescription('Time')
              .setTimestamp()
              message.channel.sendMessage(time);
              break;
             case 'delete':
              if(message.channel.name == 'chat-logs')  { return }
              if(message.channel.name == undefined)  { return }
              if(message.member.roles.has(admin) || message.member.roles.has("687688446927700011") || message.member.hasPermission("ADMINISTRATOR")) {
              message.delete();
              if (!args[1]) return message.reply('Error please define number')
              message.channel.bulkDelete(args[1])
            } else {
              message.channel.sendMessage('badboy') 
            }break;
              case 'talk':
                if(message.channel.name == 'chat-logs')  { return }
                if(message.channel.name == undefined)  { return }
                if(message.member.roles.has(admin) || message.member.roles.has("687688446927700011") || message.member.hasPermission("ADMINISTRATOR")) {
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
                      if(message.channel.name == 'chat-logs')  { return }
                      if(message.channel.name == undefined)  { return }
                      if(message.member.roles.has(admin)) {
                      let member4 = message.member;
                      const user60 = message.guild.members.get(message.author.id).displayName;
                      trainer = user60
                      const start = new Discord.RichEmbed()
                        .setColor('#ff0000')
                        .setTitle('Trainings!')
                          .setAuthor(botname, logo)
                          .setDescription(`Hello everyone!\n\nBarcelo Trainings!! \n Are you still awaiting Training? Then come along to this training.\n Slocked?\nSlock in 10-15 minutes\n\n**LINK:**\nhttps://www.roblox.com/games/897546096/Barcelo-Training-Center-V1`)
                          .setThumbnail(logo)
                          .setImage('https://cdn.discordapp.com/attachments/661290411540742154/687752603219525748/unknown.png')
                          .setTimestamp()
                          .setFooter('Started: ');
                      const trainingaa = new Discord.RichEmbed()
                        .setColor('#00ff00')
                        .setTitle('Trainings!')
                          .setAuthor(botname, logo)
                          .setDescription(`Training has started!\n Hop along to the training centre (link in <#661290395216379914>)\nThis might be last one for a while so hop along!\nHosted by ${user60}`)
                          .setThumbnail(logo)
                          .setTimestamp()
                          .setFooter('Training started: ');
                      bot.channels.get("661290395216379914").send('<@&661290357589540890>');
                      bot.channels.get("661290395216379914").send(start)
                      bot.channels.get("661290395216379914").send('More info in <#681248976590209034>');
                      bot.channels.get("681248976590209034").send(trainingaa).then((message5) => {
                      roblox.shout({group: GroupId, message: 'Barcelo trainings are right now! Hop along whith others to get trained! Host: ' + user60})
                      message.author.sendMessage("Hello! And welcome to the training procedure! Please tell me once you have finished by pressing ✅ and if it gets cancelled, please press ❎!").then(sentMessage => {
                              sentMessage.react('✅').then(() => sentMessage.react('❎'));
                      
                            const filter = (reaction, user) => {
                            return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                            };
                      
                            sentMessage.awaitReactions(filter, { max: 1, time: 2147483647, errors: ['time'] })
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
                                .setDescription(`Training has finished! Everyone who passed has been ranked!\nHosted by ${user60}`)
                                .setThumbnail(logo)
                                .setTimestamp()
                                .setFooter('This message will be deleted after 5 minutes. Ended: ');
                              message5.edit(trainingaaa).then(mesasge7 => {
                                loooooool = message5.id
                                mesasge7.react('❓');
                                trrrrrrrrrr = 'This training has finished. Sorry if you couldn\'t make it. But if you did and you passed I congratulate you! Host: ' + user60
                                mesasge7.delete(5 * 60 * 1000);
                                });
                            } else {
                                if (reaction1.emoji.name === '❎') {
                                  message.author.sendMessage("Please tell me why...").then(Meesage6 => {
            
                                    Meesage6.channel.awaitMessages(response3 => (response3.author === message.author), {
                                     max: 1,
                                     time: 2147483647,
                                     errors: ['time']
                                 }).then(collected => {
                                        const senter3 = collected.first();
                                     if (senter3) {


                                    bot.channels.get("661290395216379914").send('*Tryout cancelled due to ' + senter3 +'*\nhosted by ' + user60)
                                    sentMessage.edit('Chose: ❎');
                                    roblox.shout({group: GroupId, message: 'Training has been cancelled.'})
                                    const trainingaaaa = new Discord.RichEmbed()
                                    .setColor('#ff0000')
                                    .setTitle('Trainings!')
                                    .setAuthor(botname, logo) 
                                    .setDescription(`Due to unforseen circumstances the training has been cancelled. :(\nHosted by ${user60}`)
                                    .setThumbnail(logo)
                                    .setTimestamp()
                                    .setFooter('This message will be deleted after 5 minutes. Ended: ');
                                message5.edit(trainingaaaa).then(mesasge6 => {
                                  loooooool = message5.id
                                mesasge6.react('❓')

                                  trrrrrrrrrr = 'This training has been cancelled. Sorry if we caused any inconvinience. Reason: ' + senter3 + '\nHost: ' + user60
                                  mesasge6.delete(5 * 60 * 1000);
                                  });
                                }})})} else {
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
                      if(message.channel.name == 'chat-logs')  { return }
                      const user59 = message.guild.members.get(message.author.id).displayName
                      message.channel.sendMessage(user59)
                      break;
                    case 'important':
                      if(message.channel.name == 'chat-logs')  { return }
                      if(message.channel.name == undefined)  { return }
                      if(message.member.roles.has(admin) || message.member.hasPermission("ADMINISTRATOR")) {
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
                        if(message.channel.name == 'chat-logs')  { return }
                        message.channel.sendMessage(release)
                        break;
                      case 'version':
                        if(message.channel.name == 'chat-logs')  { return }
                        message.channel.sendMessage('This bot is on ' + version)
                        break;
                      case 'reply':
                        if(message.channel.name == 'chat-logs')  { return }
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has(admin) || message.member.hasPermission("ADMINISTRATOR")) {
                        var mention = message.mentions.users.first();
                        if (mention == null) { return; }
                        const user54 = message.author.username
                        message.delete();
                        mentionMessage = message.content.slice (7 + args[1].length);
                        const lolololl1115 = new Discord.RichEmbed()
                                  .setColor('#00ff00')
                                  .setTitle('Reply has been sent from ' + user54)
                                  .setAuthor(botname, logo)
                                  .setDescription(mentionMessage)
                                  .addField('**Answered incorectly?**', 'If you think you have been answered incorrectly please **DO NOT** press the tick, Please press the :x:')
                                  .setTimestamp()
                                  .addField('**Answered correctly?**', "Then press the tick!")
                                  .setFooter('Bot made by Bedrockminecart.');
                        mention.sendMessage (lolololl1115).then(replyyyy => {
                          replyyyy.react('✅').then(() => replyyyy.react('❎'));
                
                          const filter = (reaction, user) => {
                          return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                          };
                    
                          replyyyy.awaitReactions(filter, { max: 1, time: 2147483647, errors: ['time'] })
                          .then(collected => {
                          const reaction1 = collected.first();
                    
                          if (reaction1.emoji.name === '✅') {
                            mention.sendMessage('Ticket has been closed! Tag me again if you need anymore help.')
                            message.channel.sendMessage("Ticket closed!")
                          } else {
                              if (reaction1.emoji.name === '❎') {
                                message.channel.sendMessage("The User thinks that user has not answered correct. They are about to send More detailed answer!")
                                mention.send('Ticket kept open. Please explain in more detail about your problem').then(Meeesage5 => {
      
                                  Meeesage5.channel.awaitMessages(response2 => (response2.author === message.author), {
                                   max: 1,
                                   time: 60000000,
                                   errors: ['time']
                               }).then(collected => {
                                      const senter2 = collected.first();
                                   if (senter2) {
                                     var desss = senter2.content
                                     message.author.sendMessage('Sent to the staffing team!')
                                     const repllll = new Discord.RichEmbed()
                                      .setColor('#ff0000')
                                      .setTitle('Reply to a reply from')
                                      .setAuthor(botname, logo)
                                      .setDescription(desss)
                                      .setTimestamp()
                                      .setFooter('Idk');
                                      message.channel.send(repllll)  
                                      message.channel.send('From ' + mention)
                                }})})
                              } else {
                              message.channel.sendMessage('Did not react with the right')
                            }}
                          
                          })
                          .catch(collected => {
                            message.author.sendMessage('You took to long to react.');
                          });
                        })
                        message.channel.sendMessage('Reply sent!')
                      }break;
                      case 'pass':
                        if(message.channel.name == 'chat-logs')  { return }
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has(admin) || message.member.hasPermission("ADMINISTRATOR")) {
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
                                  .setDescription('Hello there ' + user52 + '. You have passed a training \nYou have been ranked\nAssessed by: `' + user51 + '`')
                                  .setTimestamp()
                                  .setFooter('Bot made by Bedrockminecart.');
                                  metion.sendMessage(lolololl111) } else {
                                    const lolololl11 = new Discord.RichEmbed()
                                  .setColor('#00ff00')
                                  .setTitle('You have passed training! :white_check_mark:')
                                  .setAuthor(botname, logo)
                                  .setDescription('Hello there ' + user52 + '. You have passed a training \nYou have been ranked to ' + args[3] + '\nAssessed by: `' + user51 + '`')
                                  .setTimestamp()
                                  .setFooter('Well done!');
                                  metion.sendMessage(lolololl11)
                                  }} else {
                                     if (args[1] === 'promo') {
                                      const lolololl1115 = new Discord.RichEmbed()
                                      .setColor('#00ff00')
                                      .setTitle('You have been promoted! :white_check_mark:')
                                      .setAuthor(botname, logo)
                                      .setDescription('Hello there ' + user52 + '. You have been promoted because you have helped at a training or been a good employee \nYou have been ranked\nPromoted by: `' + user51 + '`')
                                      .setTimestamp()
                                      .setFooter('You must have worked hard!');
                                      metion.sendMessage(lolololl1115)
                                     } else {
                                       if (args[1] === 'app') {
                                        if(message.channel.name == 'apps')  {
                                        const lolololl11167 = new Discord.RichEmbed()
                                        .setColor('#00ff00')
                                        .setTitle('You passed your application! :white_check_mark:')
                                        .setAuthor(botname, logo)
                                        .setDescription('Hello there ' + user52 + '. Well done because you passed an application! \nYou have been ranked!\nRead by: `' + user51 + '`')
                                        .setTimestamp()
                                        .setFooter('Good job, keep it up!');
                                        metion.sendMessage(lolololl11167)
                                      }} else {
                                        const lolololl1116 = new Discord.RichEmbed()
                                      .setColor('#00ff00')
                                      .setTitle('You have passed training/been promoted! :white_check_mark:')
                                      .setAuthor(botname, logo)
                                      .setDescription('Hello there ' + user52 + '. You have passed a training or been promoted, I am not sure. \nYou have been ranked\nRanked by: `' + user51 + '`')
                                      .setTimestamp()
                                      .setFooter('Good job, keep it up!');
                                      metion.sendMessage(lolololl1116)
                                      }
                                     }
                                  }
                            } else {
                              message.channel.sendMessage('You dont have the permision for that')
                        }break;

                        case 'fail':
                          if(message.channel.name == 'chat-logs')  { return }
                          if(message.channel.name == undefined)  { return }
                          if(message.member.roles.has(admin)) {
                            if(message.channel.name == 'apps')  {
                            message.delete();
                            var metion = message.mentions.users.first();
                            if (metion == null) { return; }
                            const user51 = message.guild.members.get(message.author.id).displayName
                            const user52 = message.guild.members.get(metion.id).displayName
                            if (args[1] === 'training') {
                              message.channel.sendMessage('Not understood.')
                            } else {
                                       if (args[1] === 'promo') {
                                        message.channel.sendMessage('Not understood.')
                                       } else {
                                         if (args[1] === 'app') {
                                           const ffDfds = message.content.slice(32)
                                          const lolololl11167 = new Discord.RichEmbed()
                                          .setColor('#ff0000')
                                          .setTitle('You failed your application! :x:')
                                          .setAuthor(botname, logo)
                                          .setDescription('Hello there ' + user52 + '. Sorry to say but you have failed an application! \nRead by: `' + user51 + '` Contact that user for more details of how you could improve!```' + ffDfds + '```')
                                          .setTimestamp()
                                          .setFooter('I\'m sorry abou this news. Better luck next time!');
                                          metion.sendMessage(lolololl11167)
                                        } else {
                                          message.channel.sendMessage('Not understood.')
                                        }
                                       }
                                    }}
                              } else {
                                message.channel.sendMessage('You dont have the permision for that')
                          }break;


                      case 'shout': 
                      if(message.channel.name == 'chat-logs')  { return }
                      if(message.channel.name == undefined)  { return }
                      if(message.member.roles.has("676206157815218177") || message.member.hasPermission("ADMINISTRATOR")) {
                            const msg = message;
                              ShoutMessage = message.content.slice(7)
                              if (ShoutMessage) {
                                roblox.shout({group: GroupId, message: ShoutMessage})
                                message.channel.sendMessage('Sucessfully shouted to the Group!\n\nMessage: `' + ShoutMessage + '`');
                              }} break;
                      case 'promote':
                        if(message.channel.name == 'chat-logs')  { return }
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has("676206157815218177") || message.member.hasPermission("ADMINISTRATOR")) {
                        var mention = message.mentions.users.first();
                        if (mention == null) { message.author.sendMessage("Please mention the user. If the user is not in disord, please tell them to join.") }
                        let str = message.channel.guild.members.get(mention.id).displayName;
                        let username2 = str.split(" ");
                        if (username2[0]){
                          message.channel.send(`Checking ROBLOX for ${username2[0]}`)
                          roblox.getIdFromUsername(username2[0])
                        .then(function(id){
                          roblox.getRankInGroup(GroupId, id)
                          .then(function(rank){
                            if(maximumRank <= rank){
                              message.channel.send(`${id} is rank ${rank} and not promotable.`)
                            } else {
                              message.channel.send(`${username2[0]} is able to be promoted.`)
                              roblox.promote(GroupId, id)
                              .then(function(roles){
                                message.channel.send(`Succesfully promoted ${username2[0]} to 1 rank above their Previous rank`)
                              })
                            }
                          })
                        })
                        } else {
                          message.channel.send("Please enter a username.")
                        }}
                        break;;
                      case 'demote':
                        if(message.channel.name == 'chat-logs')  { return }
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
                        if(message.channel.name == 'chat-logs')  { return }
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
                        if(message.channel.name == 'chat-logs')  { return }
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has("676206157815218177")) {
                        roblox.getIdFromUsername(args[1])
                        .then(function(id){roblox.handleJoinRequest(GroupId, id, 1)
                        message.channel.sendMessage(`Succesfully accepted user ${args[1]}`)})
                        }break;
                      case 'link':
                        if(message.channel.name == 'chat-logs')  { return }
                        let str = args[1];
                        str = str.substring(0, str.length - 1);
                        str = str.substring(2, str.length, 0);
                        message.channel.sendMessage('https://discordapp.com/channels/649745201849696297/' + str + '/' + args[2])
                      break;
                      case 'schedule':
                        if(message.channel.name == 'chat-logs')  { return }
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has(admin)) {
                        var idk699 = fs.readFileSync(`${process.cwd()}/Trainings.txt`, 'utf8');
                        fs.writeFileSync(`${process.cwd()}/Trainings.txt`, (idk699 + `\n${(args[1])}` + ' at ' + (args[2]) + `. Hosted by ${message.guild.members.get(message.author.id).displayName}.`))
                        message.channel.sendMessage('Scheduled!')
                        }break;
                      case 'clear-schedule':
                        if(message.channel.name == 'chat-logs')  { return }
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has("676206157815218177")) {
                        var idk699 = fs.readFileSync(`${process.cwd()}/Trainings.txt`, 'utf8');
                        if (!args[1]) {
                          message.channel.send("Please tell me which line.")
                          return;
                        } else {if(NaN(args[1])){
                          message.channel.send("Has to be a number.")
                          return;
                        }}
                        const number = args[1] + 1
                        const argu = idk699.split("\n")
                        fs.writeFileSync(`${process.cwd()}/Trainings.txt`, '')
                        message.channel.sendMessage('Cleared the Schedule!')
                        }break;
                      case 'Barcelo12':
                        if(message.channel.name == 'chat-logs')  { return }
                        if(message.channel.name == undefined)  { return }
                        message.channel.sendMessage('h')
                        break;
                      case 'claim-shift':
                        if(message.channel.name == 'chat-logs')  { return }
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has(admin)) {
                          var idk699 = fs.readFileSync(`${process.cwd()}/Shifts.txt`, 'utf8');
                          fs.writeFileSync(`${process.cwd()}/Shifts.txt`, (idk699 + `\n` + 'Shift at ' + (args[1]) + `. Hosted by ${message.guild.members.get(message.author.id).displayName}.`))
                          message.channel.sendMessage('Scheduled!')
                          }break;
                      case 'clear-shifts':
                        if(message.channel.name == 'chat-logs')  { return }
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has("681588492802850837")) {
                        var Talll = ':Managingdirector:'
                        fs.writeFileSync(`${process.cwd()}/Trainings.txt`, '')
                        message.channel.sendMessage('Cleared the Schedule!')
                        }break;
                      case 'invite':
                        if(message.channel.name == 'chat-logs')  { return }
                        message.author.sendMessage('Please copy the following: ```Do you like to spend your time in a nice resort? well join Barcelo! About us: • Since January the First 2017. As one of the quickest growing Hotel groups on ROBLOX, Barcelo brings you clean and beautiful rooms, making you want to come back for more every single day. Here at Barcelo, we have cosy seats & heating making sure you are filled with joy every single day. We have many different things like milkshakes to satisfy your day and having you say \"Let\'s go to Barcelo!\" We hope you enjoy your stay here at Barcelo\.\ndiscord.gg/BT65vQf.```')
                        break;
                      case 'Barcelo12652893473':
                        message.author.sendMessage('barceloResortss@gmail.com\nBarcelo1818\n------------------------------------------------------------------------------------------------------------------------------------------\nBarcelo_Ranker\nBarcelo1818\n------------------------------------------------------------------------------------------------------------------------------------------')
                        break;
                      case 'shoutss':
                        if (message.member.roles.has("676206157815218177")) {
                          if (args[1] === 'on') {
                            message.channel.sendMessage('Turned on!')
                            ssssshouts = true
                          } else {
                            if (args[1] === 'off') {
                              message.channel.sendMessage('Turned off!')
                              ssssshouts = false
                            } else {
                              message.channel.sendMessage('Pleasse state on/off')
                            }
                          }
                        } else {
                          message.channel.sendMessage('❌ You do not have the right permission for this.')
                        } break;
                      case 'fight':
                        if (!args[1]) { return };
                        var random333 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
                        message.channel.sendMessage('**RULES ARE SIMPLE**\nI produce a number from 1-100\nIf the number is below 50 you lose if it is above you win!')
                        message.channel.sendMessage('fighting...').then(Fighter => {
                          setTimeout(function() {
                          if (args[1] === '<@681244101152210953>' || args[1] === '<@!681244101152210953>') {
                            Fighter.edit("Of course TallBobber scripted me to always win a fight idiot")
                          } else {
                            if (message.author.username === 'Bedrockminecart' || args[1] === '<@330979731673710592>' || args[1] === '<@!330979731673710592>') {
                              Fighter.edit("Of course Tall is gonna win. Yes me. I win woo. HEEHHE I scripted it!")
                            } else {
                              if (random333 < 50) {
                                Fighter.edit('Argh!\n' + args[1] + ' won the fight!\n Sadly you lost as I picked the number ||' + random333 + '||')
                              } else {
                                Fighter.edit('Wooo!\n' + 'You won the fight!\n I picked the number ||' + random333 + '||')
                              }
                            }
                          }
                        }, 5000 )
                      }
                      )
                      break;
                      case 'fact':
                        if(message.channel.name == undefined)  { return }
                        if (message.guild.id === "661271791636971520"){
                        var rando2m333 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                        if (rando2m333 == 1) {
                          fs.readFile('./index.js', 'utf8', (err, data) => {
                            var hhhhh = data.split('\n').length
                          message.channel.sendMessage("This bot runs of " + hhhhh + " lines of code!")
                          })
                        }
                        if (rando2m333 == 2) {
                          message.channel.sendMessage("This bot was made and developed by TallBobber123 (BedrockMinecart)!")
                        }
                        if (rando2m333 == 3) {
                          message.channel.sendMessage("The group is owned by xXMonkey_chapXx!")
                        }
                        if (rando2m333 == 4) {
                          message.channel.send("Yo fucking hell you cant even get to this part of the script yet")
                        }} break;
                      case 'uptime':
                        message.channel.sendMessage('The bots uptime is **' + timeonline + '**s!')
                        break;
                      case 'mute':
                        if(message.channel.name == 'chat-logs')  { return }
                        if(message.channel.name == undefined)  { return }
                      if (message.member.roles.has(admin)) {
                        let member = message.mentions.members.first();

                        if (!member) {
                          message.channel.sendMessage("Define user")
                        } else {
                          const role = message.guild.roles.find(r => r.name === "Muted");
                          member.addRole(role).catch(console.error);
                          let warnchannel = bot.channels.get("690496511829737494")
                          const muteembed = new Discord.RichEmbed()
                          .setTitle("Someone has been muted")
                          .addField("Who?", args[1])
                          .addField("Where?", message.channel.name)
                          .addField("By who?", message.author.username)
                          warnchannel.sendMessage(muteembed)
                        }} break;
                      case 'report':
                        message.author.sendMessage("Welcome to the reporting process! Please copy the id of the user and send it to me.").then(Meesage6 => {
            
                          Meesage6.channel.awaitMessages(response3 => (response3.author === message.author), {
                           max: 1,
                           time: 60000000,
                           errors: ['time']
                       }).then(collected => {
                              const senter3 = collected.first();
                              Meesage6.edit("Welcome to the reporting process! \nUser reporting: " + message.author + "\nUser id: " + senter3 + "\nPlease tell me why")
            
                                Meesage6.channel.awaitMessages(response3 => (response3.author === message.author), {
                                 max: 1,
                                 time: 60000000,
                                 errors: ['time']
                             }).then(collected => {
                                    const senter4 = collected.first();
                                    Meesage6.delete();
                                    message.author.sendMessage("Welcome to the reporting process!\nUser reporting: " + message.author + "\nUser id: " + senter3 + "\nReason: " + senter4).then(sentMessage => {
                                      sentMessage.react('✅').then(() => sentMessage.react('❎'));
                    
                                const filter = (reaction, user) => {
                                  return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
                                  };
                            
                                  sentMessage.awaitReactions(filter, { max: 1, time: 2147483647, errors: ['time'] })
                                  .then(collected => {
                                  const reaction1 = collected.first();
                            
                                  if (reaction1.emoji.name === '✅') {
                                    var gitinittttt = "User reporting: " + message.author + "\nUser id: " + senter3 + "\nReason: " + senter4 + "\nProof: Please contact " + message.author + " for proof!"
                                    const questionnnnn = new Discord.RichEmbed()
                                      .setColor('#ff0000').setTitle('New report').setAuthor(botname, logo).setDescription(gitinittttt).setTimestamp().setFooter('Average response it 5-10 minutes');
                                    bot.channels.get("681558326781149301").send(questionnnnn)
                                    Meesage.channel.sendMessage('Sent! Our team should respond in the next few hours.')
                                  } else {
                                      if (reaction1.emoji.name === '❎') {
                                        Meesage.channel.sendMessage('Cancelled and deleted.')
                                      } else {
                                      message.channel.sendMessage('Did not react with the right')
                                    }}
                                  
                                  })
                                  .catch(collected => {
                                    message.author.sendMessage('You took to long to react.');
                                  });
                                    })
                             })
                       })}) 
                       break;
                      case 'help':
                        if (!args[1]) {
                          message.channel.send("```Please do !help and choose one of these to go after:\nhelp\nmute - Admin\nuptime\nfact\nfight\npromote - Ranking perms\ndemote - Ranking perms\nshout - Ranking perms\ntrain - Senior staff\nVersion\nme\ntalk - Admin\ndelete - Admin\ntime\nping\nMention-me```")
                        } else {
                          if (args[1] === "help") {
                            message.channel.send("Help - Brings you to this command!")
                          } else {
                            if (args[1] === "mute") {
                              message.channel.sendMessage("Mutes a member - must have permissions")
                            } else {
                              if (args[1] === "uptime") {
                                message.channel.sendMessage("Shows uptime in seconds")
                              } else {
                                if(args[10] === "fact") {
                                  message.channel.sendMessage("Produces a random fact")
                                } else {
                                  if(args[1] === "fight") {
                                    message.channel.sendMessage("Creates a probility of you winning a fight against this person")
                                  } else {
                                    if(args[1] === "promote") {
                                      message.channel.sendMessage("Promote a user in the roblox group - musts have Ranking perms")
                                    } else {
                                      if (args[1] === "demote") {
                                        message.channel.sendMessage("Demotes a user in the roblox group - must hve Ranking perms")
                                      } else {
                                        if(args[1] === "shout") {
                                          message.channel.sendMessage("Makes a shout in the group - must have Ranking perms")
                                        } else {
                                          if (args[1] === "train") {
                                            message.channel.sendMessage("Starts a training - Must have the senior staff role")
                                          } else {
                                            if (args[1] === "train") {
                                              return;
                                            } else {
                                              if(args[1] === "version") {
                                                message.channel.sendMessage("Displays the version of the bot.")
                                              } else {
                                                if(args[1] === "version") {
                                                  return;
                                                } else {
                                                  if(args[1] === "me") {
                                                    message.channel.sendMessage("Says who you are")
                                                  } else {
                                                    if(args[1] === "talk") {
                                                      message.channel.sendMessage("Make an embed !talk [title (1 word)] [description] -- must have perms")
                                                    } else {
                                                      if(args[1] === "delete") {
                                                        message.channel.sendMessage("deletes messages - must have perms")
                                                      } else {
                                                        if(args[1] === "time") {
                                                          message.channel.sendMessage("Displays the time")
                                                        } else {
                                                          if(args[1] === "ping") {
                                                            message.channel.sendMessage("displays the bot latency")
                                                          } else {
                                                            if(args[1] === "mention-me") {
                                                              message.channel.sendMessage("If you mention me by it's self I will help you with many things!")
                                                            } else {
                                                              message.channel.sendMessage("Not understood by \'" + args[1] + "\'. Please refer to !help")
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        } break;
                      case 'announce':
                        const ur = message.content.slice(10)
                        message.channel.send('Set it to Important anouncement: ' + ur)
                        announcement = 'Important anouncement: ' + ur
                        break;
                      case 'test':
                        message.channel.sendMessage("Yo").then(message5 => {
                        message5.edit("lol").then(mesasge7 => {
                          loooooool = mesasge7.id
                          mesasge7.delete(5 * 60 * 1000);
                          });
                        }) 
                        break;
                      case 'verify':
                        if(message.channel.name == undefined)  { return }
                        if (message.guild.id === "661271791636971520"){
                          if (message.member.roles.has("695668121842745454") || message.member.roles.has("695668006923141150")) { return };
                        const welcome = new Discord.RichEmbed()
                        .setTitle("Verification")
                        .setAuthor("Sent for " + message.channel.guild.members.get(message.author.id).displayName)
                        .setDescription("Hello and welcome to the verification process at Barcelo!")
                        .addField("**First step:**", "Please send your roblox username to me!")
                        .setFooter("If at any point you are stuck please use the bot and ask the question 'Verification'")
                        message.author.sendMessage(welcome).then(Meesage6 => {
            
                          Meesage6.channel.awaitMessages(response3 => (response3.author === message.author), {
                           max: 1,
                           time: 60000000,
                           errors: ['time']
                       }).then(collected => {
                              const senter3 = collected.first();
                              retrievedata("B3").then(value => {
                              const welcome = new Discord.RichEmbed().setTitle("Verification").setAuthor("Sent for " + message.channel.guild.members.get(message.author.id).displayName).setDescription("Working").setFooter("If at any point you are stuck please use the bot and ask the question 'Verification'")
                              message.author.sendMessage(welcome).then(messssss => {
                                setTimeout(function(){
                                  const welcome1 = new Discord.RichEmbed()
                                  .setTitle("Verification")
                                  .setAuthor("Sent for " + message.channel.guild.members.get(message.author.id).displayName + '/' + senter3)
                                  .setDescription(`I am registering you into the system but I need you verify your account on Roblox by joining the following link! Once you get into the game you need to paste the code beneath.\nLink: https://www.roblox.com/games/4848871678/TallBobber123s-Place-Number-5 \nCode: \`${message.author.id}/${value}\``).setFooter("If at any point you are stuck please use the bot and ask the question 'Verification'")
                                messssss.edit(welcome1)
                                setdatadata("D" + value, message.author.username)
                                setdatadata("E" + value, message.author.id)
                                setdatadata("B3", value + 1)
                                let role = message.guild.roles.find(r => r.name === "BarceloGettingVerified");
                                message.member.addRole(role).catch(console.error);
                              }, 3000);})
                              })})})}
                              break;
                      case 'verificationdone':
                        if(message.channel.name == undefined)  { return }
                        if(message.channel.name == "bots-talking")  {
                          let spicedsp = message.content.slice(18).split("/");
                          let guild = bot.guilds.get('661271791636971520');
                          if (spicedsp[0] && spicedsp[1] && spicedsp[2]) {
                            USER_ID = spicedsp[0];
                            retrievedata("E" + spicedsp[1]).then(value1 => {
                            if (value1 === USER_ID) {
                            if (guild.member(USER_ID)) {
                              const user1 = bot.fetchUser(USER_ID)
                              const member1 = message.guild.members.get(USER_ID)
                              roblox.getUsernameFromId(spicedsp[2]).then(value => {
                              if (message.guild.members.get(USER_ID).roles.get("695668006923141150")) { return };
                              if (message.guild.members.get(USER_ID).roles.get("695668121842745454")) {
                              const dddd = new Discord.RichEmbed().setTitle("Verification").setAuthor(value).setDescription(`Hello there ! You are trying to be verified with the Roblox username: ${value}. If this was not you please contact support (look at Footer)`).setFooter("If at any point you are stuck please use the bot and ask the question 'Verification'")
                              member1.send(dddd).then(hmmm => {
                                setTimeout(function(){
                                    const dddd = new Discord.RichEmbed().setTitle("Verification").setAuthor(value).setDescription(`You are being verified...`).setFooter("If at any point you are stuck please use the bot and ask the question 'Verification'")
                                    member1.send(dddd).then(hmmmm => {
                                      setdatadata("F" + spicedsp[1], value)
                                      setdatadata("G" + spicedsp[1], spicedsp[2])
                                      setTimeout(function(){
                                        const dddd = new Discord.RichEmbed().setTitle("Verification").setAuthor(value).setDescription(`You have been verified! Do !getroles for your roles!`).setFooter("If at any point you are stuck please use the bot and ask the question 'Verification'")
                                        message.guild.members.get(USER_ID).addRole('695668006923141150').catch(console.error);
                                        message.guild.members.get(USER_ID).removeRole('695668121842745454').catch(console.error);
                                        hmmmm.edit(dddd)
                                      }, 3000);
                                    })
                                  }, 3000);})
                            }})
                          }}})
                        } 
                        } break;
                      case 'overideverify':
                        if (message.member.roles.has("695998308128129286")) {
                        const userrr = message.mentions.users.first();
                        roblox.getUsernameFromId(args[2]).then(value => {
                          retrievedata("B3").then(value1 => {
                            message.channel.send("Adding to Database!")
                            setdatadata("D" + value1, userrr.username)
                            setdatadata("E" + value1, userrr.id)
                            setdatadata("B3", value1 + 1)
                            setdatadata("F" + value1, value)
                            setdatadata("G" + value1, args[2])
                            message.guild.members.get(userrr.id).addRole('695668006923141150').catch(console.error);
                          })
                        })}
                        break;
                      case 'ban':
                        if(message.channel.name == undefined)  { return }
                        if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('You do not have the permission for banning users"  !'); }
                        if (message.mentions.users.size === 0) { return message.channel.send('You need to ping a user !'); }
                        let banMember = message.guild.member(message.mentions.users.first());
                        if (!banMember) { return message.channel.send('User not found!'); }

                                banMember.ban().catch(console.error).then((member) => {
                                    message.channel.send(member.displayName + " has left the server")
                                    message.channel.send(member.displayName + " has been successfully banned by " + message.author);
                                    let warnchannel = bot.channels.get("690496511829737494")
                                    const muteembed = new Discord.RichEmbed()
                                    .setTitle("Someone has been Banned")
                                    .addField("Who?", member.displayName)
                                    .addField("Where?", message.channel.name)
                                    .addField("By who?", message.author.username)
                                    warnchannel.sendMessage(muteembed)
                                    banMember.send("You hav been banned from the server!")
                                })
                      break;
                      case 'kick':
                        if(message.channel.name == undefined)  { return }
                        if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) { return message.channel.send('You do not have the permission for kicking users"  !'); }
                        if (message.mentions.users.size === 0) { return message.channel.send('You need to ping a user !'); }
                        let banMember1 = message.guild.member(message.mentions.users.first());
                        if (!banMember1) { return message.channel.send('User not found!'); }
                        if (banMember1.kickable == false) {return message.channel.send("Not kickable.")}

                                banMember1.kick().catch(console.error).then((member) => {
                                    message.channel.send(member.displayName + " has left the server")
                                    message.channel.send(member.displayName + " has been successfully kicked by " + message.author);
                                    let warnchannel = bot.channels.get("690496511829737494")
                                    const muteembed = new Discord.RichEmbed()
                                    .setTitle("Someone has been kicked")
                                    .addField("Who?", member.displayName)
                                    .addField("Where?", message.channel.name)
                                    .addField("By who?", message.author.username)
                                    warnchannel.sendMessage(muteembed)
                                    banMember1.send("You are being kicked from our server!")
                                })
                      break;
                      case 'warn':
                        if(message.channel.name == undefined)  { return }
                        if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) { return message.channel.send('You do not have the permission for warning users"  !'); }
                        if (message.mentions.users.size === 0) { return message.channel.send('You need to ping a user !'); }
                        let banMember2 = message.guild.member(message.mentions.users.first());
                        if (!banMember2) { return message.channel.send('User not found!'); }
                        if (banMember2.roles.has("696036215098441820")) {
                          banMember2.addRole("696036215614603306").catch(console.error);
                          let warnchannel = bot.channels.get("690496511829737494")
                                    const muteembed = new Discord.RichEmbed()
                                    .setTitle("Someone has been warned")
                                    .addField("Who?", args[1])
                                    .addField("Where?", message.channel.name)
                                    .addField("By who?", message.author.username)
                                    .addField("Warning number?", "2nd")
                                    warnchannel.sendMessage(muteembed)
                                    banMember2.send("You have been warned for your second time! Don't let this happen again because next time it is a kick. 2/3 warnings")
                        } else {
                          if(banMember2.roles.has("696036215614603306")) {
                            let warnchannel = bot.channels.get("690496511829737494")
                                    const muteembed = new Discord.RichEmbed()
                                    .setTitle("Someone has been warned")
                                    .addField("Who?", args[1])
                                    .addField("Where?", message.channel.name)
                                    .addField("By who?", message.author.username)
                                    .addField("Warning number?", "3rd and being kicked")
                                    warnchannel.sendMessage(muteembed)
                                    banMember2.send("You have been warned for your first time! You are being kicked. 3/3 warnings")
                                    banMember2.kick().catch(console.error);
                          } else {
                            banMember2.addRole("696036215098441820").catch(console.error);
                            let warnchannel = bot.channels.get("690496511829737494")
                                    const muteembed = new Discord.RichEmbed()
                                    .setTitle("Someone has been warned")
                                    .addField("Who?", args[1])
                                    .addField("Where?", message.channel.name)
                                    .addField("By who?", message.author.username)
                                    .addField("Warning number?", "1st")
                                    warnchannel.sendMessage(muteembed)
                                    banMember2.send("You have been warned for your first time! Don't let this happen again. 1/3 warnings")
                            
                          }
                        } break;
                      case 'getroles':
                        if(message.channel.name == undefined)  { return }
                        retrievedata("B3").then(value1 => {
                        
                          var helllllpme = 4;
                        do {
                          retrievedata("E" + helllllpme).then(value2 => {
                            retrievedata("G" + helllllpme).then(value22 => {
                            if(value2===message.author.id && value22) {
                              roblox.getRankNameInGroup(GroupId, value22).then(value200 => {
                                roblox.getUsernameFromId(value22).then(value222 => {
                                  var nick = value222 + ' ' + value200  
                                  if(nick.length > 32) {
                                    do {
                                      nick = nick.substring(0, nick.length - 1);
                                      message.member.setNickname(nick)
                                    }
                                    while ((nick).length > 32)
                                  } else {
                                    message.member.setNickname(nick)
                                    return;
                                  }
                                })
                              })
                              helllllpme += 1
                            } else {
                              message.channel.send(helllllpme + ' ' + value1)
                              helllllpme += 1
                            }
                          })
                        })
                        }
                        while (helllllpme >= value1);
                        if(helllllpme < value1+1){
                        message.channel.send("You are not verified... please do !verify")
                        }
                        })
                       break;
                      case 'news':
                        if(message.channel.name == undefined)  { return }
                        message.author.send("Hello and thank for taking your time to read the weekly news at Barcelo! Here is all Versions of magazines\nVersion 1: https://www.flipsnack.com/barcelomagazine/barcelo-newsletter.html\nThat is all newsletter")
                        break;


                      

                        
        
        
        
        
       }
                      
                      
    })


bot.on('error', err => {
  console.log(err)
});

bot.login(token);