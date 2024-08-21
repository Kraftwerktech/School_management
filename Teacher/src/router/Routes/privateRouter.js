import {adminRoutes} from './adminRouter'
import {teacherRouter} from './teacherRouter'

export const privateRoutes = [
    ...adminRoutes,
    ...teacherRouter
]