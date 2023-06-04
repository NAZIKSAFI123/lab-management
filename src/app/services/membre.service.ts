import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Membre } from '../models/membre';
import { HttpClientModule } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class MembreService {
  private baseUrl = 'http://localhost:8030'; 

  

  constructor(private http: HttpClient) { }
  


  membreSelectionne: Membre;
  ajouterMembre(membre: Membre): Observable<Membre> {
    const url = `${this.baseUrl}/membres`;
    return this.http.post<Membre>(url, membre);
  }

  supprimerMembre(id: number): Observable<void> {
    const url = `${this.baseUrl}/membres/${id}`;
    return this.http.delete<void>(url);
  }

  getAllMembres(): Observable<Membre[]> {
    const url = `${this.baseUrl}/membres`;
    return this.http.get<Membre[]>(url);
  }
}
