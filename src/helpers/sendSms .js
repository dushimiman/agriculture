import dotenv from "dotenv";
import {application} from "express";

dotenv.config();
const client = require ("twilio")(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_ID
);
const sendSms=(
    userName,
    productName,
    orderId,
    userPhone)=>{
        client.messages.create({body:"Mukiriya mwiza" +userName+ "ibyo mwaguze" +productName+"mwamaze kwishyura" +orderId+ "refId"+orderId,from:"+12543473164", to:userPhone})
        .then((message)=>console.log(message.sid))
    };
    export default sendSms;
