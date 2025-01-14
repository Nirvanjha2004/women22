import axios from "axios";
const BASE_URL = "https://women2-backend-kizwvlbf5-nirvan-jhas-projects.vercel.app/";

export const publicRequest = axios.create({
  baseURL:BASE_URL,
});

  const user = JSON.parse(localStorage.getItem("persist:root"))?.user; 
  const currentUser = user && JSON.parse(user).currentUser ; 
  const TOKEN=currentUser && currentUser.token  ;
    
  const userRequest = axios.create({
   
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
  })
  
  
 

export default userRequest ;
