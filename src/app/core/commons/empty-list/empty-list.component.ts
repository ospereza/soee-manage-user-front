import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-empty-list',
  templateUrl: './empty-list.component.html',
  styleUrls: ['./empty-list.component.scss']
})
export class EmptyListComponent implements OnInit {

  @Input()
  message = 'No hay elementos para mostrar';

  @Input()
  icon = 'list';

  constructor() {
  }

  ngOnInit(): void {
  }

}