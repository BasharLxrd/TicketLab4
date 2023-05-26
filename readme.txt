acest cod se bazeaza pe vanzarea biletelor, deci ne trebuie un sistem care verifica disponabilitatea si alte chestii
in acest code a fost implementat si logica de discount pentru studentii
totul a fost scris folosind Behavioral Design Pattern

deci avem mai multe clase, cum ar fi Ticket simplu dar si ticket de student, dar pentru a obtine un ticket de student
trebuie sa fie eligibil, iar si pentru asta a fost implementata o lofica de control
clasa de baza ticket este un state pattern care permite schimbare starii in dependeta de obiectivul necesar al biletului

a fost folosit si un observer pattern care permite si adayga notificare la schimbarea starii
visitor pattern a fost folosit pentru a adauga noi metode fara a schimba baza
