class Clock {
  constructor() {

    this.date = new Date(); 
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();

    this.time = this.printTime(); 

    this.ticks = setInterval(this.printTime.bind(this), 1000);

  }

  printTime() {
   
    console.log(this.hour, this.minute, this.second); 
    this._tick();
  }

  _tick() {
    this.second++;
    if (this.second === 60){
      this.minute ++;
      this.second = 0;
    }

    if (this.minute === 60) {
      this.hour++;
      this.minute = 0;
    }

    if (this.hour === 24) {
      this.hour = 0;
      
    }

    

  }

 }


const clock = new Clock(); 