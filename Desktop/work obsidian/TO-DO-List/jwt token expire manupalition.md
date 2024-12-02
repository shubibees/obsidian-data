- example if i want to change the expire of user-permission  plugin
- go to config/plugin
```js
module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwt: {
          expiresIn: '1d',
        },
      },
    },
});
```