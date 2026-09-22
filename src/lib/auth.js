import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { Resend } from "resend";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db();

console.log(process.env.MONGODB_URI);

const resend = new Resend(process.env.RESEND_API_KEY);


export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: { 
             prompt: "select_account", 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET , 
        }, 

        github : {
             prompt: "select_account", 
            clientId : process.env.GITHUB_CLIENT_ID,
            clientSecret : process.env.GITHUB_CLIENT_SECRET ,
        }   
    },
     emailVerification: {
    sendVerificationEmail: ({ user, url }) => {
      void resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: user.email,
        subject: 'Verify your email address',
        html: `Click <a href="${url}">here</a> to verify your email.`,
      });
    },
  },
});