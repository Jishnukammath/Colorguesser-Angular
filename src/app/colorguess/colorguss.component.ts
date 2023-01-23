import { Component } from '@angular/core';

@Component({
  selector: 'app-colorguss',
  templateUrl: './colorguss.component.html',
  styleUrls: ['./colorguss.component.css']
})
export class ColorgussComponent {

constructor(){}
color="";
rgba=""
randomNumber=""
maxVal = 0xFFFFFF; 
randColor=""
colochange(){
this.color="yellow"
let randomNumber = Math.random() * this.maxVal; 
randomNumber = Math.floor(randomNumber);
this.randomNumber = randomNumber.toString(16);
this.randColor = this.randomNumber.padStart(6);  
this.color="#"+this.randColor.toString()


const r = parseInt(this.color.slice(1, 3), 16);
const g = parseInt(this.color.slice(3, 5), 16);
const b = parseInt(this.color.slice(5, 7), 16);
this.rgba=`rgb(${r}, ${g}, ${b})`;




}
}
