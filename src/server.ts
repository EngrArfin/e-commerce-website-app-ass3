import { error } from "console";
import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

async function main() {

  try{

    await mongoose.connect(config.database_url as string);
 
    app.listen(config.port, () => {
      console.log(`Example Ecommerce App on  port ${config.port}`)
    })
  }catch(err){
    console.log(error) //clg --console loge short key
  }

    
  }

