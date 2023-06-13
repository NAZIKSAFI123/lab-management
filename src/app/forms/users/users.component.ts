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
  
  modificationEffectuee = false; // Variable pour contrôler l'affichage de l'alerte
  messageModification = ''; 
  membres: Membre[];
  membreSelectionne: Membre | null; // Ajouter cette ligne

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

  // Ajoutez cette méthode
  ouvrirPopupModifier(membre: Membre) {
    this.membreSelectionne = membre;
  }
  

  enregistrerModifications() {
    this.membreService.modifierMembre(this.membreSelectionne).subscribe(
      data => {
        this.modificationEffectuee = true;
        this.messageModification = 'La modification a été effectuée avec succès.';
        this.membreSelectionne = new Membre();
      },
      error => {
        console.error('Erreur lors de la modification du membre', error);
      }
    );
  }
annulerModifications() {
  // Réinitialisez le membreSelectionne à null (ou à l'original si vous le conservez)
  this.membreSelectionne = null;
}


  
 
}
