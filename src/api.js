var axios = require('axios');

module.exports = {
    fetchValues: function(url) {
        var encodedURI = window.encodeURI('http://localhost:3001/');
        return axios.get(encodedURI + 'api/steakhouses')
            .then(response => {
                //console.log('response: ', response)
                //console.log('fetchValues: ', response.data);
                return response.data;
            });
    }
};
