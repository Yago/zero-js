import { Links, Meta, Outlet } from "@remix-run/react";
import styles from "../styles/globals.css";

export const links = () =>  [{ rel: "stylesheet", href: styles }];

const App = () => {
  return (
    <html lang="fr">
    <head>
      <Meta />
      <Links />
    </head>
    <body>
      <Outlet />
    </body>
    </html>
  );
};

export default App;
