import axios from "axios";
const rootUrl = "http://localhost:3001/v1/";
const otpReqUrl = rootUrl + "user/reset-password";
export const reqPassOtp = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(otpReqUrl, { email });

      console.log(result.data);
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};
export const updateUserPassword = (passObj) => {
  console.log(passObj);
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(otpReqUrl, passObj);

      console.log(result);
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};
