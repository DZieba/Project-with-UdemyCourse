import {Parrot} from './parrot.model';
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs";

export class ParrotsService {
parrotsChanged=new Subject<Parrot[]>();
purl='pimages/parr1.jpg'
  private parrots: Parrot[] = [
    new Parrot(0, 'African Grey','The grey parrot is a medium-sized, predominantly grey, black-billed parrot. Their average weight is 400 grams (0.88 lb), with an average length of 33 centimetres (13 in)[2] and an average wingspan of 46–52 cm.[3] The Congo species is a lighter grey, with darker grey over the head and both wings, while the head and body feathers have a slight white edge to them. The tail feathers are red. The Timneh is a darker gray and has a dark maroon colored tail as well as having a portion of their beak being light pink in color. Due to artificial selection by parrot breeders, some Congo African grey parrots are partially or completely red.[4] Both sexes appear similar.[2] The coloration of juveniles is similar to that of adults, but the eye is typically dark grey to black, in comparison to the yellow irises around dark eyes of the adult birds.[5] The undertail coverts are also tinged with grey.[2] The adults weigh between 418 and 526 grams.[6]' ,'../../../../assets/parr7.jpg'),
    new Parrot(1, 'Ara','These birds can reach a length of 76–86 cm (30–34 in) and weigh 0.900–1.5 kg (2–3 lb), making them some of the larger members of their family. They are vivid in appearance with blue-green wings and tail, dark-blue chin, golden under parts, and a green forehead. Their beaks are black. The naked face is white, turning pink in excited birds, and lined with small, black feathers. Blue-and-yellow macaws live from 30 to 35 years in the wild and reach sexual maturity between the ages of 3 and 6 years.[2]Little variation in plumage is seen across the range. Some birds have a more orange or butterscotch underside color, particularly on the breast. This was often seen in Trinidad birds and others of the Caribbean area. The blue-and-yellow macaw uses its powerful beak for breaking nutshells, and for climbing up and hanging from trees','../../../../assets/parr5.jpg'),
    new Parrot(2, 'Senegal Parrot', 'Senegal parrots are about 23 centimetres (9.1 inches) long, weigh about 120 to 170 grams (4.2 to 6.0 ounces).[2] They have a relatively large head and beak for their overall size, and feathers form a short broad tail. Adults have a charcoal grey head, grey beak, bright yellow irises,[2] green back and throat, and yellow underparts and rump. The yellow and green areas on a Senegal parrots front form a V-shape resembling a yellow vest worn over green. Young Juveniles have dark grey, almost black, irises, which change to light grey.','../../../../assets/parr4.jpg'),
  ];

  getParrots() {
    return this.parrots.slice();

  }

  getParrot(id: number) {
    const parrot = this.parrots.find(
      (p) => {
        return p.id === id;
      }
    );
    return parrot
  }

addParrot(parrot:Parrot){
    this.parrots.push(parrot);
    this.parrotsChanged.next(this.parrots.slice())
  }
  updateParrot(index:number, newParrot:Parrot){
    this.parrots[index]=newParrot;
    this.parrotsChanged.next(this.parrots.slice())
  }
  deleteParrot(index:number){
    this.parrots.splice(index,1);
    this.parrotsChanged.next(this.parrots.slice())
  }
}

