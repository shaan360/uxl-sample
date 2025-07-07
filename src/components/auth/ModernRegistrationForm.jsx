import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthContext';
import { validationRules } from '../../utils/validation';
import '../../styles/modern-forms.css';

const ModernRegistrationForm = () => {
  const { registerUser, isLoading, error } = useAuth();
  const [submitError, setSubmitError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });

  const watchedPassword = watch('password');

  const getPasswordStrength = (password) => {
    if (!password) return { level: 0, text: '', color: '#e5e7eb' };
    
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const levels = [
      { level: 20, text: 'Very Weak', color: '#ef4444' },
      { level: 40, text: 'Weak', color: '#f59e0b' },
      { level: 60, text: 'Fair', color: '#eab308' },
      { level: 80, text: 'Good', color: '#22c55e' },
      { level: 100, text: 'Strong', color: '#16a34a' },
    ];

    return levels[score - 1] || levels[0];
  };

  const passwordStrength = getPasswordStrength(watchedPassword);

  const onSubmit = async (data) => {
    try {
      setSubmitError('');
      
      if (data.password !== data.confirmPassword) {
        setSubmitError('Passwords do not match');
        return;
      }

      if (!data.terms) {
        setSubmitError('You must accept the terms and conditions');
        return;
      }

      await registerUser({
        fullName: data.fullName.trim(),
        email: data.email.toLowerCase().trim(),
        password: data.password,
      });
    } catch (err) {
      setSubmitError(err.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="registration-layout">
      {/* Floating background shapes */}
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* Left side with branding and illustration */}
      <div className="registration-left">
        <a href="/" className="registration-logo">
          <span style={{ fontSize: '1.5rem' }}>◆</span>
          <span>FOCUS</span>
        </a>

        {/* Simple illustration placeholder - in a real app, this would be an SVG or image */}
        <div className="registration-illustration">
          <div style={{
            width: '100%',
            height: '300px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '1rem',
            color: 'white',
            fontSize: '3rem',
          }}>
            <div style={{ fontSize: '4rem' }}>🔐</div>
            <div style={{ fontSize: '1rem', textAlign: 'center', maxWidth: '250px' }}>
              Secure registration with modern design and user experience
            </div>
          </div>
        </div>

        <a href="/login" className="registration-signin-link">
          <span>Already have an account?</span>
          <strong>SIGN IN</strong>
        </a>
      </div>

      {/* Right side with form */}
      <div className="registration-right">
        <div className="registration-form-container">
          <div className="registration-header">
            <h1 className="registration-title">Welcome to Focus!</h1>
            <p className="registration-subtitle">Register your account</p>
          </div>

          <form className="modern-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Name Field */}
            <div className="modern-field">
              <label className="modern-label">Name</label>
              <input
                type="text"
                className="modern-input"
                placeholder="Ch"
                {...register('fullName', validationRules.fullName)}
              />
              {errors.fullName && (
                <div className="modern-error">
                  <span>⚠️</span>
                  {errors.fullName.message}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="modern-field">
              <label className="modern-label">Email</label>
              <input
                type="email"
                className="modern-input"
                placeholder="focus001@gmail.com"
                {...register('email', validationRules.email)}
              />
              {errors.email && (
                <div className="modern-error">
                  <span>⚠️</span>
                  {errors.email.message}
                </div>
              )}
            </div>

            {/* Password Field */}
            <div className="modern-field">
              <label className="modern-label">Password</label>
              <div className="password-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="modern-input"
                  placeholder="8+ characters"
                  style={{ paddingRight: '3rem' }}
                  {...register('password', validationRules.password)}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {watchedPassword && (
                <div className="modern-password-strength">
                  <div className="strength-bar">
                    <div 
                      className="strength-fill"
                      style={{
                        width: `${passwordStrength.level}%`,
                        backgroundColor: passwordStrength.color,
                      }}
                    />
                  </div>
                  <div className="strength-text" style={{ color: passwordStrength.color }}>
                    {passwordStrength.text}
                  </div>
                </div>
              )}
              
              {errors.password && (
                <div className="modern-error">
                  <span>⚠️</span>
                  {errors.password.message}
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="modern-field">
              <label className="modern-label">Confirm Password</label>
              <div className="password-field">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="modern-input"
                  placeholder="Confirm your password"
                  style={{ paddingRight: '3rem' }}
                  {...register('confirmPassword', validationRules.confirmPassword(watchedPassword))}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.confirmPassword && (
                <div className="modern-error">
                  <span>⚠️</span>
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="modern-checkbox-wrapper">
              <input
                type="checkbox"
                id="terms"
                className="modern-checkbox"
                {...register('terms', validationRules.terms)}
              />
              <label htmlFor="terms" className="modern-checkbox-label">
                I agree to the{' '}
                <a href="/terms" target="_blank" rel="noopener noreferrer">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </label>
            </div>
            {errors.terms && (
              <div className="modern-error">
                <span>⚠️</span>
                {errors.terms.message}
              </div>
            )}

            {/* Submit Error */}
            {(submitError || error) && (
              <div className="modern-error" style={{ marginTop: '1rem' }}>
                <span>❌</span>
                {submitError || error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="modern-button"
              disabled={!isValid || isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner" />
                  Creating Account...
                </>
              ) : (
                'Login'
              )}
            </button>

            {/* Social Login */}
            <div className="social-login">
              <p className="social-login-text">Create account with</p>
              <div className="social-buttons">
                <a href="#" className="social-button" aria-label="Sign up with Facebook">
                  📘
                </a>
                <a href="#" className="social-button" aria-label="Sign up with LinkedIn">
                  💼
                </a>
                <a href="#" className="social-button" aria-label="Sign up with Google">
                  🌐
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModernRegistrationForm;