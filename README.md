*This super lightweight API adds a more comfortable abstraction layer to the JavaScript fetch-API*

**API usage**
```js
const api = new ApiFetch('https://example.com:8000');

api.get('/getUsers', { id: '09543270' })
    .then(res => res.json())
    .then(console.log)
    .catch(console.log)
;
```