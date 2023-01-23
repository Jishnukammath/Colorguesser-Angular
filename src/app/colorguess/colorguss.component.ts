import { Component } from '@angular/core';

@Component({
  selector: 'app-colorguss',
  templateUrl: './colorguss.component.html',
  styleUrls: ['./colorguss.component.css']
})
export class ColorgussComponent {

  constructor() { }
  display = "none"
  ansercolor = ""
  msg = "";
  color = "";
  rgba = ""
  randomcolor = ""
  randomNumber = ""
  randomNumber1 = ""
  randomNumber2 = ""
  color1 = ""
  color2 = ""
  maxVal = 0xFFFFFF;
  randColor = ""
  colochange() {
    this.display = "none"
    this.msg = ""
    this.color = "yellow"
    let randomNumber = Math.random() * this.maxVal;
    let randomNumber1 = Math.random() * this.maxVal;
    let randomNumber2 = Math.random() * this.maxVal;

    this.randomNumber = Math.floor(randomNumber).toString(16);
    this.randomNumber1 = Math.floor(randomNumber1).toString(16);
    this.randomNumber2 = Math.floor(randomNumber2).toString(16);

    this.color = "#" + this.randomNumber
    this.color1 = "#" + this.randomNumber1
    this.color2 = "#" + this.randomNumber2

    let arr = [this.color, this.color2, this.color1];
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    this.randomcolor = item




  }

  firstcolor(colors: any) {


    if (colors == this.randomcolor.toString()) {
      this.display = "block"
      const r = parseInt(this.color.slice(1, 3), 16);
      const g = parseInt(this.color.slice(3, 5), 16);
      const b = parseInt(this.color.slice(5, 7), 16);
      this.rgba = `rgb(${r}, ${g}, ${b})`;
      this.ansercolor = "green"
      this.msg = "correct answer"


    } else {
      this.display = "none"
      this.ansercolor = "red"
      this.msg = "wrong answer"
    }
  }
}
