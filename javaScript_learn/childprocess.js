let cp=require("child_process");
console.log("trying to open calculator");
cp.execSync(" start open chrome https:\\www.pepcoding.com");
console.log("opeend calculator");