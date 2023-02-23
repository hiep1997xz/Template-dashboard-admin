import axios from 'axios'
import React from 'react'
import downloadfile from '../../assets/file-txt/downloadfile.txt'

const DownloadFile = () => {
  const handleDownload_axios = () => {
    axios({
      url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/172905/test.pdf', //your url
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'file.pdf') //or any other extension
      document.body.appendChild(link)
      link.click()
    })
  }

  const handleDownload_fetch = () => {
    fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/172905/test.pdf', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  })
  .then((response) => response.blob())
  .then((blob) => {
    // Create blob link to download
    const url = window.URL.createObjectURL(
      new Blob([blob]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `FileName.pdf`,
    );
    // Append to html link element page
    document.body.appendChild(link);
    // Start download
    link.click();
    // Clean up and remove the link
    link.parentNode.removeChild(link);
  });
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="mb-4">
        <button
          onClick={() => handleDownload_axios()}
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Download_1
        </button>
      </div>
      <div className="mb-4">
        <button onClick={() => handleDownload_fetch()} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Download_1
        </button>
      </div>
      <a
        href={downloadfile}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline">
        link
      </a>
    </div>
  )
}

export default DownloadFile
