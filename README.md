mutilroom
=====================

##### mutilroom, 其中包含了

* 上传开发环境静态服务器
* base64 静态图片文件

## 如何安装 ##

#### 安装前提

##### nodejs & npm

* nodejs版本需大于 8.2.0
* npm版本需要大于 4.1.0

#### 安装

    npm install mutilroom -g

### 使用

    mutilroom {命令名}


### 基本命令

* upload: '上传文件到cdn'
* base64: 'base64图片'

### upload命令有关参数说明

```bash
# 新增了 --out 参数，即将输出结果存储到当前目录的output.log文件中。
mutilroom upload <filename|filePath> <uploadDir> [option,'--no-md5'] [option,'--out']
```
