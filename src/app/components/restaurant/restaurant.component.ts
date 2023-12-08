import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RestaurantService} from "../../services/restaurant.service";
import {RestaurantDto} from "../../models/dto/Restaurant.dto";
import {restaurantDisplayComponent} from "./restaurant-display/restaurant-display.component";
import {AddRestaurantFormData, AddRestaurantFromComponent} from "./add-restaurant-form/add-restaurant-from.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, restaurantDisplayComponent, AddRestaurantFromComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class restaurantComponent implements OnInit {

  public restaurants: RestaurantDto[] = [];

  constructor(private readonly restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.refreshRestaurants();
  }

  public refreshRestaurants() {
    this.restaurantService.loadRestaurants().subscribe(value => {
      this.restaurants = value;
      //this.restaurants.forEach(restaurant => this.getCover(restaurant));
    })
  }

  /*public getCover(restaurant: EvaluationDto): void {
    this.restaurantService.getrestaurantCover(restaurant.id).subscribe(urlDto => {
      restaurant.coverUrl = urlDto.url;
    });
  }*/

  public onRestaurantSubmitted(newRestaurantData: AddRestaurantFormData): void {
    this.restaurantService.addRestaurant(newRestaurantData).subscribe(value => {
      this.restaurants.push(value);
      //this.getCover(value);
    })
  }

}
