const axios = require("axios");

const loginUrl = "http://localhost:3001/v1/user/login";
export const userLogin = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(loginUrl, formData);
      resolve(response.data);
      if (response.data.status === "success") {
        sessionStorage.setItem("accessJWT", response.data.accessJWT);
        localStorage.setItem(
          "CRMWebsite",
          JSON.stringify({ refreshJWT: response.data.refreshJWT })
        );
      }
    } catch (error) {
      reject(error);
    }
  });
};
