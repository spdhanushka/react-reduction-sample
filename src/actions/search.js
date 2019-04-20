import {
  SET_SEARCH,
  SET_SEARCH_DETAILS,
  RESET_SEARCH
} from "../constant";

import axios from 'axios';

export const setSearch = (data) => {
  return (dispatch) => {
    axios.get(`https://api.iextrading.com/1.0/stock/${data}/peers`)
      .then(res => {
        dispatch({
          type: SET_SEARCH,
          data: res.data
        });
        //second api call to get description according to first api
        if (res.data){
          let inputData = res.data;
          inputData.map((inputQuoteData) => (axios.get(`https://api.iextrading.com/1.0/stock/${inputQuoteData}/company`)
            .then(res2 => {
              dispatch({
                type: SET_SEARCH_DETAILS,
                data: res2.data,
                inputQuoteData
              });
            })
            .catch(error => {
              console.log("error: ", error);
            })
          ));    
        }
      })
      .catch(error => {
        dispatch({
          type: RESET_SEARCH,
          data: error
        });
        console.log("error: ", error);
      });    
  };
};
