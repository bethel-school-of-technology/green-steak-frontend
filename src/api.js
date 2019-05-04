var axios = require('axios');

module.exports = {
    fetchValues: function(url) {
        var encodedURI = window.encodeURI('http://localhost:3001/api/steakhouses');
        return axios.get(encodedURI)
            .then(response => {
                //console.log('response: ', response)
                //console.log('fetchValues: ', response.data);
                return response.data;
            });
    }
};
