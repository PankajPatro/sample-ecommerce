import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { CartQuery } from '../services/cart-state/cart.query';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  cartCount$: Observable<number> | undefined;
  page: string = "";

  constructor(private cartQuery: CartQuery, private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartCount$ = this.cartQuery.count$;
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)
    ,map(() => this.activatedRoute)
    ,map((route) => {
      while (route.firstChild) route = route.firstChild;
      return route;
    })
    ,filter((route) => route.outlet === 'primary')
    ,mergeMap((route) => route.url))
    .subscribe((event:UrlSegment[]) => this.page = event[0].path);
  }

  navigateToCart(){
    this.router.navigateByUrl("cart");
  }
}
