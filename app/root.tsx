import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "~/styles/app.css";
import clsx from "clsx";
import { ThemeProvider, useTheme } from "utils/theme-provider";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
    {
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
      rel: "stylesheet",
    },
  ];
};
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Rasel personal portfolio",
  viewport: "width=device-width,initial-scale=1",
});

function App() {
  const [theme] = useTheme();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={clsx(theme)}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
