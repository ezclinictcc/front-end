import AppTemplate from '../../templates/AppTemplate';
import PublicTemplate from '../../templates/PublicTemplate';
import EZClinikHome from '../../pages/ezclinikHome';
import EZClinikScheduleAppointment from '../../pages/Patient/ezclinikScheduleAppointment';
import EZClinikLogin from '../../pages/PublicPages/ezclinikLogin';
import EZClinikNewUser from '../../pages/PublicPages/ezclinikNewUser';
import EZClinikForgotPassword from '../../pages/PublicPages/ezclinikForgotPassword';
import EZClinikPageNotFound from '../../pages/PublicPages/ezclinikPageNotFound';
import EZClinikMyAppointments from '../../pages/Patient/ezclinikMyAppointments';
import EZClinikMyCalendar from '../../pages/Doctor/ezclinikMyCalendar';
import EZClinikNextAppointments from '../../pages/Doctor/ezclinikNextAppointments';
import EZClinikRegisterProfessionals from '../../pages/Manager/ezclinikRegisterProfessionals';
import EZClinikMedicalConsultationHistory from '../../pages/Manager/ezclinikMedicalConsultationHistory';
import EZClinikMyClinic from '../../pages/Manager/ezclinikMyClinic';
import EZClinikClinicProfessionals from '../../pages/Manager/ezclinikClinicProfessionals';

/**
 * @description Menu System.
 */
export const PrivateRouteNavigator = [
    {
        name: 'Page Not Found',
        path: '*',
        redirectWhen: ['/', '/login'],
        redirectTo: '/home',
        component: EZClinikPageNotFound,
        currentPage: false,
        template: PublicTemplate,
        menuAccess: false,
        isPrivate: false,
        role: ['MANAGER', "DOCTOR", "PATIENT"],
    },
    {
        name: 'Home',
        path: '/home',
        component: EZClinikHome,
        currentPage: false,
        template: AppTemplate,
        menuAccess: true,
        isPrivate: true,
        role: ['MANAGER', "DOCTOR", "PATIENT"],
    },
    {
        name: 'Agendar Consulta',
        path: '/schedule-appointment',
        component: EZClinikScheduleAppointment,
        currentPage: false,
        template: AppTemplate,
        menuAccess: true,
        isPrivate: true,
        role: ["PATIENT"],
    },
    {
        name: 'Minhas Consultas',
        path: '/my-appointment',
        component: EZClinikMyAppointments,
        currentPage: false,
        template: AppTemplate,
        menuAccess: true,
        isPrivate: true,
        role: ["PATIENT"],
    },
    {
        name: 'Meu Calendário',
        path: '/my-calendar',
        component: EZClinikMyCalendar,
        currentPage: false,
        template: AppTemplate,
        menuAccess: true,
        isPrivate: true,
        role: ["DOCTOR"],
    },
    {
        name: 'Próximas Consultas',
        path: '/next-appointment',
        component: EZClinikNextAppointments,
        currentPage: false,
        template: AppTemplate,
        menuAccess: true,
        isPrivate: true,
        role: ["DOCTOR"],
    },
    {
        name: 'Profissionais da Clínica',
        path: '/clinic-professionals',
        component: EZClinikClinicProfessionals,
        currentPage: false,
        template: AppTemplate,
        menuAccess: true,
        isPrivate: true,
        role: ["MANAGER"],
    },
    {
        name: 'Cadastrar Profissionais',
        path: '/clinic-professionals/new',
        component: EZClinikRegisterProfessionals,
        currentPage: false,
        template: AppTemplate,
        menuAccess: false,
        isPrivate: true,
        role: ["MANAGER"],
    },
    {
        name: 'Histórico de Consultas',
        path: '/consultation-history',
        component: EZClinikMedicalConsultationHistory,
        currentPage: false,
        template: AppTemplate,
        menuAccess: true,
        isPrivate: true,
        role: ["MANAGER"],
    },
    {
        name: 'Minha Clínica',
        path: '/my-clinic',
        component: EZClinikMyClinic,
        currentPage: false,
        template: AppTemplate,
        menuAccess: true,
        isPrivate: true,
        role: ["MANAGER"],
    },
]