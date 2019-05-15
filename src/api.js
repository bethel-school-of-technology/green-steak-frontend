var axios = require('axios');
var encodedURI = window.encodeURI('http://localhost:3001/');


module.exports = {
    fetchValues: function(url) {
        return axios.get(encodedURI + 'api/steakhouses')
            .then(response => {
                //console.log('response: ', response)
                //console.log('fetchValues: ', response.data);
                return response.data;
            });
    },
    fetchReviews: function(steakhouse) {
        if (!steakhouse) {
        
        return axios.get(encodedURI + 'api/reviews/recent')
            .then(response => {
                return response.data;
            });
        }
        return axios.get(encodedURI + 'api/reviews/recent/' + steakhouse)
            .then(response => {
                return response.data;
            });
    }
};
