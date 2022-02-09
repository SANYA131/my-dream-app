import { Component, Input, OnInit } from '@angular/core';
import { Notes } from '../../notes.model';


@Component({
  selector: 'app-notes-item',
  templateUrl: './notes-item.component.html',
  styleUrls: ['./notes-item.component.css']
})
export class NotesItemComponent implements OnInit {
  @Input notes: Notes[];
  @Input index : number
 


  constructor(private notesService: NotesService) { }

  ngOnInit(){
  }
  onSelected() {
    this.note = this.notesService.getNote();
  }
}
