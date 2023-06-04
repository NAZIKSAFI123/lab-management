import { Laboratoire } from './laboratoire';
import { Projet } from './projet';
import { DotationUcaserch } from './dotation-ucaserch';
import { ExpressionBesoin } from './expression-besoin';
export class Membre {
  id: number;
  nom: string;
  CIN: number;
  etab: string;
  role: string;
  labo: string;
  laboratoire: Laboratoire;
  projets: Projet[];
  dotationsUcaSerch: DotationUcaserch[];
  expressionsBesoin: ExpressionBesoin[];

  constructor(
    id: number,
    nom: string,
    CIN: number,
    etab: string,
    role: string,
    labo: string,
    laboratoire: Laboratoire,
    projets: Projet[],
    dotationsUcaSerch: DotationUcaserch[],
    expressionsBesoin: ExpressionBesoin[]
  ) {
    this.id = id;
    this.nom = nom;
    this.CIN = CIN;
    this.etab = etab;
    this.role = role;
    this.labo = labo;
    this.laboratoire = laboratoire;
    this.projets = projets;
    this.dotationsUcaSerch = dotationsUcaSerch;
    this.expressionsBesoin = expressionsBesoin;
  }



}
