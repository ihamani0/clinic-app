import PatientController from './PatientController'
import PatientToothController from './PatientToothController'
import TreatmentController from './TreatmentController'

const Patient = {
    PatientController: Object.assign(PatientController, PatientController),
    PatientToothController: Object.assign(PatientToothController, PatientToothController),
    TreatmentController: Object.assign(TreatmentController, TreatmentController),
}

export default Patient