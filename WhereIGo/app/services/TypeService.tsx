import axios from "axios";
import { env } from "../enviroments/enviroments";
import { create } from 'apisauce';

const api  = create({
  baseURL: 'http://localhost:8080', 

})
export default api; 

