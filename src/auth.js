var encodedURI = window.encodeURI(process.env.REACT_APP_BACKEND_URL + "user/");
var errorHandler = require("./errorHandler")

module.exports = {
  auth: function() {
    return window
      .axios(encodedURI + "ensure", {
        method: "GET",
        headers: { Authorization: `JWT ${localStorage.getItem("JWT")}` }
      })
      .then(response => {
        return response.data;
      })
      .catch((error) => {return errorHandler.axios(error)})
  },
  signIn: function(formData) {
    return window
      .axios(encodedURI + "login", {
        method: "POST",
        data: formData
      })
      .then(response => {
        return response.data;
      })
      .catch((error) => {return errorHandler.axios(error)})
  },
  signUp: function(formData) {
    return window
      .axios(encodedURI + "register", {
        method: "POST",
        data: formData
      })
      .then(response => {
        return response.data;
      })
      .catch((error) => {return errorHandler.axios(error)})
  }
};
