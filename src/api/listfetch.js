import axios from "axios";

// List Delete 기능

export const deleteFoodList = async _id => {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/list/${_id}/meal`);
    const result = res.data;
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteHealthList = async _id => {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/list/${_id}/hel`);
    const result = res.data;
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
