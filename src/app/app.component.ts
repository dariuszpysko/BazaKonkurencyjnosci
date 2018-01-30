import {Component} from '@angular/core';
import {DbService} from './db.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private db: DbService, private http: Http) {

//        http.get("/baza_konk/test.php")
//            .toPromise()
//            .then(response => console.log(response.json()))
//            .catch(error => console.log(error));
            
//        http.get("/baza_konk/test.php")
//            .do(response => console.log(response));
          
    }



}
