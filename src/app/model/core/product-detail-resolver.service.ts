import { Injectable } from '@angular/core';
import {Product} from '../product.model';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {ProductRepositoryService} from './product-repository.service';
import {EMPTY, Observable, of} from 'rxjs';
import {delay, mergeMap, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolverService implements Resolve<Product> {
  constructor(private repository: ProductRepositoryService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    return this.repository.getProduct(route.paramMap.get('id'))
      .pipe(
        take(1),
        mergeMap(product => {
          if (product) {
            return of(product).pipe(delay( 1000 ));
          } else {
            this.router.navigate(['/store']);
            return EMPTY;
          }
        })
    );
  }
}
