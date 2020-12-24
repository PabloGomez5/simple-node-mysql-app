## simple-node-mysql

### Based on

https://time2hack.com/creating-rest-api-in-node-js-with-express-and-mysql/

### Install

```bash
npm init -Y
npm i -S express 
npm i -S mysql
npm i -S js-yaml
```

### Set config

Create a config.yml as below:

```yaml
---
  port: 80

  mysql_host:
  mysql_user:
  mysql_password:
  mysql_database:

```

### Run

```bash
node server.js
```
