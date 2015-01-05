function Parking(name, description, totalCapacity, availableCapacity) {
    this.name = name;
    this.description = description;
    this.totalCapacity = totalCapacity;
    this.availableCapacity = availableCapacity;
}

Parking.prototype = {
    get Name() {return this.name},
    get Description() {return this.description},
    get TotalCapacity() {return this.totalCapacity},
    get AvailableCapacity() {return this.availableCapacity}
}