const { diskStorage } = require("multer")

const multer = requrie("multer")
 
const storage  = diskStorage({
    destination : function(req,res,cb){
        cb(null, "uploads/")
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Date.now() + "-" + Math.round.apply(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];
        cb(null , filename + "-" + uniqueSuffix + ".png")
    },
});

exports.upload = multer({storage : storage}) 