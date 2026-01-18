import PatientController from './PatientController'
import PatientToothController from './PatientToothController'
import TreatmentController from './TreatmentController'
import PatientMediaController from './PatientMediaController'
import PatientPaymentController from './PatientPaymentController'
const Patient = {
    PatientController: Object.assign(PatientController, PatientController),
PatientToothController: Object.assign(PatientToothController, PatientToothController),
TreatmentController: Object.assign(TreatmentController, TreatmentController),
PatientMediaController: Object.assign(PatientMediaController, PatientMediaController),
PatientPaymentController: Object.assign(PatientPaymentController, PatientPaymentController),
}

export default Patient