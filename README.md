# Koa JWT Example

Example auth in koa with jwt - `/login` and every `GET` request is public, the rest is private.

## Usage

```shell
SECRET=some-secret PASSWORD=some-password node index.js
```

```shell
curl -i -X POST -d password=some-password http://localhost:3000/login
curl -i -X POST -H "Authorization: Bearer <TOKEN>" http://localhost:3000/
```
