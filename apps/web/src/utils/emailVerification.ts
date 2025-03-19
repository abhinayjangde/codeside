import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to generate a random verification token
export const generateToken = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit token
};

// Function to generate and store the token in the database
export const generateAndStoreVerificationToken = async (userId: string) => {
  const token = generateToken();
  const expiry = new Date();
  expiry.setMinutes(expiry.getMinutes() + 30); // Set expiration time for 30 minutes
  
  await prisma.user.update({
    where: { id: userId },
    data: {
      verificationToken: token,
      tokenExpiry: expiry,
    },
  });

  return token;
};

// Function to create a nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com', // Use Gmail's SMTP server
    port: 587,              // TLS port
    secure: false,          // Use TLS
    auth: {
      user: process.env.EMAIL_USER, // Gmail address or other email service user
      pass: process.env.EMAIL_PASSWORD, // Your email password or application password
    },
  });
};

// Function to send the verification email
export const sendVerificationEmail = async (email: string, token: string) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email
    to: email,                   // Recipient's email
    subject: 'Please verify your email address',
    html: `<p>Your verification code is: <strong>${token}</strong></p>`, // HTML email body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Verification email sent!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
