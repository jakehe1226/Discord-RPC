// If you need any help and support in this. DM me me: Jake He#9816 or join my discord server: dsc.gg/jakesnation. Happy to help 😉.

const clientId = "client id here";
const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: "ipc" });

DiscordRPC.register(clientId);

async function setActivity() {
  if (!RPC) return;
  RPC.setActivity({
    details: `Description here`,
    state: `State here`,
    startTimestamp: Date.now(),
    largeImageKey: "icon here",
    largeImageText: `the description when dragging the mouse over the icon`,
    smallImageKey: `icon here`,
    smallImageText: `the description when dragging the mouse over the icon`,
    instance: false,
    buttons: [
      {
        label: `button 1 text`,
        url: `button 1 link`,
      },
      {
        label: `button 2 text`,
        url: `button 2 link`,
      },
    ],
  });
}

RPC.on("ready", async () => {
  setActivity();
});

RPC.login({ clientId }).catch((err) => console.error(err));
