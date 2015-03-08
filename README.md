# githubtopcontributors_module
---

Module that queries the GitHub API and retrieves the "top 10" contributors in JSON format.

Installation
---

This project is available as a
[NPM package](https://www.npmjs.org/package/githubtopcontributors_module).

To install with NPM, run the command:

```bash
$ npm install githubtopcontributors_module
```

Usage
---
In your project, include the module:

```js
var mod = require('githubtopcontributors_module');
```

Call the `get()` function passing in the parameters `repository_url`, `oauth_token`, and `github_username`. Note the function returns a Promise, so format it like so:

```js
mod.get(repository_url, oauth_token, github_username)
    .then(function (value) {
        //do stuff here
    });
```

And voila. To see it in action, a full site integrated with GitHub authentication is available for download at: [GitHub](https://github.com/stanleyta/githubtopcontributors). Download and unpack the source to a local directory, download dependencies using `npm install`, and run the server with `npm start`. Fire up your web browser, and navigate to [localhost:3001](localhost:3001).

Running Tests
---

Install `mocha` globally.

```bash
npm install -g mocha
```

Navigate to the project folder and run `npm install` to install the
project's dependencies.

Then simply run the tests.

```bash
mocha
```
or
```
npm test
```

License
---

Licensed under [MIT](https://github.com/stanleyta/githubtopcontributors_module/blob/master/LICENSE).
