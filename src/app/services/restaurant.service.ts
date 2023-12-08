import {Injectable} from '@angular/core';
import {RestaurantDto} from "../models/dto/Restaurant.dto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AddRestaurantFormData} from "../components/restaurant/add-restaurant-form/add-restaurant-from.component";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) {
    this.loadRestaurants();
  }

  public loadRestaurants(): Observable<RestaurantDto[]> {
    return this.httpClient.get<RestaurantDto[]>(`http://localhost:8080/v1/restaurant/`)
  }

  /*public getrestaurantCover(id: number): Observable<UrlDto> {
    return this.httpClient.get<UrlDto>(`http://localhost:8080/restaurants/${id}/cover`);
  }*/

  public addRestaurant(newRestaurantData: AddRestaurantFormData): Observable<RestaurantDto> {
    return this.httpClient.post<RestaurantDto>(`http://localhost:8080/v1/restaurant/`, newRestaurantData);
  }
}
