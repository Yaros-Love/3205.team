import { ActionCreator } from "./action";
import axios from 'axios';

export const fetchRates = () => {
  return async (dispatch) => {
    const response = await axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
    console.log(response.data);
    dispatch(ActionCreator.loadCurrentRates(response.data))
  }
}