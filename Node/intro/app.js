import fs from 'fs'
import os from 'os'
import path from 'path'

// console.log(fs);


// console.log(os.userInfo());



fs.readFile("text.txt","utf-8",(err,data)=>{
    console.log(data);
    
})


console.log(path);
