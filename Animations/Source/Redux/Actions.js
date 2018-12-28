const GET_DATA = "GET_DATA";
const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
const GET_DATA_FAILURE = "GET_DATA_FAILURE";

/**
 * On data request
 *
 * @returns Object
 */
const getData = () => {
  return {
    type: GET_DATA
  };
};

/**
 * On data request success
 *
 * @param {*} data
 * @returns Object
 */
const getDataSuccess = data => {
  return {
    type: GET_DATA_SUCCESS,
    data
  };
};

/**
 * On data request failure
 *
 * @returns Object
 */
const getDataFailure = () => {
  return {
    type: GET_DATA_FAILURE
  };
};
///
export { getData, getDataSuccess, getDataFailure };
