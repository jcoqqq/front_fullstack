import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RestaurantDto} from "../../../models/dto/Restaurant.dto";

@Component({
  selector: 'app-restaurant-display',
  standalone: true,
    imports: [CommonModule, NgOptimizedImage],
  templateUrl: './restaurant-display.component.html',
  styleUrl: './restaurant-display.component.css'
})
export class restaurantDisplayComponent {

  @Input() restaurants: RestaurantDto[] = [];

}
