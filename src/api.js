var encodedURI = window.encodeURI(process.env.REACT_APP_BACKEND_URL + "api/");

module.exports = {
  fetchValues: function(url) {
    return window
      .axios(encodedURI + "steakhouses", { method: "GET" })
      .then(response => {
        //console.log('response: ', response)
        //console.log('fetchValues: ', response.data);
        return response.data;
      });
  },
  fetchReviews: function(steakhouse) {
    if (!steakhouse) {
      return window
        .axios(encodedURI + "reviews/recent", { method: "GET" })
        .then(response => {
          return response.data;
        });
    }
    return window
      .axios(encodedURI + "reviews/recent/" + steakhouse, { method: "GET" })
      .then(response => {
        return response.data;
      });
  },
  submitReview: function(formData, steakhouse) {
    return window
      .axios(encodedURI + "reviews/submit", {
        method: "POST",
        data: {
          comment: formData.comment,
          ratePrice: formData.ratePrice,
          rateQuality: formData.rateQuality,
          identifier: steakhouse
        },
        headers: {
          Authorization: `JWT ${localStorage.getItem("JWT")}`
        }
      })
      .then(response => {
        return response.data;
      });
  }
};
