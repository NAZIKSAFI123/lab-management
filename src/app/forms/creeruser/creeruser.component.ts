import { Component, OnInit } from '@angular/core';
import { Membre } from '../../models/membre';
import { MembreService } from '../../services/membre.service';

@Component({
  selector: 'app-creeruser',
  templateUrl: './creeruser.component.html',
  styleUrls: ['./creeruser.component.scss']
})
export class CreeruserComponent implements OnInit {
  membreSelectionne = new Membre();  

  constructor(private membreService: MembreService) { }  // Ici, nous injectons MembreService

  ngOnInit(): void {
  }

  ajouterMembre() {
    this.membreService.ajouterMembre(this.membreSelectionne).subscribe(
      data => {
        this.membreSelectionne = new Membre();
      },
      error => {
        console.error('Erreur lors de l\'ajout du membre', error);
      }
    );
  }
  
  annuler() {
    this.membreSelectionne = new Membre();
  }
}
