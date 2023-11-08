// src/App.js
import React, { useState } from 'react';
import { storage } from '../firebasConfig';

import { ref, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library
import { useUserAuth } from '../Context/UserAuth';
import { collection, addDoc, getDocs, query, where, deleteDoc } from '@firebase/firestore'; // Add missing Firestore imports
import { getFirestore } from 'firebase/firestore';
//ALERT
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EncryptPage() {
  const { user } = useUserAuth();

  const [fileIdToDownload, setFileIdToDownload] = useState('');
  const [fileIdToDelete, setFileIdToDelete] = useState(''); // Add fileIdToDelete state

  const [progress, setProgress] = useState(0);
  const [fileId, setFileId] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const downloadFile = async () => {
    if (fileIdToDownload) {
      // Look for the file with the specified fileId and the user's ID in Firestore
      const firestore = getFirestore();
      const userFileRef = collection(firestore, 'user_files');
      const querySnapshot = await getDocs(
        query(userFileRef, where('userId', '==', user.uid), where('fileId', '==', fileIdToDownload))
      );

      if (querySnapshot.size === 1) {
        // If a matching file is found, download it
        const downloadURL = querySnapshot.docs[0].data().downloadURL;
        toast.success('File Downloaded successfully.');
        window.open(downloadURL, '_blank'); // Open the file in a new tab
      } else {
        toast.error('File not found or unauthorized.'); // File not found or unauthorized access
      }
    } else {
      toast.error('Please enter a valid File ID.');
    }
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;



    // Generate a unique key for the file (e.g., using Firebase's push key generation)
    function generateCustomKey() {
      const timestamp = new Date().getTime(); // Get current timestamp
      const random = Math.floor(Math.random() * 10000); // Generate a random number
    
      // Combine the timestamp and random number to create a custom key
      const customKey = `${timestamp}-${random}`;
    
      return customKey;
    }
    const fileId = generateCustomKey();

    // const fileId = uuidv4();
    setFileId(fileId);
    console.log(fileId)

    const storageRef = ref(storage, `files/${fileId}`);
    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          toast.success('File Uploaded successfully.');
          const firestore = getFirestore();
          const userFileRef = collection(firestore, 'user_files'); // Use collection instead of doc
          addDoc(userFileRef, {
            userId: user.uid, // Replace with the actual user ID
            downloadURL,
            fileId: fileId,
            fileName: file.name,
          });

        });
      }
    );
  };

  const deleteFile = async () => {
    if (fileIdToDelete) {
      const firestore = getFirestore();
      const userFileRef = collection(firestore, 'user_files');
      const q = query(userFileRef, where('userId', '==', user.uid), where('fileId', '==', fileIdToDelete));

      const querySnapshot = await getDocs(q);

      if (querySnapshot.size === 1) {
        const downloadURL = querySnapshot.docs[0].data().downloadURL;

        // Delete the file from storage
        const storageRef = ref(storage, `files/${fileIdToDelete}`);
        await deleteObject(storageRef);

        // Delete the file reference from Firestore
        await deleteDoc(querySnapshot.docs[0].ref);

        toast.success('File deleted successfully.');
      } else {
        toast.error('File not found or unauthorized.');
      }
    } else {
      toast.error('Please enter a valid File ID.');
    }
  };

  const navigate = useNavigate();


  return (

    <div className='bg-gray-100'>
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
      <div className="min-h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg">
          <div className="bg-white shadow-md rounded-lg px-8 py-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Encrypt you Files</h1>

            <div >
              <form onSubmit={formHandler}>
                
                <input
                  type='file'
                />
                <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type='submit'>
                  Upload
                </button>
              </form>

              <div class="flex justify-between mt-2">
                <span class="text-base font-medium text-green-700 dark:text-white">Uploading Done</span>
                <span class=" text-green-700 dark:text-white">{progress}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full mb-2 h-2.5 dark:bg-gray-700">
                <div class="bg-green-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
              {fileId && (
              <div className='mt-2 mb-2'>
                <label>Here is your key keep it safe to download the file</label>
                
                <div className="bg-gray-200 rounded-md py-2 px-4 text-gray-800" >{fileId}</div>
                
              </div>)}
              
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg px-8 py-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Decrypt your File</h1>
            {/* Add password strength checking UI here */}
            {/* You can create a component for this or add the UI directly */}
            <div className="mb-4">
              <h1>Download File</h1>
              <input
                className='p-2 w-100 rounded'
                type="text"
                placeholder="Enter File ID to Download"
                value={fileIdToDownload}
                onChange={(e) => setFileIdToDownload(e.target.value)}
              />
              <button
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ml-2"
                onClick={downloadFile}
              >
                Download
              </button>
              <h1 className='text-red-700 mt-3'>Delete File</h1>
              <input
                type="text"
                placeholder="Enter File ID to Delete"
                value={fileIdToDelete}
                onChange={(e) => setFileIdToDelete(e.target.value)}
                className='p-2 rounded'
              />
              <button
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ml-2"
                onClick={deleteFile}
              >
                Delete
              </button>
            </div>

          </div>
          <div className="bg-white shadow-md rounded-lg px-8 py-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Encrypt your Text</h1>
            {/* Your card content for the first additional card */}
          </div>

          <div className="bg-white shadow-md rounded-lg px-8 py-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Decrypt your Text</h1>
            {/* Your card content for the second additional card */}
          </div>
        </div>


      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default EncryptPage;
