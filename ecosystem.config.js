module.exports = {
  apps: [
    {
      name: 'fun4yeah',
      cwd: 'C:\\Users\\Administrator\\projects\\fun4yeahweb',
      script: 'yarn',
      args: 'start', // 移除参数分隔符 `--`
      interpreter: 'cmd.exe',
      interpreterArgs: '/c',
      exec_mode: 'fork', // 强制单进程模式避免冲突‌:ml-citation{ref="8" data="citationList"}
      instances: 1,
      max_restarts: 1,
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0', // 显式定义环境变量替代参数传递‌:ml-citation{ref="5" data="citationList"}
        PORT: 3000,
      },
    },
  ],
};
