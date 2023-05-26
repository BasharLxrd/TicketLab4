
// Observer pattern
export class TicketSubject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update());
    }
}

export class TicketCounter extends TicketSubject {
    constructor() {
        super();
        this.availableTickets = 10;
    }

    getAvailableTickets() {
        return this.availableTickets;
    }

    sellTicket() {
        if (this.availableTickets > 0) {
            this.availableTickets--;
            this.notifyObservers();
            return true;
        }
        return false;
    }
}