const axios = require("axios");

const loginUrl = "http://localhost:3001/v1/user/login";
const userProfileUrl = "http://localhost:3001/v1/user";
const logoutUrl = "http://localhost:3001/v1/user/logout";

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
export const fetchUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      if (!accessJWT) {
        reject("Token not found");
      }
      const response = await axios.get(userProfileUrl, {
        headers: {
          Authorization: accessJWT,
        },
      });
      resolve(response.data);
    } catch (error) {
      reject(error.message);
    }
  });
};

export const userLogout = async () => {
  try {
    const accessJWT = sessionStorage.getItem("accessJWT");
    await axios.delete(logoutUrl, {
      headers: {
        Authorization: accessJWT,
      },
    });
  } catch (error) {}
};
