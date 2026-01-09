import 'dotenv/config';

export default {
  token: process.env.TOKEN,

  roles: {
    admin: 'ROLE_ID_ADMIN',
    manager: 'ROLE_ID_MANAGER',
    member: 'ROLE_ID_MEMBER'
  }
};
