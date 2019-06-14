window.addEventListener('load', function(){
    let timer1 = new TimeRanges(this.document.querySelector('.time'),10);
    console.log(timer1);
});

class Timer {
    constructor(el, time) {
        this.el = el;
        this.time = time;
        this.interval;

        this.rende();
        this.start();
    }

    start(){
        this.interval = setInterval(this.tick, 1000);
    }
}