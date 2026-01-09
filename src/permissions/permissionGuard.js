import { ROLE_LEVEL, ROLE_IDS } from './roleLevels.js';

export function requireLevel(requiredLevel) {
  return async (interaction) => {
    if (!interaction.inGuild()) return false;

    const roles = interaction.member.roles.cache;

    let userLevel = 0;

    if (roles.has(ROLE_IDS.admin)) userLevel = ROLE_LEVEL.admin;
    else if (roles.has(ROLE_IDS.manager)) userLevel = ROLE_LEVEL.manager;
    else if (roles.has(ROLE_IDS.member)) userLevel = ROLE_LEVEL.member;

    return userLevel >= requiredLevel;
  };
}
