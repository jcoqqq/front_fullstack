import {EvaluationDto} from "./evaluationDto";
export {EvaluationDto} from "./evaluationDto";
import {TagEnum} from "./TagEnum";
import {EvaluationFinaleDto} from "./EvaluationFinaleDto";
export {EvaluationFinaleDto} from "./EvaluationFinaleDto";


export interface RestaurantDto {
  id: number;
  nom: string;
  adresse: string;
  moyenneEvaluation: number;
  evaluationFinale: EvaluationFinaleDto;
  tag: TagEnum;

  evaluations: Array<EvaluationDto>;

}
