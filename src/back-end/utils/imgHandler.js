import multer from 'multer'



  
const upload = multer({ 
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            var url = req.originalUrl;
            if(url.includes('item'))
            {
                cb(null, './db/Item');
            }
            else if (url.includes('promotion'))
            {
                cb(null, './db/Promotion_files');
            }
            else if (url.includes('slider'))
            {
                cb(null, './db/Slider_files');
            }
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
    // fileFilter: (req, file, cb) =>
    // {
    //     const fileType = ['jpg', 'png', 'jpeg', 'gif'];
    //     var extension = file.mimetype;
    //     console.log(extension);
    //     if (extension.includes('image'))
    //     {
    //         cb(null, true);
    //     }
    //     else {
    //         cb(null, false);
    //         cb(new Error('Unknow file extension'));
    //     }

    // }
})

export {upload};



