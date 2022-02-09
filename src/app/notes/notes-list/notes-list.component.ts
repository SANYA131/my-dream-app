import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Notes } from '../notes.model';
import { NotesService } from '../notes.services';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  @Output() notesWasSelected = new EventEmitter<Notes>();
  note: Notes[];

  constructor(private notesService: NotesService,
              private router: Router,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.note = this.notesService.getNote();
  }

  onNotesSelected(notes: Notes) {
   this.notesWasSelected.emit(notes);
  }
  onNewNotes() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
