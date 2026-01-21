import appointments from './appointments'
import patient from './patient'
import users from './users'
const clinic = {
    appointments: Object.assign(appointments, appointments),
patient: Object.assign(patient, patient),
users: Object.assign(users, users),
}

export default clinic