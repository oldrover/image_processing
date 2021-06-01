import processFile from '../../utilities/imageprocessor';
import ImageFile from '../../utilities/imageFileClass';
import fs from 'fs';

const imageFile = new ImageFile('fjord', '300', '300');

describe('imageprocessor unit test', () => {
  it('should process an image, save it and return true', () => {
    return processFile(imageFile).then((result) => {
      expect(result).toBeTrue();
    });
  });
  it('processed image should be there', () => {
    expect(fs.existsSync(imageFile.getOutPath())).toBeTrue();
  });
});
