# Koa JWT Example

Example auth in koa with jwt - `/login` and every `GET` request is public, the rest is private.

## Usage

First, hash your password (replace `<PLAIN-PASSWORD>`)

```shell
node -e 'console.log(crypto.createHash("sha256").update("<PLAIN-PASSWORD>").digest("base64"))'
```

Then, start application with `SECRET` and `PASSWORD` environment variables

```shell
SECRET=<SECRET> PASSWORD=<PASSWORD> npm start
```

```shell
curl -i -X POST -d password=<PASSWORD> http://localhost:3000/login
curl -i -X POST -H "Authorization: Bearer <TOKEN>" http://localhost:3000/
```
