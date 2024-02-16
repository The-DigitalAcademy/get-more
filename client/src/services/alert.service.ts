// Import necessary modules
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  // Method to show an alert
  showAlert(message: string, alertType: string = 'info'): void {
    // You can use different alert types based on your design or requirements
    // For simplicity, this example uses a basic console.log
    console.log(`[${alertType.toUpperCase()}] ${message}`);
  }
}