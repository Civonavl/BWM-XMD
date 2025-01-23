const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5WVW4+qSBDHv0u/6qxyR5NJFhEUb4ggKpt9aKC5yZ0GhRO/+4ZxJmey57KzPHWa7qp/Vf2q+htIs7BCa9SC6TeQl2EDMeqXuM0RmIJZ7XmoBEPgQgzBFFwW7VFLLOSyuFsfttddszzyNBEXRO7P+NUcbddQvSyL1dh/BY8hyGs7Dp3fGEyYTcf6FFVtpNN1oUTGeUvcOnkg1HSDVsrOgXQa4fXZJKVX8OgtwrAMU1/KA5SgEsZr1O5hWH5NPlxeUmHr+fmRlM8zFd70cLyj7qw9GRijJK7vyBlwrMvwsvA1+SnqEqOE/mXp0PpdS+0T1q1Cq+mWJ6y5pldLexQYkgXn7/Kr0E+Rq7goxSFuv5x3ViJbQ5ppp9qrNqfLiCz4c6vujPPmnJLwcBmX7cmPk3W5vHxNuGTjtojjbmdloYrCHVK7DUfXahApLM0VRDSiBpvzMRNM/rPwffnByvX/5N1X7KBeymlx0q+16RyLmaEwcyIyrPHOo2hPNgvNMq/ELHW+Jp++rKT2vM0XO4spgh2dVHKcIMHUb7MoKnl7wTS1z53n/u2TfIjr8ncqq+B0Z3WiPahiorTKIaCjdrAmOaNNwgE/y/bFwSAv+ua6swZugU5Osxdoab8IOPnSiXWzg8d7TqC5nm3U81ZuFCk3ff/1LaIrahUXTInHEJTIDytcQhxm6dvemBsC6DY6ckqE39ILRI8WucG4uzjruqnjsBL9psnm7upUbtSRdxvDlAqrYutm21cwBHmZOaiqkLsMK5yV7RZVFfRRBaZ/vVWqD7pESYbRKnTBFJAMy9EENWGJMfdn9cctgLiCef5HijAYAq/Mki0CU1zWaAjeLogSwdHzCc2JokxLjMgIFEVOOIYVaZqVx2QfYvJ0aoQJqjBMcjAlOIpjSWJMUY+/hyBFd/zkp4+aIobAC8sKH9M6jzPofsD18RM6TlanWG9TR+wXqATTT9sI4zD1qz6yOoWlE4QNEvs4wNSDcYUeQ+CiJnRQbw+0S/NwCKzVoSs4T1tOJCtGltBnLsjS5xHKmXgORTIvJInGL7TN2C88NWZf2AlDejbkecrhQZ+OZ+v2d35JUrCgqUsXrSbRuVIyzTf0TRZL3gQH2hsNTwRQidyPLNvQuda5kV1R+jtCmXO2nzCQ17JCNrl5mRlcQ0yyrsfgX2iB6bfv41LM3N7e0pRI67DSQV+t3s8PNEzJH3lIYX8YKKawU01F7B29V6E34SIMw7jqIdnsK9+hF9Iq4u/cbbEQFF8Q/T7NH1X76MIn5Wf/ZFsB1RzzbFDa41HHpupKN7m42UziroFR1KRXa3YgdeH1J0bAFOwImV35eHVWk5rjXdEcZbhrzb2qrZqtwRamODc3MitmFDHiyyjSZnGgUhp766jJVbFkfBb9K6HutOV9rZRJdI+W5Ex47b096fnsrL6Ulr1Ut81sPW5k/7Te7rPWjSuaIcVuzsTyiN1t5C21Li8jPZ8XzCpXYlbV2oaWLY7xbDPY8vuTO3HgwBi01zRu60h4zoe3+RS/vwvhe+c+WfNC9DZm38vwX9X6Tv34Mfxk4n1u/4KsmUnLCXlxOWIN9wU52fODvAuPMWLsdmQ5HJnRHMMstKN79cGjb+c8htjLyqTHMrEhGIIYVlj43rU/GQQkPwRJK+S5jiH+aHYg9J/YteDxD5NgWsaPCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

