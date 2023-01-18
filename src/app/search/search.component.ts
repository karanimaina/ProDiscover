import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit{
    ngOnInit(): void {

    }
    @Output()
    textAdd:EventEmitter<string> = new EventEmitter<string>()

    enteredSearchValue:string =''
    onTextAdd(){
      this.textAdd.emit(this.enteredSearchValue)
    }


}
