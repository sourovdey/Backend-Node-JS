// console.log('Hello Programmer')


// ----------BUILDING MODULE: FILE SYSTEM (FS)--{ayscronus}--START----------

// const fs = require("fs")

// write file
// console.log(fs)

// fs.writeFile("members.js", "Sourov, ami",(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log('Done')
//     }
// })

// file update add & add

// fs.appendFile("membersudate.txt", " hello",(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Done");
//     }
// })

// File Rename
// fs.rename("membersudate.txt", "me.txt",(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Rename Done");
//     }
// })

// File Delete
// fs.unlink("membersudate.txt",(error)=>{
//     if(error){
//         console.log("Not Deleted");
//     }else{
//         console.log("Deleted");
//     }
// })

// File Check
// fs.exists("membersudate.txt",(notif)=>{
//     if(notif){
//         console.log("Found");
//     }else{
//         console.log("Not Found");
//     }
// })



// ----------BUILDING MODULE: FILE SYSTEM (FS)--{ayscronus}--END----------



// ----------BUILDING MODULE: FILE SYSTEM (FS)--{scronus}--START----------
const fs = require("fs")
// file write

// let write = fs.writeFileSync("sysMe.txt","Hey☻")
// if(write){
//     console.log(write)
// }else{
//     console.log("Done")
// }

// file update add & add
// let update = fs.appendFileSync("sysMe.txt"," Hello☻")
// if(update){
//     console.log("Error")
// }else{
//     console.log("Done")
// }

// File Rename
// let rename = fs.renameSync("sysMe.txt","MeSys.txt")
// if(rename){
//     console.log("Error")
// }else{
//     console.log("Done")
// }

// File Delete
// let delet = fs.unlinkSync("sysMe.txt")
// if(delet){
//     console.log("Error")
// }else{
//     console.log("Done")
// }

// File Check
let check = fs.existsSync("sysMe.txt")
if(check){
    console.log("Found")
}else{
    console.log("Not Found")
}
// ----------BUILDING MODULE: FILE SYSTEM (FS)--{scronus}--END----------

