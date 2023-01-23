import { Component } from '@angular/core';

@Component({
  selector: 'app-colorguss',
  templateUrl: './colorguss.component.html',
  styleUrls: ['./colorguss.component.css']
})
export class ColorgussComponent {

constructor(){}
ansercolor=""
msg="";
color="";
rgba=""
randomNumber=""
randomNumber1=""
randomNumber2=""
color1=""
color2=""
maxVal = 0xFFFFFF; 
randColor=""
colochange(){
  this.msg=""
this.color="yellow"
let randomNumber = Math.random() * this.maxVal; 
let randomNumber1 = Math.random() * this.maxVal; 
let randomNumber2 = Math.random() * this.maxVal; 

this.randomNumber = Math.floor(randomNumber).toString(16);
this.randomNumber1 = Math.floor(randomNumber1).toString(16);
this.randomNumber2 = Math.floor(randomNumber2).toString(16);

this.color="#"+this.randomNumber
this.color1="#"+this.randomNumber1
this.color2="#"+this.randomNumber2





const r = parseInt(this.color.slice(1, 3), 16);
const g = parseInt(this.color.slice(3, 5), 16);
const b = parseInt(this.color.slice(5, 7), 16);
this.rgba=`rgb(${r}, ${g}, ${b})`;

 

}

firstcolor(colors:any){
  console.log(colors)
  console.log(this.color)

if (colors==this.color.toString()){
  this.ansercolor="green"
  this.msg="currect anser"

}else{
  this.ansercolor="red"
this.msg="wrong anser"
}
}
}
