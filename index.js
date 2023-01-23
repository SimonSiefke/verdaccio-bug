import { runServer } from "verdaccio";

export const start = async () => {
  const verdaccioConfiguration = {
    self_path: "./",
    port: 4873, // default
    max_body_size: `1000mb`,
    web: {
      enable: true,
      title: `test`,
    },
    packages: {
      "**": {
        access: `$all`,
        publish: `$all`,
        proxy: `npmjs`,
      },
    },
    uplinks: {
      npmjs: {
        url: `https://registry.npmjs.org/`,
        max_fails: 10,
      },
    },
    log: {
      type: "stdout",
      format: "pretty",
      level: "http",
    },
  };

  const app = await runServer(verdaccioConfiguration);
  await new Promise((resolve) => {
    app.listen(4873, (event) => {
      resolve(undefined);
    });
  });
};
