import { initBotId } from "botid/client/core";

// Declare the routes BotID should protect. Runs on the client (Next 15.3+).
initBotId({
  protect: [{ path: "/api/waitlist", method: "POST" }],
});
