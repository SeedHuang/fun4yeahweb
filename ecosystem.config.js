module.exports = {
  apps: [
    {
      name: 'fun4yeah',
      cwd: 'C:\\Users\\Administrator\\projects\\fun4yeahweb',
      script: 'yarn',
      args: 'start -- --host 0.0.0.0',
      interpreter: 'cmd.exe',
      interpreterArgs: '/c',
      exec_mode: 'fork', // 强制单进程模式
      instances: 1, // 仅启动一个实例
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
