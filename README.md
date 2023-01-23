# Verdaccio Bug

```sh
git clone git@github.com:SimonSiefke/verdaccio-bug.git &&
cd verdaccio-bug &&
npm ci &&
node index.js
```

## Output

```
node:internal/modules/cjs/loader:1039
  const err = new Error(message);
              ^

Error: Cannot find module 'get-port'
Require stack:
- /tmp/verdaccio-bug/node_modules/verdaccio/build/server/registry.js
- /tmp/verdaccio-bug/node_modules/verdaccio/build/server/index.js
- /tmp/verdaccio-bug/node_modules/verdaccio/build/index.js
```
