import ProfileController from './ProfileController'
import PasswordController from './PasswordController'
import RoleController from './RoleController'
import ServicesClinicController from './ServicesClinicController'

const Settings = {
    ProfileController: Object.assign(ProfileController, ProfileController),
    PasswordController: Object.assign(PasswordController, PasswordController),
    RoleController: Object.assign(RoleController, RoleController),
    ServicesClinicController: Object.assign(ServicesClinicController, ServicesClinicController),
}

export default Settings