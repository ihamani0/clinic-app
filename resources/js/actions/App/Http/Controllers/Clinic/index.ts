import Appointment from './Appointment'
import Patient from './Patient'
const Clinic = {
    Appointment: Object.assign(Appointment, Appointment),
Patient: Object.assign(Patient, Patient),
}

export default Clinic