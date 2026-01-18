import AppointmentController from './AppointmentController'
import AppointmentListController from './AppointmentListController'
const Appointment = {
    AppointmentController: Object.assign(AppointmentController, AppointmentController),
AppointmentListController: Object.assign(AppointmentListController, AppointmentListController),
}

export default Appointment