class ApiFetch {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    get(urlExtension = '', options = {}) {
         const url = String(this.baseUrl) + String(urlExtension);
         const promise = fetch(url, {
             method: 'GET',
             mode: 'cors',
             ...options // Add new options / overwrite default options
         })

         return promise.json();
    }

    post(urlExtension, data, options) {

    }
}