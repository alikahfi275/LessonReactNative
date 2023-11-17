import * as yup from 'yup';

const validationSchema = yup.object().shape({
  nama: yup
    .string()
    .required('Nama Lengkap Harus Diisi')
    .matches(
      /^[a-zA-Z\s]+$/,
      'Nama Lengkap must only contain letters and spaces',
    )
    .max(50, 'Nama Lengkap must be at most 50 characters'),
  nik: yup
    .string()
    .required('NIK Harus Diisi')
    .matches(/^\d{16}$/, 'NIK must be exactly 16 numeric characters'),
  npwp: yup
    .string()
    .matches(/^\d{16}$/, 'NPWP must be exactly 16 numeric characters'),
  phoneNumber: yup
    .string()
    .required('Phone Number Harus Diisi')
    .matches(/^(\+62|62|0)8[1-9][0-9]{6,9}$/, 'Format Nomor Handphone Salah'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email Harus Diisi'),
  password: yup
    .string()
    .required('Password Harus Diisi')
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be at most 16 characters')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password Confirmation Harus Diisi'),
});

export default validationSchema;
