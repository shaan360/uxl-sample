# UXL Sample - User Registration System

A modern React application built with Vite showcasing a comprehensive user registration system with email verification and OTP functionality.

## 🚀 Features

### Core Application
- React 18 with modern hooks and functional components
- Vite for fast development and building
- ESLint for code quality
- Hot Module Replacement (HMR)
- Responsive design with modern CSS

### User Registration System
- **Multi-step Registration Flow**: Clean, guided user experience
- **Email Verification**: Secure email validation process
- **OTP (One-Time Password)**: 6-digit verification code system
- **Password Strength Indicator**: Real-time password strength feedback
- **Form Validation**: Comprehensive client-side validation
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Responsive Design**: Mobile-first approach with modern CSS

## 🛠️ Technologies Used

- [React](https://reactjs.org/) - UI library with hooks
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [React Router DOM](https://reactrouter.com/) - Client-side routing
- [ESLint](https://eslint.org/) - Code linting

## 📁 Project Structure

```
src/
├── App.jsx                           # Main application component
├── App.css                           # Application styles
├── main.jsx                          # Application entry point
├── index.css                         # Global styles
├── components/
│   ├── auth/
│   │   ├── RegistrationPage.jsx      # Main registration container
│   │   ├── RegistrationForm.jsx      # User details form
│   │   ├── OTPVerification.jsx       # OTP input and verification
│   │   ├── RegistrationSuccess.jsx   # Success confirmation
│   │   └── PasswordStrengthIndicator.jsx # Password strength meter
│   └── ui/
│       └── FormComponents.jsx        # Reusable form components
├── contexts/
│   └── AuthContext.jsx               # Authentication state management
├── hooks/
│   └── useForm.js                    # Custom form and OTP timer hooks
├── styles/
│   └── forms.css                     # Comprehensive form styling
├── utils/
│   └── validation.js                 # Validation utilities
└── assets/                           # Static assets
```

## 🎯 User Registration Flow

### Step 1: Registration Form
- User enters personal details (name, email, password)
- Real-time validation for all fields
- Password strength indicator
- Email format validation
- Required field validation

### Step 2: Email Verification
- System sends verification email (simulated)
- User enters 6-digit OTP code
- Auto-resend functionality with cooldown timer
- Input validation and error handling

### Step 3: Success Confirmation
- Registration completion message
- Option to proceed to login
- Clean, celebratory user experience

## 🔧 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shaan360/uxl-sample.git
cd uxl-sample
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Key Components

### AuthContext
Provides authentication state management across the application:
```jsx
const { user, isAuthenticated, login, logout, register } = useAuth();
```

### Custom Hooks
- `useForm`: Form state management with validation
- `useOTPTimer`: OTP resend timer functionality

### Validation Utils
Comprehensive validation functions for:
- Email format validation
- Password strength checking
- Required field validation
- Name format validation

### Reusable Components
- `Input`: Accessible input component with validation
- `Button`: Consistent button styling and behavior
- `FormField`: Complete form field with label and error handling

## 🔐 Security Features

- Client-side input validation
- Password strength requirements
- Email format verification
- XSS protection through proper input handling
- Secure form submission patterns

## 🎨 Design Principles

- **Mobile-First**: Responsive design that works on all devices
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **User Experience**: Clear feedback, loading states, error messages
- **Modern UI**: Clean, minimalist design with smooth transitions
- **Dark/Light Theme**: Automatic theme detection support

## 🧪 Testing the Registration Flow

1. Navigate to the application
2. Click "Get Started" or access the registration page
3. Fill out the registration form with valid details
4. Submit the form to proceed to OTP verification
5. Enter the 6-digit OTP (any 6 digits for demo)
6. Complete the registration process

## 🚀 Future Enhancements

- Backend API integration for real email/OTP functionality
- User login system
- Password reset flow
- Social authentication
- Profile management
- Dashboard/user area

## 📖 Learn More

- [React Documentation](https://reactjs.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/docs/)

## 🤝 Contributing

This is a sample project demonstrating modern React development practices. Feel free to explore, learn, and adapt the code for your own projects.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).