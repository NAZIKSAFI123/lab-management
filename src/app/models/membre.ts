import { Laboratoire } from './laboratoire';
import { Projet } from './projet';
import { DotationUcaserch } from './dotation-ucaserch';
import { ExpressionBesoin } from './expression-besoin';

export class Membre {
  id: number;
  nom: string;
  CIN: number;
  role: string;
  labo: string;
  genre: string;
  email: string;
  password: string;
  laboratoire: Laboratoire;
  projets: Projet[];
  dotationsUcaSerch: DotationUcaserch[];
  expressionsBesoin: ExpressionBesoin[];
  constructor();
  constructor(
    id?: number,
    nom?: string,
    CIN?: number,
    role?: string,
    labo?: string,
    genre?: string,
    email?: string,
    password?: string,
    laboratoire?: Laboratoire,
    projets?: Projet[],
    dotationsUcaSerch?: DotationUcaserch[],
    expressionsBesoin?: ExpressionBesoin[]
  ) {
    this.id = id || null;
    this.nom = nom || '';
    this.CIN = CIN || null;
    this.role= role || '';
    this.labo = labo || '';
    this.genre = genre || '';
    this.email = email || '';
    this.password= password || '';
    this.laboratoire = laboratoire || new Laboratoire();
    this.projets = projets || [];
    this.dotationsUcaSerch = dotationsUcaSerch || [];
    this.expressionsBesoin = expressionsBesoin || [];
  }
}

   


 
