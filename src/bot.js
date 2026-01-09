import { Client, GatewayIntentBits, Collection } from 'discord.js';

export default function createBot() {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers
    ]
  });

  client.commands = new Collection();

  return client;
}
