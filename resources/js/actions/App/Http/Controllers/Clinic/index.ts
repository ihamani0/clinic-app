import Appointment from './Appointment'
import Patient from './Patient'
import User from './User'
const Clinic = {
    Appointment: Object.assign(Appointment, Appointment),
Patient: Object.assign(Patient, Patient),
User: Object.assign(User, User),
}

export default Clinic