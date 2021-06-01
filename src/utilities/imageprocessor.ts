/* eslint-disable @typescript-eslint/ban-types */
import express from 'express';
import fs from 'fs';
import sharp from 'sharp';
import ImageFile from './imageFileClass';

const imageprocessing = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  if (!req.query.filename || !req.query.width || !req.query.height) {
    !req.query.filename
      ? res.send('Please add an image filename')
      : !req.query.width
      ? res.send('Please add a width value')
      : res.send('Please add a height value');
  } else {
    const imageFile = new ImageFile(
      req.query.filename as string,
      req.query.width as string,
      req.query.height as string
    );

    if (fs.existsSync(imageFile.getOutPath())) {
      res.send(`<img src=../thumb/${imageFile.getRoutePath()}>`);
    } else {
      if (fs.existsSync(imageFile.getSrcPath())) {
        if (await processFile(imageFile)) {
          res.send(`<img src=../thumb/${imageFile.getRoutePath()}>`);
        } else {
          res.send('Error occured while processing the image!');
        }
      } else {
        console.log(`requested file not found ${imageFile.getSrcPath()}`);
        res.send('file not found');
      }
    }
  }
  next();
};

const processFile = async (imageFile: ImageFile): Promise<boolean> => {
  let check = false;

  await sharp(imageFile.getSrcPath())
    .resize(parseInt(imageFile.width), parseInt(imageFile.height))
    .toFile(imageFile.getOutPath())
    .then(() => (check = true))
    .catch(() => (check = false));

  return check;
};

export default { imageprocessing, processFile };
