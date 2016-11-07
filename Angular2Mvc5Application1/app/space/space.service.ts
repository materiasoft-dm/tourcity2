import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Space }           from './space.model';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpaceService {
    private url = '/api/space/';  // URL to web API
    constructor(private http: Http) { }

    getSpace(id : number): Observable<Space> {
        return this.http.get(this.url + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateSpace(space: Space): Observable<Space> {
        let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(space);
        return this.http.put(this.url + space.Id, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }


    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
