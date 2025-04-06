npm install -g pm2

### 启动

```
pm2 start ecosystem.config.js
```

### 停止

```
pm2 stop fun4yeah
```

### 关闭所有

```
pm2 delete fun4yeah
```

### nginx启动

```
## 以管理员身份打开powershell
start nginx
```

### 查看nginx是否在运行

```
tasklist /fi "imagename eq nginx.exe"
```

### 关闭nginx所有 任务

```
taskkill /f /im nginx.exe
```
