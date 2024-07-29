import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productOptions = ['Pencil', 'Eraser', 'Pens'];
  quantities = [0, 1, 2, 3, 4, 5];
  products = [
    { name: '', quantity: null }
  ];
  orderVisible = false;
  order: { name: string; quantity: number | null }[] = [];

  addProduct(index: number) {
    if (this.products[index].name && this.products[index].quantity !== null) {
      if (index === this.products.length - 1 && this.products.length < 8) {
        this.products.push({ name: '', quantity: null });
      }
    } else {
      alert('Please select both product and quantity');
    }
  }

  showOrder() {
    this.order = this.products.filter(p => p.name && p.quantity !== null);
    this.orderVisible = true;
  }

  async readOrder() {
    const text = this.order.map(p => `${p.name} ${p.quantity}`).join(', ');
    try {
      const response = await axios.get('https://rapidapi.com/voicerss/api/text-to-speech-1/', {
        params: { key: 'a703b669add74e7ab7f860ed1ce12441', hl: 'en-us', src: text }
      });
      const audio = new Audio(response.data);
      audio.play();
    } catch (error) {
      console.error('Error with text-to-speech API', error);
    }
  }
}
