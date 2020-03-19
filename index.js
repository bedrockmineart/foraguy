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
var ssssshouts = false


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
    var interval = setInterval (function () {
      if (ssssshouts === true) {
      var idk697 = fs.readFileSync(`${process.cwd()}/Trainings.txt`, 'utf8');
      if (idk697) {
        fs.readFile('./Trainings.txt', 'utf8', (err, data) => {
        var hhhhh = data.split('\n').length
        hhhhh = Math.round(hhhhh - 1)

        roblox.shout({group: GroupId, message: hhhhh + ' training scheduled! Please join our Dizzy server (below) for more info!'})
        .catch(console.error);
      })} else {
      roblox.shout({group: GroupId, message: 'Sorry everyone, but there is not trainings scheduled.'})
        .catch(console.error);}}
    }, 1800000); 
})

bot.on('ready', () => {
  bot.channels.get("682276634698579982").fetchMessage("682276665115541638").then((message) => {
    var interval = setInterval (function () {
      var idk695 = fs.readFileSync(`${process.cwd()}/Applications.txt`, 'utf8');
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
      message.author.sendMessage('Hello there, Im the official bot for Barcelo and Im here to help. Please choose from one of the following: \n 1 For question or comaplaint! \n 2 for role classes!\n 3 to apply for a Discord role \n (Please react to this dm)').then(sentMessage => {
        sentMessage.react('1️⃣').then(() => sentMessage.react('2️⃣').then(() => sentMessage.react('3️⃣')));

      const filter = (reaction, user) => {
      return ['1️⃣', '2️⃣', '3️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
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



          }
        MessageEvent.author.sendMessage('did not react correctly')
      }}
      })
      .catch(collected => {
        console.log("HE TOOK TO LONG NOT MY PROBLEMO")
      });})
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
        bot.on('message', message => {
          if (message.content.startsWith(code1)) {
            let user123 = message.author;
            const complaint = message.content.slice (4);
            message.author.sendMessage('Your complaint has been submited to the staffing team!')
            const commm = new Discord.RichEmbed()
                        .setColor('#ff0000')
                        .setTitle('New complaint')
                        .setAuthor(botname, logo)
                        .setDescription(complaint)
                        .setTimestamp()
                        .setFooter('Average response it 5-10 minutes');
            bot.channels.get("681558326781149301").send(commm)
            bot.channels.get("681558326781149301").send('From ' + user123)
          }});
        bot.on('message', message => {
          if (message.content.startsWith('642')) {
            let user123 = message.author;
            const com = message.content.slice (4);
            message.author.sendMessage('Your reply has been submited to the staffing team!')
            const repllll = new Discord.RichEmbed()
                        .setColor('#ff0000')
                        .setTitle('Reply to a reply from')
                        .setAuthor(botname, logo)
                        .setDescription(com)
                        .setTimestamp()
                        .setFooter('Average response it 5-10 minutes');
            bot.channels.get("681558326781149301").send(repllll)  
            bot.channels.get("681558326781149301").send('From ' + user123)
          }});




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
              if(message.member.roles.has(admin) || message.member.roles.has("687688446927700011")) {
              message.delete();
              if (!args[1]) return message.reply('Error please define number')
              message.channel.bulkDelete(args[1])
            } else {
              message.channel.sendMessage('badboy') 
            }break;
              case 'talk':
                if(message.channel.name == 'chat-logs')  { return }
                if(message.channel.name == undefined)  { return }
                if(message.member.roles.has(admin) || message.member.roles.has("687688446927700011")) {
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
                          .setDescription(`Hello everyone!\n\nBarcelo Trainings!! \n Are you still awaiting Training? Then come along to this training.\n\nSlocked?\nSlock in 10-15 minutes\n\n\n\n**LINK:**\n\nhttps://www.roblox.com/games/897546096/Barcelo-Training-Center-V1`)
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
                            const trainingaaaa = new Discord.RichEmbed()
                            .setColor('#ff0000')
                            .setTitle('Trainings!')
                            .setAuthor(botname, logo) 
                            .setDescription(`Due to unforseen circumstances the training has been cancelled. :(\nHosted by ${user60}`)
                            .setThumbnail(logo)
                            .setTimestamp()
                            .setFooter('This message will be deleted after 5 minutes. Ended: ');
                        message5.edit(trainingaaaa).then(mesasge6 => {
                          mesasge6.delete(5 * 60 * 1000);
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
                      if(message.channel.name == 'chat-logs')  { return }
                      const user59 = message.guild.members.get(message.author.id).displayName
                      message.channel.sendMessage(user59)
                      break;
                    case 'important':
                      if(message.channel.name == 'chat-logs')  { return }
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
                        if(message.member.roles.has(admin)) {
                        var mention = message.mentions.users.first();
                        const lol1 = args[1].length;
                        if (mention == null) { return; }
                        const user54 = message.author.username
                        message.delete();
                        mentionMessage = message.content.slice (7 + lol1);
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
                      if(message.member.roles.has("676206157815218177")) {
                            const msg = message;
                              ShoutMessage = message.content.slice(7)
                              if (ShoutMessage) {
                                roblox.shout({group: GroupId, message: ShoutMessage})
                                message.channel.sendMessage('Sucessfully shouted to the Group!\n\nMessage: `' + ShoutMessage + '`');
                              }} break;
                      case 'promote':
                        if(message.channel.name == 'chat-logs')  { return }
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
                        var Talll = ':Managingdirector:'
                        if (message.guild.members.get(message.author.id).displayName == 'TallBobber123') { Talll = '<:Managingdirector:649745201849696297>'} else {
                        if (message.guild.members.get(message.author.id).displayName == 'xXMonkey_ChapXx') { Talll = ':director:'} else 
                         { Talll = '<:soontm:230340006219087873>'}}
                        var idk699 = fs.readFileSync(`${process.cwd()}/Trainings.txt`, 'utf8');
                        fs.writeFileSync(`${process.cwd()}/Trainings.txt`, (idk699 + `\n${(args[1])}` + ' at ' + (args[2]) + `. Hosted by ${message.guild.members.get(message.author.id).displayName}.`))
                        message.channel.sendMessage('Scheduled!')
                        }break;
                      case 'clear-schedule':
                        if(message.channel.name == 'chat-logs')  { return }
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has(admin)) {
                        var Talll = ':Managingdirector:'
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
                      case 'open-app':
                        if(message.channel.name == 'chat-logs')  { return }
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has("676206157815218177")) {
                          var idk699 = fs.readFileSync(`${process.cwd()}/Applications.txt`, 'utf8');
                          fs.writeFileSync(`${process.cwd()}/Applications.txt`, (idk699 + `\n` + '**OPEN APPLICATION** For' + (args[1]) + `. Opened by ${message.guild.members.get(message.author.id).displayName}.\nLink:\`\`\`${args[2]}\`\`\``))
                          message.channel.sendMessage('Opended!')
                          }break;
                      case 'clear-apps':
                        if(message.channel.name == 'chat-logs')  { return }
                        if(message.channel.name == undefined)  { return }
                        if(message.member.roles.has("676206157815218177")) {
                        var Talll = ':Managingdirector:'
                        fs.writeFileSync(`${process.cwd()}/Applications.txt`, '')
                        message.channel.sendMessage('Cleared apps!')
                        }break;
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
                        } break;
                      case 'uptime':
                        message.channel.sendMessage('The bots uptime is **' + timeonline + '**s!')
                        break;

                        
        
        
        
        
       }
                      
                      
    })

bot.on('error', err => {
  console.log(err)
});

bot.login(token);