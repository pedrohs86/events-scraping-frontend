import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiEventModel, ResultsService } from './event-list.service';

@Injectable({ providedIn: 'root'})
export class EventListResolver implements Resolve<Observable<ApiEventModel>>{

    constructor(private service: ResultsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ApiEventModel> {
        const search = route.params['search'];
        return this.service.search(search);
    }

}