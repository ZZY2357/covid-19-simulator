# covid-19-simulator

[![GitHub stars](https://img.shields.io/github/stars/ZZY2357/covid-19-simulator?style=for-the-badge)](https://github.com/ZZY2357/covid-19-simulator/stargazers) [![GitHub forks](https://img.shields.io/github/forks/ZZY2357/covid-19-simulator?style=for-the-badge)](https://github.com/ZZY2357/covid-19-simulator/network) [![GitHub license](https://img.shields.io/github/license/ZZY2357/covid-19-simulator?style=for-the-badge)](https://github.com/ZZY2357/covid-19-simulator/blob/master/LICENSE)

深圳市宝安区海旺学校 周子阳  
参照bilibili.com上的[仿真程序](https://www.bilibili.com/video/av86478875?from=search&seid=5367857792106734282)做出来的Web版的模拟程序  

[码云(Gitee)仓库地址](https://gitee.com/zzy2357/covid-19-simulator/)

## 在线预览

- [Github Pages](https://zzy2357.github.io/covid-19-simulator/)

- [Gitee Pages](http://zzy2357.gitee.io/covid-19-simulator/)

  > Github Pages在国内访问较慢，可以使用Gitee Pages

## 本地运行

本地运行可以通过调整源代码来调整配置

### 建立本地服务器（大佬跳过）

本代码需要通过本地服务器运行

   #### 方法一：使用Python

Python3:

   ```shell
   python -m http.server
   ```

Python2:

   ```shell
   python -m SimpleHTTPServer
   ```

出现提示:

   ```shell
   Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
   ```

打开浏览器访问 http://0.0.0.0:8000/ 就好了

#### 方法二：使用nodejs(npm)

首先，安装`anywhere`:

```shell
npm install -g anywhere
```

然后:

```bash
anywhere 8888 # 端口(8888)可自选
```

这会自动打开浏览器

或打开浏览器访问 http://localhost:8888 就好了

### 修改数据

打开修改`script.js`文件，按照注释修改保存刷新浏览器即可

## 说明

- <font color=#00ff00>⬤</font> 绿点: 健康的人
- <font color=#ff0000>⬤</font> 红点: 被感染者
- <font color=#0000ff>⬤ </font> 蓝点: 正在被隔离的人

> 可在右上方修改数据

### 可修改变量：

| 变量名              |        说明        |
| :------------------ | :----------------: |
| `PEOPLE_AMOUNT`     |        人数        |
| `PROTECT`           | 被感染率（患病率） |
| `BEDS`              |      病床床位      |
| `PEOPLE_SPEED`      |  人群平均移动速度  |
| `INIT_UNHEALTHY`    |  初始被感染者数量  |
| `HAPPY_HEALTHY_DAY` |       康复期       |
| `WIDTH`             |        宽度        |
| `HEIGHT`            |        高度        |
| `POINT_SIZE`        |     圈圈的大小     |

## 声明

- 模拟出来的结果不代表真实结果，请勿信以为真

## 协议

[MIT](https://github.com/ZZY2357/covid-19-simulator/blob/master/LICENSE/)