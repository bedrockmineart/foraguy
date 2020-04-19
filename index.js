const Discord = require('discord.js');
let roblox = require('noblox.js');
const bot = new Discord.Client();
const fs = require("fs");
var Trello = require("trello");
var trello = new Trello("3709a62fa07a769db9f65c152c64be65", "e31a09ac4e17aa55b6c8851f7351f481fe9bd6596a848de92af4f2edc989cb11");


const token = require('./config.json').token
const botname = require('./config.json').Botname1
const PREFIX = require('./config.json').preefix
const logo = require('./config.json').Logoo;
let GroupId = 3049111; 
var cookie = require('./config.json').Cookie11
const admin = "681250688008716464"
var timeonline = 0


bot.on('ready', () => {
  var interval = setInterval (function () {
    timeonline += 1
  }, 1 * 1000);
})



roblox.cookieLogin(cookie).catch(() => {console.log("Sorry, it failed.");});

bot.on('ready', () => {
    bot.user.setActivity("Test bot! By bedrock!")
})

bot.on('ready', () => {
    console.log('We are online')
})
bot.on('message', message => {
  if(message.channel.name === 'purchased'){
    //if(message.author.username === 'UnderT Test') { return };
    message.embeds.forEach((embed) => {
      if(embed) {
        if(embed.fields) {
          if(embed.fields[0].name === 'User id' && embed.fields[1].name === 'User name' && embed.fields[2].name === 'Product'){
            message.channel.send(`Fields: ${embed.fields[0].value} ${embed.fields[1].value} ${embed.fields[2].value}`)
            if(embed.fields[2].value === 'Ground Crew Signals (Animated)') {
              trello.addCard(embed.fields[0].value, embed.fields[0].value, "5e7cbc8fa531eb46a1ead5e9",
              function (error, trelloCard) {
                  if (error) {
                      console.log('Could not add card:', error);
                  }
                  else {
                      console.log('Added card:', trelloCard);
                  }
              });
            } else {
              if(embed.fields[2].value === 'Baggage Loader'){
                rello.addCard(embed.fields[0].value, embed.fields[0].value, "5e7cbc75326d6039685ed70a",
              function (error, trelloCard) {
                  if (error) {
                      console.log('Could not add card:', error);
                  }
                  else {
                      console.log('Added card:', trelloCard);
                  }
              });
              } else {
                if(embed.fields[2].value === 'Fuel Truck'){
                  rello.addCard(embed.fields[0].value, embed.fields[0].value, "5e9aeabf487ed98ac1d036b9",
              function (error, trelloCard) {
                  if (error) {
                      console.log('Could not add card:', error);
                  }
                  else {
                      console.log('Added card:', trelloCard);
                  }
              });

                }else{
                  if(embed.fields[2].value === 'Baggage Truck'){
                    rello.addCard(embed.fields[0].value, embed.fields[0].value, "5e96003fa07e4361ca0efe7f",
              function (error, trelloCard) {
                  if (error) {
                      console.log('Could not add card:', error);
                  }
                  else {
                      console.log('Added card:', trelloCard);
                  }
              });

                  }
                }
              }
            }
          }
        }  
      }
   });
  }
})


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
              .setDescription('Time')
              .setTimestamp()
              message.channel.sendMessage(time);
              break;
             case 'delete':
              if(message.channel.name == 'chat-logs')  { return }
              if(message.channel.name == undefined)  { return }
              if(message.member.hasPermission("ADMINISTRATOR")) {
              message.delete();
              if (!args[1]) {
                message.reply('Error please define number')
                return
              }
              message.channel.bulkDelete(args[1])
            } else {
              message.channel.sendMessage('Sorry you cannot do that here.') 
            }break;
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
                      message.channel.sendMessage("The group is owned by Under!")
                    }} break;
            case 'uptime':
                        message.channel.sendMessage('The bots uptime is **' + timeonline + '**s!')
                        break;
                      case 'help':
                        if (!args[1]) {
                          message.channel.send("```Please do !help and choose one of these to go after:\nhelp\nuptime\nfact\nping```")
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
                        case 'pretend':
                          const test = new Discord.RichEmbed()
                          .addField("User id", "1227743496")
                          .addField("User name", "RogerJWillams")
                          .addField("Product", "Ground Crew Signals (Animated)")
                          message.channel.send(test)
                      

                      

                        
        
        
        
        
       }
                      
                      
    })


bot.on('error', err => {
  console.log(err)
});

bot.login(token);