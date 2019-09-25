import { Component, OnInit, Input } from '@angular/core'
import { Card } from '../app.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

    @Input() card: Card
    @Input() index: number

    title = 'My card title';

    text = 'my sample text';


cardDate: Date = new Date()

    ngOnInit() {

    }
  
    changeTitle() {
        this.card.title = 'Title has benn changed!';
    }
   
    inputHandler(evant:any) {
const value = event.target.value
this.title = value
    }
} 