import Discord, { Message } from "discord.js";

const ping = (message : Message) => {
  const timeTaken = Date.now() - message.createdTimestamp;
  message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
}

export {ping}
