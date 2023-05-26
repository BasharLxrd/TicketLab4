import { TicketCounter } from "./TicketObserver.js";


// Visitor pattern
export class TicketPriceVisitor {
    visit(ticket) {
        console.log(`Ticket price: $${ticket.getPrice()}`);
    }
}

// Mediator pattern
export class TicketMediator {
    constructor() {
        this.ticketCounter = new TicketCounter();
        this.studentEligibilityChecker = new StudentEligibilityChecker();
        this.ticketCounter.addObserver(this.studentEligibilityChecker);
    }

    sellTicket() {
        if (this.ticketCounter.sellTicket()) {
            console.log('Ticket sold!');
        } else {
            console.log('Sorry, no tickets available.');
        }
    }
}

class StudentEligibilityChecker {
    update() {
        if (this.isStudentEligible()) {
            console.log('You are eligible for a student discount.');
        } else {
            console.log('You are not eligible for a student discount.');
        }
    }

    isStudentEligible() {

        return true;
    }
}