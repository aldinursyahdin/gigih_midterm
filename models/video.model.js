const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const videoSchema = new Schema(
        {
            UrlImageThumbnail: { 
                type: String,
                required:true,
            },

        }, {
        timestamps: true,
    }
    );


   
module.exports = mongoose.model("Video", videoSchema);
