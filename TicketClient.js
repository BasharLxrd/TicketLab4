import { Ticket } from "./Ticket.js";
import { TicketMediator } from "./TicketVisitor.js";
import { TicketPriceVisitor } from "./TicketVisitor.js";
class RegularTicket extends Ticket {
    constructor() {
        super(100);
    }
    newStatePrice() {
        users.array.forEach(element => {
            //send
        });
    }
}

class StudentTicket extends Ticket {
    constructor() {
        super(100);
    }

    newStatePrice() {
        users.array.forEach(element => {
            //send
        });
    }
}









const ticketMediator = new TicketMediator();
const ticketPriceVisitor = new TicketPriceVisitor();

ticketMediator.sellTicket();

ticketPriceVisitor.visit(new RegularTicket());
ticketPriceVisitor.visit(new StudentTicket());
