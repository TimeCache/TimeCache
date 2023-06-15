// // import React, { useCallback } from 'react';
// // import { useDropzone } from 'react-dropzone';
// import '../styles/dropzone.css';

// const UploadPage: React.FC = () => {
//   const onDrop = useCallback((acceptedFiles) => {
//     // Do something with the files
//     acceptedFiles.forEach((file: File) => {
//       const reader = new FileReader();

//       reader.onabort = () => console.log('file reading was aborted');
//       reader.onerror = () => console.log('file reading has failed');
//       reader.onload = () => {
//         // Do somewithing with the file contents
//         const binaryStr = reader.result;
//         console.log(binaryStr);
//       };
//       reader.readAsArrayBuffer(file);
//     });
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   return (
//     <div className="container">
        
//       <div {...getRootProps()} className="dropzone">
//         <input {...getInputProps()} />
//         {
//             isDragActive ?
//             <p>Drop the files here ...</p> :
//             <p>Drag 'n' drop some files here, or click to select files</p>
//         }
//       </div>
//     </div>
//   );
// };

// // export default UploadPage;
