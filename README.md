# Medical Agency Management Application

This project is a simple medical agency management website that allows for the easy management of patients, reservations, and appointment dates. The application features a modern design with intuitive animations, providing a user-friendly interface for healthcare professionals.

## Features

- **Patient Management**: Create, read, update, and delete patient records.
- **Reservation Management**: Create, view, modify, and cancel reservations for appointments.
- **Dashboard**: A central interface for managing patients and reservations, displaying key metrics.
- **Validation**: Ensures that all data entered meets specified validation rules.
- **Responsive Design**: The application is designed to be visually appealing and functional on various devices.

## Project Structure

```
medical-agency-app
├── src
│   ├── components
│   │   ├── Dashboard
│   │   │   └── Dashboard.tsx
│   │   ├── Patients
│   │   │   ├── PatientList.tsx
│   │   │   ├── PatientForm.tsx
│   │   │   └── PatientCard.tsx
│   │   ├── Reservations
│   │   │   ├── ReservationList.tsx
│   │   │   ├── ReservationForm.tsx
│   │   │   └── ReservationCard.tsx
│   │   └── UI
│   │       ├── Button.tsx
│   │       ├── Modal.tsx
│   │       ├── Input.tsx
│   │       └── DatePicker.tsx
│   ├── hooks
│   │   ├── usePatients.ts
│   │   └── useReservations.ts
│   ├── services
│   │   ├── patientService.ts
│   │   └── reservationService.ts
│   ├── types
│   │   ├── Patient.ts
│   │   └── Reservation.ts
│   ├── utils
│   │   └── validation.ts
│   ├── styles
│   │   ├── globals.css
│   │   └── animations.css
│   ├── App.tsx
│   └── main.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd medical-agency-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.