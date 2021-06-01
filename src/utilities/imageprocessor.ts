import fs from 'fs';
import sharp from 'sharp';
import ImageFile from './imageFileClass';

const processFile = async (imageFile: ImageFile): Promise<boolean> => {
  let check = false;

  if (!fs.existsSync('./images/thumb')) fs.mkdirSync('./images/thumb');

  await sharp(imageFile.getSrcPath())
    .resize(parseInt(imageFile.width), parseInt(imageFile.height))
    .toFile(imageFile.getOutPath())
    .then(() => (check = true))
    .catch(() => (check = false));

  return check;
};

export default processFile;
