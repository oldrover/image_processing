import express from 'express';
import fs, { PathLike } from 'fs';
import sharp from 'sharp';
import ImageFile from './imageFileClass';


const imageprocessing = (
    req: express.Request, 
    res: express.Response, 
    next: Function): void => {
        
    if(!req.query.filename || !req.query.width || !req.query.height) {        
        !req.query.filename ? res.send("Please add an image filename") 
        : !req.query.width ? res.send("Please add a width value")
        : res.send("Please add a height value")
        
    }      
    else {
        const imageFile = new ImageFile(req.query.filename as string, 
            req.query.width as string, 
            req.query.height as string);


        if(fs.existsSync(imageFile.getSrcPath())) {
            if(processFile(imageFile)) {                                        
                    //res.redirect('/thumb/' + req.query.filename + '.jpg');
                    res.send(`<img src=../thumb/${imageFile.getRoutePath()}>`);
                }
                else{                    
                    res.send("Error occured")

                }

        }          
        else {
            console.log(`requested file not found ${imageFile.getSrcPath()}`)
            res.send('file not found');

        }              
    }   
    
    next();
}

const processFile = async (imageFile: ImageFile): Promise<boolean> => {

    let check: boolean = false;
        
    await sharp(imageFile.getSrcPath())
        .resize(parseInt(imageFile.width), parseInt(imageFile.height))
        .toFile(imageFile.getOutPath())         
        .then(()=> check = true)
        .catch(()=> check = false)  

    return check;
};

export default imageprocessing;