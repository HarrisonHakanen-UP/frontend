import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private http: Http, private url: string) { }

  get(){
    return this.http.get(this.url)
    .pipe(map(res => res.json()));
  }

  post(object){
    return this.http.post(this.url, object)
    .pipe(map(res => res.json()));
  }

  delete(id){
    return this.http.delete(this.url, id)
    .pipe(map(res => res.json()));
  }

  put(object){
    return this.http.put(this.url, object)
    .pipe(map(res => res.json()));
  }

  patch(object){
    return this.http.patch(this.url, object)
    .pipe(map(res => res.json()));
  }
}
