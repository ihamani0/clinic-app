import appointments from './appointments'
import patient from './patient'

const clinic = {
    appointments: Object.assign(appointments, appointments),
    patient: Object.assign(patient, patient),
}

export default clinic