import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .max(20)
    .messages({
      'string.empty': 'First name is required and cannot be empty',
      'string.max': 'First name can not be more than 20 characters',
    }),
  middleName: Joi.string().allow(''),
  lastName: Joi.string()
    .required()
    .max(20)
    .messages({
      'string.empty': 'Last name is required and cannot be empty',
      'string.max': 'Last name can not be more than 20 characters',
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.empty': "Father's name is required",
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.empty': "Father's occupation is required",
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.empty': "Father's contact number is required",
  }),
  motherName: Joi.string().required().messages({
    'string.empty': "Mother's name is required",
  }),
  motherOccupation: Joi.string().required().messages({
    'string.empty': "Mother's occupation is required",
  }),
  motherContactNo: Joi.string().required().messages({
    'string.empty': "Mother's contact number is required",
  }),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': "Local guardian's name is required",
  }),
  occupation: Joi.string().required().messages({
    'string.empty': "Local guardian's occupation is required",
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': "Local guardian's contact number is required",
  }),
  address: Joi.string().required().messages({
    'string.empty': "Local guardian's address is required",
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'Student ID is required',
  }),
  name: userNameValidationSchema.required(),
  gender: Joi.string()
    .valid('male', 'female', 'other')
    .required()
    .messages({
      'any.only': '{VALUE} is not a valid gender. Valid values are: male, female, or other',
      'string.empty': 'Gender is required',
    }),
  dateOfBirth: Joi.string().required().messages({
    'string.empty': 'Date of birth is required',
  }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.empty': 'Email address is required',
      'string.email': 'Invalid email format',
    }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.empty': 'Emergency contact number is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .messages({
      'any.only': '{VALUE} is not a valid blood group. Valid values are: A+, A-, B+, B-, AB+, AB-, O+, O-',
    }),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent address is required',
  }),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string().allow(''),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .messages({
      'any.only': '{VALUE} is not a valid status. Valid values are: active, blocked',
    }),
});

export default studentValidationSchema;
