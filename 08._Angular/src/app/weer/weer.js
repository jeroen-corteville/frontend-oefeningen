function Locatie(name, woeid) {
    this.name = name;
    this.woeid = woeid;
}

Locatie.prototype = {
    get Name() { return this.name;},
    get Woeid() { return this.woeid; },
    set Name(v) { this.name = v },
    set Woeid(v) {this.woeid = v}
}

function Weer(description, maxT, minT, date,day) {
    this.description = description;
    this.maxT = maxT;
    this.minT = minT;
    this.date = date;
    this.day = day;
}

Weer.prototype = {
    get Description() { return this.description },
    get MaxT() { return this.maxT },
    get MinT() { return this.minT },
    get Date() {return this.date},
    get Day() {return this.day}
}