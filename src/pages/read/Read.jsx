import { useState } from 'react';
import BarcodeScanner from '../../components/scaner/Scanner';
import axios from 'axios';
import ItemCard from '../../components/itemcard/Item';

const Read = () => {
    const [scannedBarcode, setScannedBarcode] = useState('');
    const [item, setitem] = useState(null);
    const playScanSound = () => {
        const audio = new Audio('/v.mp3'); // Path to the sound file in the public folder
        audio.play();
    };
    const handleScanSuccess = (decodedText) => {
        setScannedBarcode(decodedText);
        getByBarCode(decodedText)
        playScanSound()
        console.log('Scanned Barcode:', decodedText);
        // Add additional logic here (e.g., API calls, navigation, etc.)
    };


    const getByBarCode = async (id) => {
        try {
            await axios.get(`https://daily-api-tan.vercel.app/item/bar/${id}`)
                .then(res => setitem(res.data.result))
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <h1
                onClick={() => handleScanSuccess(6132087000186)}
                className="text-3xl font-bold text-gray-800 mb-8">Barcode Scanner</h1>
            <BarcodeScanner onScanSuccess={handleScanSuccess} />
            {scannedBarcode && (
                <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
                    <p className="text-lg font-medium text-gray-700">
                        Scanned Barcode: <span className="text-blue-600">{scannedBarcode}</span>
                    </p>
                </div>
            )}
            {item && <ItemCard item={item} />}
        </div>
    );
};

export default Read;