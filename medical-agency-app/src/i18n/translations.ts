export type Language = "en" | "fr" | "ar";

export interface Translations {
  // App
  appName: string;
  appTagline: string;

  // Navigation
  overview: string;
  patients: string;
  reservations: string;

  // Stats
  totalPatients: string;
  totalReservations: string;
  upcoming: string;
  today: string;

  // Patient
  recentPatients: string;
  viewAll: string;
  noPatients: string;
  noPatientsYet: string;
  addPatient: string;
  addNewPatient: string;
  addFirstPatient: string;
  editPatient: string;
  updatePatient: string;
  deletePatient: string;
  deletePatientConfirm: string;
  patientName: string;
  fullName: string;
  dateOfBirth: string;
  contactInfo: string;
  contactInformation: string;
  medicalNotes: string;
  medicalNotesPlaceholder: string;
  noContact: string;
  dob: string;
  edit: string;

  // Reservation
  upcomingAppointments: string;
  noUpcoming: string;
  noReservationsYet: string;
  newReservation: string;
  createFirstReservation: string;
  editReservation: string;
  updateReservation: string;
  createReservation: string;
  cancelReservation: string;
  cancelReservationConfirm: string;
  confirmCancellation: string;
  appointmentDate: string;
  appointmentTime: string;
  reason: string;
  reasonNotes: string;
  reasonPlaceholder: string;
  selectPatient: string;
  patient: string;
  past: string;
  delete: string;
  unknownPatient: string;
  addPatientFirst: string;
  noReservations: string;

  // Form
  cancel: string;
  save: string;
  confirm: string;
  confirmDelete: string;
  confirmDeleteMessage: string;
  confirmCancel: string;
  confirmCancelMessage: string;
  keepIt: string;
  yesCancel: string;

  // Validation
  required: string;
  patientRequired: string;
  dateRequired: string;
  timeRequired: string;
  futureDateTime: string;
  duplicateReservation: string;
  patientNotExist: string;
  dobPast: string;

  // Loading/Error
  loading: string;
  loadingPatients: string;
  loadingReservations: string;
  error: string;

  // Theme
  darkMode: string;
  lightMode: string;
  language: string;

  // Placeholders
  enterPatientName: string;
  phoneOrEmail: string;
  anyMedicalInfo: string;
  reasonForVisit: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // App
    appName: "MedAgency",
    appTagline: "Healthcare Management",

    // Navigation
    overview: "Overview",
    patients: "Patients",
    reservations: "Reservations",

    // Stats
    totalPatients: "Total Patients",
    totalReservations: "Total Reservations",
    upcoming: "Upcoming",
    today: "Today",

    // Patient
    recentPatients: "Recent Patients",
    viewAll: "View All",
    noPatients: "No patients registered yet.",
    noPatientsYet: "No patients yet",
    addPatient: "Add Patient",
    addNewPatient: "Add New Patient",
    addFirstPatient: "Add Your First Patient",
    editPatient: "Edit Patient",
    updatePatient: "Update Patient",
    deletePatient: "Delete Patient",
    deletePatientConfirm:
      "Are you sure you want to delete this patient? This action cannot be undone.",
    patientName: "Patient Name",
    fullName: "Full Name",
    dateOfBirth: "Date of Birth",
    contactInfo: "Contact Information",
    contactInformation: "Contact Information",
    medicalNotes: "Medical Notes",
    medicalNotesPlaceholder: "Any relevant medical information",
    noContact: "No contact",
    dob: "DOB",
    edit: "Edit",

    // Reservation
    upcomingAppointments: "Upcoming Appointments",
    noUpcoming: "No upcoming appointments.",
    noReservationsYet: "No reservations yet",
    newReservation: "New Reservation",
    createFirstReservation: "Create Your First Reservation",
    editReservation: "Edit Reservation",
    updateReservation: "Update Reservation",
    createReservation: "Create Reservation",
    cancelReservation: "Cancel",
    cancelReservationConfirm:
      "Are you sure you want to cancel this reservation?",
    confirmCancellation: "Confirm Cancellation",
    appointmentDate: "Appointment Date",
    appointmentTime: "Appointment Time",
    reason: "Reason",
    reasonNotes: "Reason/Notes",
    reasonPlaceholder: "Reason for visit",
    selectPatient: "Select a patient",
    patient: "Patient",
    past: "Past",
    delete: "Delete",
    unknownPatient: "Unknown Patient",
    addPatientFirst: "Please add a patient first before creating reservations.",
    noReservations: "No reservations yet",

    // Form
    cancel: "Cancel",
    save: "Save",
    confirm: "Confirm",
    confirmDelete: "Confirm Delete",
    confirmDeleteMessage:
      "Are you sure you want to delete this patient? This action cannot be undone.",
    confirmCancel: "Confirm Cancellation",
    confirmCancelMessage: "Are you sure you want to cancel this reservation?",
    keepIt: "Keep It",
    yesCancel: "Yes, Cancel",

    // Validation
    required: "This field is required",
    patientRequired: "Patient is required.",
    dateRequired: "Appointment date is required.",
    timeRequired: "Appointment time is required.",
    futureDateTime: "Appointment must be scheduled in the future.",
    duplicateReservation:
      "A reservation already exists for this patient at the same date and time.",
    patientNotExist: "Selected patient does not exist.",
    dobPast: "Date of birth must be in the past.",

    // Loading/Error
    loading: "Loading...",
    loadingPatients: "Loading patients...",
    loadingReservations: "Loading reservations...",
    error: "Error",

    // Theme
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    language: "Language",

    // Placeholders
    enterPatientName: "Enter patient's full name",
    phoneOrEmail: "Phone number or email",
    anyMedicalInfo: "Any relevant medical information",
    reasonForVisit: "Reason for visit",
  },

  fr: {
    // App
    appName: "MedAgency",
    appTagline: "Gestion de la Santé",

    // Navigation
    overview: "Aperçu",
    patients: "Patients",
    reservations: "Réservations",

    // Stats
    totalPatients: "Total Patients",
    totalReservations: "Total Réservations",
    upcoming: "À venir",
    today: "Aujourd'hui",

    // Patient
    recentPatients: "Patients Récents",
    viewAll: "Voir Tout",
    noPatients: "Aucun patient enregistré.",
    noPatientsYet: "Aucun patient pour le moment",
    addPatient: "Ajouter Patient",
    addNewPatient: "Ajouter un Nouveau Patient",
    addFirstPatient: "Ajouter Votre Premier Patient",
    editPatient: "Modifier Patient",
    updatePatient: "Mettre à jour",
    deletePatient: "Supprimer Patient",
    deletePatientConfirm:
      "Êtes-vous sûr de vouloir supprimer ce patient ? Cette action est irréversible.",
    patientName: "Nom du Patient",
    fullName: "Nom Complet",
    dateOfBirth: "Date de Naissance",
    contactInfo: "Informations de Contact",
    contactInformation: "Informations de Contact",
    medicalNotes: "Notes Médicales",
    medicalNotesPlaceholder: "Toute information médicale pertinente",
    noContact: "Pas de contact",
    dob: "DDN",
    edit: "Modifier",

    // Reservation
    upcomingAppointments: "Rendez-vous à Venir",
    noUpcoming: "Aucun rendez-vous à venir.",
    noReservationsYet: "Aucune réservation pour le moment",
    newReservation: "Nouvelle Réservation",
    createFirstReservation: "Créer Votre Première Réservation",
    editReservation: "Modifier Réservation",
    updateReservation: "Mettre à jour",
    createReservation: "Créer Réservation",
    cancelReservation: "Annuler",
    cancelReservationConfirm:
      "Êtes-vous sûr de vouloir annuler cette réservation ?",
    confirmCancellation: "Confirmer l'Annulation",
    appointmentDate: "Date du Rendez-vous",
    appointmentTime: "Heure du Rendez-vous",
    reason: "Raison",
    reasonNotes: "Raison/Notes",
    reasonPlaceholder: "Raison de la visite",
    selectPatient: "Sélectionner un patient",
    patient: "Patient",
    past: "Passé",
    delete: "Supprimer",
    unknownPatient: "Patient Inconnu",
    addPatientFirst:
      "Veuillez d'abord ajouter un patient avant de créer des réservations.",
    noReservations: "Aucune réservation",

    // Form
    cancel: "Annuler",
    save: "Enregistrer",
    confirm: "Confirmer",
    confirmDelete: "Confirmer la Suppression",
    confirmDeleteMessage:
      "Êtes-vous sûr de vouloir supprimer ce patient ? Cette action est irréversible.",
    confirmCancel: "Confirmer l'Annulation",
    confirmCancelMessage:
      "Êtes-vous sûr de vouloir annuler cette réservation ?",
    keepIt: "Garder",
    yesCancel: "Oui, Annuler",

    // Validation
    required: "Ce champ est obligatoire",
    patientRequired: "Le patient est obligatoire.",
    dateRequired: "La date du rendez-vous est obligatoire.",
    timeRequired: "L'heure du rendez-vous est obligatoire.",
    futureDateTime: "Le rendez-vous doit être programmé dans le futur.",
    duplicateReservation:
      "Une réservation existe déjà pour ce patient à la même date et heure.",
    patientNotExist: "Le patient sélectionné n'existe pas.",
    dobPast: "La date de naissance doit être dans le passé.",

    // Loading/Error
    loading: "Chargement...",
    loadingPatients: "Chargement des patients...",
    loadingReservations: "Chargement des réservations...",
    error: "Erreur",

    // Theme
    darkMode: "Mode Sombre",
    lightMode: "Mode Clair",
    language: "Langue",

    // Placeholders
    enterPatientName: "Entrez le nom complet du patient",
    phoneOrEmail: "Numéro de téléphone ou email",
    anyMedicalInfo: "Toute information médicale pertinente",
    reasonForVisit: "Raison de la visite",
  },

  ar: {
    // App
    appName: "ميد أجنسي",
    appTagline: "إدارة الرعاية الصحية",

    // Navigation
    overview: "نظرة عامة",
    patients: "المرضى",
    reservations: "الحجوزات",

    // Stats
    totalPatients: "إجمالي المرضى",
    totalReservations: "إجمالي الحجوزات",
    upcoming: "القادمة",
    today: "اليوم",

    // Patient
    recentPatients: "المرضى الجدد",
    viewAll: "عرض الكل",
    noPatients: "لا يوجد مرضى مسجلين حتى الآن.",
    noPatientsYet: "لا يوجد مرضى حتى الآن",
    addPatient: "إضافة مريض",
    addNewPatient: "إضافة مريض جديد",
    addFirstPatient: "أضف أول مريض",
    editPatient: "تعديل المريض",
    updatePatient: "تحديث المريض",
    deletePatient: "حذف المريض",
    deletePatientConfirm:
      "هل أنت متأكد من حذف هذا المريض؟ لا يمكن التراجع عن هذا الإجراء.",
    patientName: "اسم المريض",
    fullName: "الاسم الكامل",
    dateOfBirth: "تاريخ الميلاد",
    contactInfo: "معلومات الاتصال",
    contactInformation: "معلومات الاتصال",
    medicalNotes: "ملاحظات طبية",
    medicalNotesPlaceholder: "أي معلومات طبية ذات صلة",
    noContact: "لا يوجد اتصال",
    dob: "ت.الميلاد",
    edit: "تعديل",

    // Reservation
    upcomingAppointments: "المواعيد القادمة",
    noUpcoming: "لا توجد مواعيد قادمة.",
    noReservationsYet: "لا توجد حجوزات حتى الآن",
    newReservation: "حجز جديد",
    createFirstReservation: "أنشئ أول حجز لك",
    editReservation: "تعديل الحجز",
    updateReservation: "تحديث الحجز",
    createReservation: "إنشاء حجز",
    cancelReservation: "إلغاء",
    cancelReservationConfirm: "هل أنت متأكد من إلغاء هذا الحجز؟",
    confirmCancellation: "تأكيد الإلغاء",
    appointmentDate: "تاريخ الموعد",
    appointmentTime: "وقت الموعد",
    reason: "السبب",
    reasonNotes: "السبب/ملاحظات",
    reasonPlaceholder: "سبب الزيارة",
    selectPatient: "اختر مريض",
    patient: "المريض",
    past: "منتهي",
    delete: "حذف",
    unknownPatient: "مريض غير معروف",
    addPatientFirst: "يرجى إضافة مريض أولاً قبل إنشاء الحجوزات.",
    noReservations: "لا توجد حجوزات",

    // Form
    cancel: "إلغاء",
    save: "حفظ",
    confirm: "تأكيد",
    confirmDelete: "تأكيد الحذف",
    confirmDeleteMessage:
      "هل أنت متأكد من حذف هذا المريض؟ لا يمكن التراجع عن هذا الإجراء.",
    confirmCancel: "تأكيد الإلغاء",
    confirmCancelMessage: "هل أنت متأكد من إلغاء هذا الحجز؟",
    keepIt: "احتفظ به",
    yesCancel: "نعم، إلغاء",

    // Validation
    required: "هذا الحقل مطلوب",
    patientRequired: "المريض مطلوب.",
    dateRequired: "تاريخ الموعد مطلوب.",
    timeRequired: "وقت الموعد مطلوب.",
    futureDateTime: "يجب أن يكون الموعد في المستقبل.",
    duplicateReservation: "يوجد حجز بالفعل لهذا المريض في نفس التاريخ والوقت.",
    patientNotExist: "المريض المحدد غير موجود.",
    dobPast: "يجب أن يكون تاريخ الميلاد في الماضي.",

    // Loading/Error
    loading: "جاري التحميل...",
    loadingPatients: "جاري تحميل المرضى...",
    loadingReservations: "جاري تحميل الحجوزات...",
    error: "خطأ",

    // Theme
    darkMode: "الوضع الداكن",
    lightMode: "الوضع الفاتح",
    language: "اللغة",

    // Placeholders
    enterPatientName: "أدخل الاسم الكامل للمريض",
    phoneOrEmail: "رقم الهاتف أو البريد الإلكتروني",
    anyMedicalInfo: "أي معلومات طبية ذات صلة",
    reasonForVisit: "سبب الزيارة",
  },
};
