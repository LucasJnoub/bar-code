'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const BarcodeScanner = () => {
  const [decodedText, setDecodedText] = useState('');
  const scannerRef = useRef(null);

  useEffect(() => {
    const onScanSuccess = (decodedText, decodedResult) => {
      console.log(`Code matched = ${decodedText}`, decodedResult);
      setDecodedText(decodedText);
      const audioElement = document.getElementById('notificationSound');
      if (audioElement) {
        audioElement.play();
      }
    };

    const onScanFailure = (error) => {
      console.warn(`Code scan error = ${error}`);
    };

    scannerRef.current = new Html5QrcodeScanner(
      'reader',
      // { fps: 10, qrbox: 300 },
      false,
    );

    scannerRef.current.render(onScanSuccess, onScanFailure);

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div id="reader" className="w-80 h-80 mx-auto mb-4"></div>
      <audio id="notificationSound">
        <source
          src="/Beep.mp3"
          type="audio/mpeg"
        />
      </audio>

      {decodedText && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{decodedText}</span>
        </div>
      )}
    </div>
  );
};

export default BarcodeScanner;
