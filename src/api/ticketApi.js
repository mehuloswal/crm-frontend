import axios from "axios";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1laHVsb3N3YWwyMUBnbWFpbC5jb20iLCJpYXQiOjE2MjM4NjEzMzcsImV4cCI6MTYyMzg2MjIzN30.tz9xG4reyXjkfPcwdU4QfhaqS3VHk2dWhgj8Pa-uvGg",
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
