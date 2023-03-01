import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon('lupa', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/lupa.svg'));
      iconRegistry.addSvgIcon('redirect', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/redirect.svg'));
    }

    ngOnInit(): void {
      this.router.events
          .pipe(filter(event => event instanceof NavigationEnd))
          .pipe(map(() => this.activatedRoute))
          .pipe(map(route => {
            while (route.firstChild) {route = route.firstChild;}
            return route;
          }))
          .pipe(switchMap(route => route.data))
          .subscribe(event => this.titleService.setTitle(!!event['title'] ? event['title'] : 'EvenLook'));
    }
}
