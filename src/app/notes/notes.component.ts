import { Component, OnInit } from '@angular/core';
import { Notes } from './notes.model';
import { NotesService } from './notes.services';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NotesService]
})
export class NotesComponent implements OnInit {
  selectedNotes: Notes;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.notesSelected
    .subscribe(
      (notes: Notes)=>{
      this.selectedNotes = notes;
    }
    );
    
  }

}
