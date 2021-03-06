import { Injectable } from '@angular/core';
import { Route, PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomStrategy implements PreloadingStrategy {

    preload(route: Route, load: Function): Observable<any> {
      return route.data && route.data.preload === false ? of(null) : load();
    }
}
