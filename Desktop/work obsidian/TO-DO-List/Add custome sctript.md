- adding custom javascript
  - Method 1
    add you script in public folder and then in src/admin/app.js add the given code below
    ```js 
  export default {
  config,
  bootstrap() {
    const script = document.createElement('script');
    script.src = '/custom-nav.js';
    script.async = true;
    document.body.appendChild(script);
  },
};
```
  - Method 2
    