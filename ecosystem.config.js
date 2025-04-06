module.exports = {
  apps: [
    {
      name: 'fun4yeah',
      cwd: 'C:\\Users\\Administrator\\projects\\fun4yeahweb',
      script: 'yarn',
      args: 'start -- --host 0.0.0.0',
      interpreter: 'cmd.exe',
      interpreterArgs: '/c',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
