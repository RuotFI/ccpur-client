export const getCroppedImg = (imageSrc, croppedAreaPixels, outputWidth = 500, outputHeight = 80) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  
        // Set the desired output dimensions
        canvas.width = outputWidth;
        canvas.height = outputHeight;
  
        // Scale the cropped image to fit the desired output size
        ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          outputWidth,
          outputHeight
        );
  
        // Convert the canvas to a blob
        canvas.toBlob(
          (blob) => {
            const croppedImage = URL.createObjectURL(blob);
            resolve(croppedImage);
          },
          "image/jpeg",
          1
        );
      };
  
      image.onerror = (error) => reject(error);
    });
  };
  