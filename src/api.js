var encodedURI = window.encodeURI(process.env.REACT_APP_BACKEND_URL + "api/");
var errorHandler = require("./errorHandler")

module.exports = {
  fetchValues: function(url) {
    return window
      .axios(encodedURI + "steakhouses", { method: "GET" })
      .then(response => {
        return response.data;
      })
      .catch((error) => {return errorHandler.axios(error)})
  },
  fetchReviews: function(steakhouse) {
    if (!steakhouse) {
      return window
        .axios(encodedURI + "reviews/recent", { method: "GET" })
        .then(response => {
          return response.data;
        })
        .catch((error) => {return errorHandler.axios(error)})
    }
    return window
      .axios(encodedURI + "reviews/recent/" + steakhouse, { method: "GET" })
      .then(response => {
        return response.data;
      })
      .catch((error) => errorHandler.axios(error))

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
      })
      .catch((error) => {return errorHandler.axios(error)})

  }
};
