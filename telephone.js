
class Telephone {
  constructor() {
    this.phoneNumbers = [] 
    this.observers = []
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((item) => item !== observer)
  }

  notify(number) {
    this.observers.forEach(item => {
      this.observers.update(number)
    })
  }

  addNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber)
  }

  removeNumber(phoneNumber) {
    this.phoneNumbers = this.phoneNumbers.filter((number) => number !== phoneNumber)
  }

  dialNumber(phoneNumber) {
    this.phoneNumbers.includes(phoneNumber) ? 
    console.log(`Dialing ${phoneNumber}`)
    :
    console.log(`Phone number not in Contacts`)
  }
}


class PrintObserver {
  update(number) {
    console.log(`Phone number: ${number}`);
  }
}

class DialingObserver {
  update(number) {
    console.log(`Now Dialing ${number}`);
  }
}

// Example usage:
const telephone = new Telephone();

const observer1 = new PrintObserver();
const observer2 = new DialingObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addNumber("08148223650");
telephone.addNumber("08123456789");

telephone.dialNumber("08123456789");
telephone.removeNumber("08123456789")
telephone.dialNumber("08123456789");