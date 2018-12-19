const GET_DATA = "GET_DATA";
const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
const GET_DATA_FAILURE = "GET_DATA_FAILURE";

const getData = () => {
  return {
    type: GET_DATA
  };
};

const getDataSuccess = data => {
  return {
    type: GET_DATA_SUCCESS,
    data
  };
};

const getDataFailure = () => {
  return {
    type: GET_DATA_FAILURE
  };
};
export { getData, getDataSuccess, getDataFailure };
