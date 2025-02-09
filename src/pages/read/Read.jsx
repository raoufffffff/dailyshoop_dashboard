import { useState } from 'react';
import BarcodeScanner from '../../components/scaner/Scanner';

const Read = () => {
    const [scannedBarcode, setScannedBarcode] = useState('');

    const handleScanSuccess = (decodedText) => {
        setScannedBarcode(decodedText);
        // You can add additional logic here to handle the scanned barcode
    };

    return (
        <div className="Read">
            <h1>Barcode Scanner</h1>
            <BarcodeScanner onScanSuccess={handleScanSuccess} />
            <p>Scanned Barcode: {scannedBarcode}</p>
        </div>
    );
};

export default Read;