import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {

  // code: any;
  jsonData: any;
  // string = '{"name": "John", "age": 30, "city": "New York"}';
  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {
    
  }

  // scan() {
  //   this.barcodeScanner.scan().then(barcodeData => {
  //     this.code = barcodeData.text;
  //     console.log('Barcode data', barcodeData);
  //   }).catch(err => {
  //     console.log('Error', err);
  //   });
  // }

  scanner() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.jsonData = barcodeData.text;
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
