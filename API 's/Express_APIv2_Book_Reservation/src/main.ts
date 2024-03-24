import { BookController } from "@controllers/Book.controller";
import { ReservationController } from "@controllers/Reservation.controller";
import { ControllersObserver } from "@infra/services/Observer";

async function main() {
    const observer = new ControllersObserver()
    const book_controller = new BookController()
    const reservation_controller = new ReservationController()
    observer.subscribe(book_controller, reservation_controller)
    observer.notify()
}

main()