import { Component, OnInit, Input } from '@angular/core';
import { Notes } from '../notes.model';
import { NotesService } from '../notes.services';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.css']
})
export class NotesDetailComponent implements OnInit {
  @Input() notes: Notes;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }
  onAddToCodingCart(){
    this.notesService.addLangToCodingCart(this.notes.languages);
  }

}
