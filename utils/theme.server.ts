import { createCookieSessionStorage } from "@remix-run/node";

import { Theme } from "./theme-provider";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("Please set the SESSION_SECRET environment variable");
}

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "__theme",
    secure: true,
    secrets: [sessionSecret],
    path: "/",
    sameSite: "lax",
    httpOnly: true,
  },
});

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));

  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return Theme(themeValue) ? themeValue : null;
    },
    setTheme: (theme: Theme) => {
      session.set("theme", theme);
    },
    commit: async (theme: Theme) => {
      return await themeStorage.commitSession(session);
    },
  };
}
