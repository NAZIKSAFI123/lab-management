import { Component, OnInit } from '@angular/core';
import { Membre } from '../../models/membre';
import { MembreService } from '../../services/membre.service';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  membres: Membre[];

  constructor(private membreService: MembreService) { }

  ngOnInit(): void {
    this.getAllMembres();
  }

  getAllMembres(): void {
    this.membreService.getAllMembres().subscribe(
      membres => {
        this.membres = membres;
      },
      error => {
        console.log('Une erreur', error);
      }
    );
  }


  supprimerMembre(id: number): void {
    this.membreService.supprimerMembre(id).subscribe(
      () => {
        // Suppression réussie, mettre à jour la liste des membres
        this.getAllMembres();
      },
      error => {
        console.log('Une erreur :', error);
      }
    );
  }
  
}
