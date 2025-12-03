import React, { useState } from "react";
import PatientList from "../Patients/PatientList";
import ReservationList from "../Reservations/ReservationList";
import usePatients from "../../hooks/usePatients";
import useReservations from "../../hooks/useReservations";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { Language } from "../../i18n/translations";
import "./Dashboard.css";

type TabType = "overview" | "patients" | "reservations";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const { patients } = usePatients();
  const { reservations } = useReservations();
  const { t, language, setLanguage, isRTL } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const upcomingReservations = reservations.filter(
    (res) =>
      new Date(`${res.appointmentDate}T${res.appointmentTime}`) > new Date()
  );

  const todayReservations = reservations.filter((res) => {
    const today = new Date().toISOString().split("T")[0];
    return res.appointmentDate === today;
  });

  const languageOptions: { value: Language; label: string }[] = [
    { value: "en", label: "English" },
    { value: "fr", label: "Français" },
    { value: "ar", label: "العربية" },
  ];

  return (
    <div className={`dashboard ${isRTL ? "rtl" : "ltr"}`}>
      <header className="dashboard-header">
        <div className="header-content">
          <div className="logo">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <div className="logo-text">
              <h1>{t.appName}</h1>
              <span>{t.appTagline}</span>
            </div>
          </div>

          <nav className="header-nav">
            <button
              className={`nav-btn ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              {t.overview}
            </button>
            <button
              className={`nav-btn ${activeTab === "patients" ? "active" : ""}`}
              onClick={() => setActiveTab("patients")}
            >
              {t.patients}
            </button>
            <button
              className={`nav-btn ${
                activeTab === "reservations" ? "active" : ""
              }`}
              onClick={() => setActiveTab("reservations")}
            >
              {t.reservations}
            </button>
          </nav>

          <div className="header-controls">
            {/* Language Selector */}
            <div className="language-selector">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="language-select"
                aria-label={t.language}
              >
                {languageOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Theme Toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isDark ? t.lightMode : t.darkMode}
              title={isDark ? t.lightMode : t.darkMode}
            >
              {isDark ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        {activeTab === "overview" && (
          <div className="overview-content">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon patients-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-value">{patients.length}</span>
                  <span className="stat-label">{t.totalPatients}</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon reservations-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-value">{reservations.length}</span>
                  <span className="stat-label">{t.totalReservations}</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon upcoming-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-value">
                    {upcomingReservations.length}
                  </span>
                  <span className="stat-label">{t.upcoming}</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon today-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-value">{todayReservations.length}</span>
                  <span className="stat-label">{t.today}</span>
                </div>
              </div>
            </div>

            <div className="quick-sections">
              <section className="quick-section">
                <div className="section-header">
                  <h2>{t.recentPatients}</h2>
                  <button
                    className="view-all-btn"
                    onClick={() => setActiveTab("patients")}
                  >
                    {t.viewAll}
                  </button>
                </div>
                {patients.length === 0 ? (
                  <p className="empty-text">{t.noPatients}</p>
                ) : (
                  <ul className="quick-list">
                    {patients.slice(0, 5).map((patient) => (
                      <li key={patient.patientId} className="quick-list-item">
                        <div className="list-avatar">
                          {patient.fullName.charAt(0).toUpperCase()}
                        </div>
                        <div className="list-info">
                          <span className="list-name">{patient.fullName}</span>
                          <span className="list-sub">
                            {patient.contactInformation || t.noContact}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              <section className="quick-section">
                <div className="section-header">
                  <h2>{t.upcomingAppointments}</h2>
                  <button
                    className="view-all-btn"
                    onClick={() => setActiveTab("reservations")}
                  >
                    {t.viewAll}
                  </button>
                </div>
                {upcomingReservations.length === 0 ? (
                  <p className="empty-text">{t.noUpcoming}</p>
                ) : (
                  <ul className="quick-list">
                    {upcomingReservations.slice(0, 5).map((res) => {
                      const patient = patients.find(
                        (p) => p.patientId === res.patientId
                      );
                      return (
                        <li key={res.reservationId} className="quick-list-item">
                          <div className="list-date">
                            <span className="date-day">
                              {new Date(res.appointmentDate).getDate()}
                            </span>
                            <span className="date-month">
                              {new Date(res.appointmentDate).toLocaleString(
                                language === "ar"
                                  ? "ar-SA"
                                  : language === "fr"
                                  ? "fr-FR"
                                  : "en-US",
                                { month: "short" }
                              )}
                            </span>
                          </div>
                          <div className="list-info">
                            <span className="list-name">
                              {patient?.fullName || t.unknownPatient}
                            </span>
                            <span className="list-sub">
                              {res.appointmentTime}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            </div>
          </div>
        )}

        {activeTab === "patients" && <PatientList />}
        {activeTab === "reservations" && <ReservationList />}
      </main>
    </div>
  );
};

export default Dashboard;
