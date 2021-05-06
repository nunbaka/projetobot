import Discord, { Message } from "discord.js";
import * as clipes from "./database/clipes.json";
import { exists } from "fs";

const ping = (message : Message) => {
  const timeTaken = Date.now() - message.createdTimestamp;
  message.reply(`Pong! A latência da mensagem é de ${timeTaken}ms.`);
}

const clip = (message : Message) => {
  const keys = Object.keys(clipes)
  const randIndex = Math.floor(Math.random() * keys.length)
  const randKey = keys[randIndex]
  const link = clipes[randKey]
  const clipe = toString(link)
  message.reply(clipe)
}

export {ping, clip}
