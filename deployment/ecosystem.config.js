module.exports = {
  apps: [
    {
      name: "prufai-website",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000 -H 127.0.0.1",
      cwd: __dirname + "/..",
      instances: 1,
      exec_mode: "fork",
      time: true,
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
