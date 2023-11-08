import React, { useState } from 'react';

const ImageDecoder = () => {
  const [imageURL, setImageURL] = useState('');
  const [decodedMessage, setDecodedMessage] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageURL(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const decodeImage = () => {
    if (imageURL) {
      const img = new Image();
      img.src = imageURL;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let message = '';

        // Extract the message from the pixel data (assuming white text on black background)
        for (let i = 0; i < data.length; i += 4) {
          if (data[i] === 255 && data[i + 1] === 255 && data[i + 2] === 255) {
            // Assuming white color (255, 255, 255) represents the encoded message
            const character = String.fromCharCode(data[i + 3]);
            message += character;
          }
        }

        // Set the decoded message in the state
        setDecodedMessage(message);
      };
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <br />
      <button onClick={decodeImage}>Decode Image</button>
      <br />
      {decodedMessage && <div>Decoded Message: {decodedMessage}</div>}
    </div>
  );
};

export default ImageDecoder;
