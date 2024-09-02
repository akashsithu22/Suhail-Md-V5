const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="akashsithum90@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb://mongo:Leua9VD8ienGyhpdruHQ@containers.railway.app:5534"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://koyeb-adm:kR0OM6mVATGX@ep-young-hall-a2rojz4x.eu-central-1.pg.koyeb.app/koyebdb"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/da3366bb4fd252566d065.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝐆𝐋𝐎𝐁𝐀𝐋-𝐌𝐃" 


global.devs = "94703562651" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94787732040";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94787732040";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/190e95f4da747140316dc.mp4"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923051391007,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_33_09_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MixcbiAgICAgICAgNjksXG4gICAgICAgIDIxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkyLFxuICAgICAgICA3NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDc3LFxuICAgICAgICA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgODcsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDMzLFxuICAgICAgICA5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDczLFxuICAgICAgICAyNSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTczLFxuICAgICAgICA0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDksXG4gICAgICAgIDIzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDQzLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImtGV1B5c2dqZFlMQmhxMzlTd0orUkFLVHcxK0hjUmloNWJWRFZkUGkxUm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3ODc3MzIwNDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZGMDJGOThCMkI2NDM1RDBBQzZGNkI0Q0M1MDNCMTI5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTI1MTYzMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjLTh4RnhXdVNreUhBREw1QjNyNFZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImRiYmQ5YWEyLWZkOTItNGVjMC1iZTE4LWE3OTRjNDUyZmZhYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDAsXG4gICAgICAyMzEsXG4gICAgICAyMyxcbiAgICAgIDIxNyxcbiAgICAgIDE1MCxcbiAgICAgIDE3NCxcbiAgICAgIDcyLFxuICAgICAgMTY0LFxuICAgICAgMTQxLFxuICAgICAgMTUzLFxuICAgICAgMTI3LFxuICAgICAgMzQsXG4gICAgICAyMDEsXG4gICAgICAxMDEsXG4gICAgICAyMjUsXG4gICAgICAyMTEsXG4gICAgICAxOSxcbiAgICAgIDM2LFxuICAgICAgMTY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDE5MyxcbiAgICAgIDE5LFxuICAgICAgMjUsXG4gICAgICA1NixcbiAgICAgIDE4OSxcbiAgICAgIDUzLFxuICAgICAgMTAwLFxuICAgICAgNDAsXG4gICAgICA5MyxcbiAgICAgIDIyOCxcbiAgICAgIDE3OSxcbiAgICAgIDEyLFxuICAgICAgMjEwLFxuICAgICAgMjE1LFxuICAgICAgNzksXG4gICAgICAyMDIsXG4gICAgICA4LFxuICAgICAgMjQ5LFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjg5RFFSNUNXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NzczMjA0MDo3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI5MTUzNjkzMjQ2MDc6NzZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQWthc2ggU2l0aHVtXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2FEdUE4UXBJRFZ0Z1lZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiYzZDS0N0Umk3dk1YMWJrV3hwVElaZWFnRzFRRmZxOE1ldVBxbEJ4VW5vPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhDMEp1eVhZdmVQY015RHZmNVU5amNBQ1hGVkVVQnF5RE5EUFdCdDdWaFJwdWdJWnkvTjVWQzBidlZjOWZOa3V6cHhDOUoxZWQ4bGtGd2pVaWhKd0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFpbzhFcjV5Nm90OExGZGE1aVdQcDVEQjlGOWFCbFpUZjRyOENlWnl1VFBDZXE1WDh3Um5jRG1GbEV4bWxhWmFIemRoY2c2c1FuRzh4VWxFZzc0dWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzg3NzMyMDQwOjc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTI1MTYyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUc2bVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzZtLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR0NwMEJaMWtqbVFuU1Z6SmhXYWxja2dwMC9rbWdTYTk0UDZ4NEQ4YmxQcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMjM3NTIwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 𝐆𝐋𝐎𝐁𝐀𝐋-𝐌𝐃 』```", //*『 𝗞𝗛𝗔𝗥𝗔𝗟-𝗠𝗗 』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝐆𝐋𝐎𝐁𝐀𝐋-𝐌𝐃",
  ownername:process.env.OWNER_NAME|| "Stranger",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
