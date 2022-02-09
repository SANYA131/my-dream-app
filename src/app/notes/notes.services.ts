import { EventEmitter, Injectable } from "@angular/core";
import { Language } from "../shared/language.model";
import { CodingCartService } from "../coding-cart/coding-cart.service";
import { Notes } from "./notes.model";
@Injectable()
export class NotesService{
    notesSelected = new EventEmitter<Notes>();


    private note: Notes[] = [
        new Notes(
            'Front-End Development',
             'Front-end web development, also known as client-side development', 
             'https://www.heliossolutions.co/blog/wp-content/uploads/2016/09/Front-End-Development-Frameworks-for-Faster-Web-Development.jpg',
             [
                 new Language('JavaScript');
                 
             ]
             ),
        new Notes(
            'Back-End Development',
             'Backend Development is also known as server-side development.',
              'https://ddi-dev.com/uploads/backend-is.png',
              [
                
                new Language('GitHub');
            ]
              )
      ];


    getNote(){
        return this.note.slice();
    }
    addLangToCodingCart(languages: Language[]){
        this.ccService.addLanguages(languages);
    }

}