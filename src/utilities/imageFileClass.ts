const SRC_PATH = './images/full/';
const OUT_PATH = './images/thumb/';

class ImageFile {
    name: string;
    width: string;
    height: string;
    #srcPath: string;    
    #outPath: string;

    constructor(name: string, width: string, height: string) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.#srcPath = SRC_PATH + this.name + '.jpg';
        this.#outPath = OUT_PATH + this.name + this.width + 'x' + this.height + '.jpg';
              
    }
   
    getOutPath () {
        return this.#outPath;
    }

    getSrcPath () {
        return this.#srcPath;
    }

    getRoutePath() {
        return this.name + this.width + 'x' + this.height + '.jpg';
    }
    

}

export default ImageFile;