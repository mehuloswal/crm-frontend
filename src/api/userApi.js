const axios = require("axios");

const loginUrl = "http://localhost:3001/v1/user/login";
const userProfileUrl = "http://localhost:3001/v1/user/";
const logoutUrl = "http://localhost:3001/v1/user/logout";
const newAccessJWT = "http://localhost:3001/v1/tokens";
const userVerificationUrl = userProfileUrl + "verify";

export const userRegistration = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(userProfileUrl, formData);
      resolve(res.data);
      console.log(res);
    } catch (error) {
      reject(error);
    }
  });
};
export const userRegistrationVerification = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.patch(userVerificationUrl, formData);
      resolve(res.data);
      console.log(res);
    } catch (error) {
      reject({ status: "error", message: error.message });
    }
  });
};

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

export const fetchNewAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshJWT } = JSON.parse(localStorage.getItem("CRMWebsite"));
      if (!refreshJWT) {
        reject("Token not found");
      }
      const response = await axios.get(newAccessJWT, {
        headers: {
          Authorization: refreshJWT,
        },
      });

      if (response.data.status === "success") {
        sessionStorage.setItem("accessJWT", response.data.accessJWT);
      }
      resolve(true);
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        localStorage.removeItem("CRMWebsite");
      }
      reject(false);
    }
  });
};
