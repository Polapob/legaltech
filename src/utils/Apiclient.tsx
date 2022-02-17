import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'https://apigw1.bot.or.th/bot/public',
    withCredentials: true,
    
  });