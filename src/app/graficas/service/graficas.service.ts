import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getUsuarioRedesSociales(): Observable<any> {
    return this._httpClient.get<any>('http://localhost:3000/grafica')
  }

  getUsuarioRedesSocialesConFormato(): Observable<any> {
    return this._httpClient.get<any>('http://localhost:3000/grafica')
      .pipe(
        map((respuesta) => {
          const labels = Object.keys(respuesta);
          const data = Object.values(respuesta);
          return { labels, data }
        })
      )
  }


}
