import Discord from "discord.js";
import * as dotenv from "dotenv";
import {ping, clip} from "./commands";
dotenv.config();

const client = new Discord.Client();
const prefix = "!"

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const shift = args.shift() !;
  const command = shift.toLowerCase()
  const commands : {[key: string]:typeof ping, clip} = {
    ping,
    clip,
  };
  const res = commands[command];
  res(message)
});                                      

client.login(process.env.BOT_TOKEN)
