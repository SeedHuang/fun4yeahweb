module.exports = {
  apps: [
    {
      name: 'fun4yeah',
      cwd: 'C:\\Users\\Administrator\\projects\\fun4yeahweb',
      script: 'yarn',
      args: 'start',
      interpreter: 'cmd.exe',
      interpreterArgs: '/c',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
