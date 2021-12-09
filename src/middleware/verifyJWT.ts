import express from "express";
import jwt from "jsonwebtoken";
import { login } from "../models/user";
import dotenv from "dotenv";

console.log(process.env.DATABASE_URL);
dotenv.config();  

export function verifyJWT(req: express.Request,res: express.Response,next: express.NextFunction) {
  let token = <string>req.headers["authorization"];

  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided." });

  try {
    res.locals.jwtPayload = <any>jwt.verify(token.split(" ")[1], process.env.SECRET||'123456');
    next();
  } catch (error) {
    return res.status(500).json({ auth: false, message: "Failed to authenticate token." });
  }
}

export async function loginJWT(request: express.Request,response: express.Response,next: express.NextFunction) {
  if (request.body.email && request.body.password){
    let user: object | null  = await login(request.body.email, request.body.password);
    if(user){
      const token = jwt.sign({ user:user }, process.env.SECRET||'123456', {expiresIn: 300});
      return response.json({ auth: true, token: token, user: user });
    }
  }
  return response.status(500).json({ message: "Login inválido!" , request: request.body});
}

