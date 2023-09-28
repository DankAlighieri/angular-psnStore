import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  gameCover:string = ''
  gameLabel:string = '';
  gameType:string = '';
  gamePrice:string = '';
  private id:string | null = '0';

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {}
}
