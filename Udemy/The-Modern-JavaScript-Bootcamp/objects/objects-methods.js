let restaurant = {
  name: "Twisted Pizza",
  guestCapacity: 20,
  guestCount: 0,
  checkAvailability: function (partySize) {
    return partySize <= this.guestCapacity - this.guestCount;
  },
  seatParty: function (partySize) {
    if (this.checkAvailability(partySize)) {
      this.guestCount += partySize;
      console.log(
        `Adding party of ${partySize}. There are ${this.getCurrentSeatCount()} seats left.`
      );
    } else {
      console.log(
        `Not enough seats for party of ${partySize} as there are only ${this.getCurrentSeatCount()} seats available.`
      );
    }
  },
  removeParty: function (partySize) {
    if (partySize > this.guestCount) {
      this.guestCount = 0;
      console.log(`All ${this.guestCapacity} seats available.`);
    } else {
      this.guestCount -= partySize;
      console.log(
        `Removed party of ${partySize}. There are ${this.getCurrentSeatCount()} seats available now.`
      );
    }
  },
  getCurrentSeatCount: function () {
    return this.guestCapacity - this.guestCount;
  },
};

restaurant.seatParty(4);
restaurant.seatParty(18);
restaurant.seatParty(5);
restaurant.removeParty(5);
restaurant.removeParty(33);
