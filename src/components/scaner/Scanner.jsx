import { Component } from 'react';
import BarcodeReader from 'react-barcode-reader';

class BarcodeScanner extends Component {
  handleScan = (data) => {
    if (data) {
      console.log('Barcode scanned:', data);
      // You can add additional logic here, such as updating state or making API calls.
    }
  };

  handleError = (err) => {
    console.error('Barcode scanning error:', err);
  };

  render() {
    return (
      <div>
        <h2>Barcode Scanner</h2>
        <BarcodeReader onError={this.handleError} onScan={this.handleScan} />
      </div>
    );
  }
}

export default BarcodeScanner;
