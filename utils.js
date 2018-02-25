import {isUser} from "./services/user";
import process from "process";
import Router from "next/router";

export const loginRequired = async (req, res, props = {}) => {
  console.log('loginReq')
  let user;
  // if we're on the server
  if (!process.browser) {
    if (!!req.user) {
      console.log('got a user', req.user);
      user =  req.user;
    } else {
      res.redirect('/login');
    }
  } else {
    //client-side
    let response = await isUser();
    if (response) {
      user = response.user;
    } else {
      Router.push('/login')
    }
  }
  // return user and any props given...
  return Object.assign({}, {user}, props);

};