import { useRef, useEffect, useState } from 'react';
import Quagga from 'quagga';

const BarcodeScanner = () => {
    const scannerRef = useRef(null);
    const [mycode, setcode] = useState("zbi")
    useEffect(() => {
        if (scannerRef.current) {
            // Initialize Quagga with your configuration
            Quagga.init(
                {
                    inputStream: {
                        name: 'Live',
                        type: 'LiveStream',
                        target: scannerRef.current,
                        constraints: {
                            width: 640,
                            height: 480,
                            facingMode: 'environment', // Use the rear camera if available
                        },
                    },
                    decoder: {
                        // List the barcode types you expect to scan. For example:
                        readers: [
                            'code_128_reader',
                            'ean_reader',
                            'ean_8_reader',
                            'upc_reader',
                            'upc_e_reader',
                        ],
                    },
                },
                (err) => {
                    if (err) {
                        console.error('Quagga initialization failed:', err);
                        return;
                    }
                    console.log('Quagga initialization finished. Starting scanner...');
                    Quagga.start();
                }
            );

            // Set up a listener for detected barcodes
            Quagga.onDetected((result) => {
                const code = result?.codeResult?.code;
                if (code) {
                    setcode(code)
                    console.log('Barcode detected:', code);
                    // You can add additional logic here, e.g., stop scanning once a barcode is found:
                    // Quagga.stop();
                }
            });
        }

        // Cleanup: stop the scanner when the component unmounts
        return () => {
            Quagga.stop();
        };
    }, []);

    return (
        <div>
            <h2>Barcode Scanner</h2>
            <div
                ref={scannerRef}
                style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}
            />
            {mycode}
        </div>
    );
};

export default BarcodeScanner;
