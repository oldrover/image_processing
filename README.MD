# **This is an image processing App**

Bby using the API endpoint `localhost:3000/api/images` you can process an image located in the `./images/full` folder into a thumbnail which will be saved in the `./images/thumb` folder.

### How to use: 
Add the filename, desired width and height like:
```
localhost:3000/api/images?filname=fjord&width=300&height=300
```

**filename:** filename of the file located in the /images/full folder without .jpg ending
**width:** desired with of the processed file
**height:** desired height of the processed file