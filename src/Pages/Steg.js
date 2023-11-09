import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Steg() {
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.getElementById('imageCanvas');
        const ctx = canvas.getContext('2d');
        const textCanvas = document.getElementById('textCanvas');
        const tctx = textCanvas.getContext('2d');

        // Set canvas dimensions to 200x200
        canvas.width = 200;
        canvas.height = 200;
        textCanvas.width = 200;
        textCanvas.height = 200;

        // Clear the textCanvas
        tctx.clearRect(0, 0, textCanvas.width, textCanvas.height);

        // Scale the image to fit within the canvas
        const scale = Math.min(200 / img.width, 200 / img.height);
        const scaledWidth = img.width * scale;
        const scaledHeight = img.height * scale;

        // Center the scaled image
        const x = (200 - scaledWidth) / 2;
        const y = (200 - scaledHeight) / 2;

        // Draw the message on the textCanvas
        tctx.font = '30px Arial';
        const messageText = message || 'Hello';
        tctx.fillText(messageText, 10, 50);

        // Draw the image on the canvas
        ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const textData = tctx.getImageData(0, 0, canvas.width, canvas.height);
        let pixelsInMsg = 0;
        let pixelsOutMsg = 0;

        for (let i = 0; i < textData.data.length; i += 4) {
          if (textData.data[i + 3] !== 0) {
            if (imgData.data[i + 1] % 10 === 7) {
              // Do nothing, we're good
            } else if (imgData.data[i + 1] > 247) {
              imgData.data[i + 1] = 247;
            } else {
              while (imgData.data[i + 1] % 10 !== 7) {
                imgData.data[i + 1]++;
              }
            }
            pixelsInMsg++;
          } else {
            if (imgData.data[i + 1] % 10 === 7) {
              imgData.data[i + 1]--;
            }
            pixelsOutMsg++;
          }
        }

        console.log('pixels within message borders: ' + pixelsInMsg);
        console.log('pixels outside of message borders: ' + pixelsOutMsg);
        ctx.putImageData(imgData, 0, 0);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

 const handleImage2 = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const img = new Image();
    img.onload = () => {
      const decodeCanvas = document.getElementById('imageCanvas2');
      const dctx = decodeCanvas.getContext('2d');

      // Calculate canvas dimensions to fit the image and message
      const maxWidth = 200; // Maximum width you want
      const maxHeight = 200; // Maximum height you want

      let canvasWidth = img.width;
      let canvasHeight = img.height;

      // Check if the image dimensions exceed the maximum dimensions
      if (canvasWidth > maxWidth || canvasHeight > maxHeight) {
        const widthRatio = maxWidth / canvasWidth;
        const heightRatio = maxHeight / canvasHeight;

        // Use the smaller ratio to maintain aspect ratio
        const scale = Math.min(widthRatio, heightRatio);

        // Apply the scaling
        canvasWidth *= scale;
        canvasHeight *= scale;
      }

      // Set canvas dimensions based on calculated dimensions
      decodeCanvas.width = canvasWidth;
      decodeCanvas.height = canvasHeight;

      // Center the image on the canvas
      const x = (canvasWidth - img.width) / 2;
      const y = (canvasHeight - img.height) / 2;

      // Draw the image on the canvas
      dctx.drawImage(img, x, y, img.width, img.height);

      const decodeData = dctx.getImageData(0, 0, decodeCanvas.width, decodeCanvas.height);

      for (let i = 0; i < decodeData.data.length; i += 4) {
        if (decodeData.data[i + 1] % 10 === 7) {
          decodeData.data[i] = 0;
          decodeData.data[i + 1] = 0;
          decodeData.data[i + 2] = 0;
          decodeData.data[i + 3] = 255;
        } else {
          decodeData.data[i + 3] = 0;
        }
      }

      dctx.putImageData(decodeData, 0, 0);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
};


  return (
    <div  className="h-screen flex flex-col bg-gray-100">
      <div className="relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-0 left-5 mt-2 mr-4 flex items-center rounded-full border border-green-500 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 p-2 hover:p-3 hover:font-bold"
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" />
          </svg>
          <span className="ml-2">Go Back</span>
        </button>
      </div>
      
      <div className="container mx-auto p-4">
        <div className="min-h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:w-1/3 p-4">
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Encode an image with a message</h2>
            <label>Enter a message to hide within the image:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your secret message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label className="mt-4">Upload an image:</label>
            <input type="file" onChange={handleImage} />
            <canvas id="imageCanvas"></canvas>
            <canvas style={{display:"none"}} id="textCanvas"></canvas>
          </div>
        </div>

        <div className="lg:w-1/3 p-4 ml-4">
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Decode an image</h2>
            <label>Upload an image:</label>
            <input type="file" onChange={handleImage2} />
            <canvas id="imageCanvas2"></canvas>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Steg;
