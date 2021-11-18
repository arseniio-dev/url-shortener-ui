import axios from "axios";
import { API_CONSTANTS } from "../API/api.constants";

export default axios.create({
  baseURL: API_CONSTANTS.serverUrl,
});
