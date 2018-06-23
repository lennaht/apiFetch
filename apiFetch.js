class ApiFetch {
    /**
     * @param {string} baseUrl Base URL of API endpoint, will be extended by hitting different routes with fetch functions 
     */
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    /**
     * @param {string} urlExtension Path for the route, has to begin with '/' (if baseUrl doesn't have '/' at the end)
     * @param {Object} options Options for the fetch api, can overwerite default settings
     */
    get(urlExtension = '', options = {}) {
         const url = String(this.baseUrl) + String(urlExtension);
         const promise = fetch(url, {
             method: 'GET',
             mode: 'cors',
             ...options // Add new options / overwrite default options
         })

         return promise;
    }

    post(urlExtension, data, options) {

    }
}