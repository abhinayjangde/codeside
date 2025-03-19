import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  // Ensure the request is of type 'application/json'
  if (req.headers.get('content-type') !== 'application/json') {
    return NextResponse.json({
      success: false,
      message: 'Invalid content type, must be application/json.',
    }, { status: 400 });
  }

  // Parse the verification code from the request body
  const { verificationCode } = await req.json();

  if (!verificationCode) {
    return NextResponse.json({
      success: false,
      message: 'Verification code is required.',
    }, { status: 400 });
  }

  try {
    // Find user with the provided verification code
    const user = await prisma.user.findFirst({
      where: {
        verificationToken: verificationCode,
        tokenExpiry: {
          gte: new Date(),
        },
      },
    });

    // If user is found, update their verification status
    if (user) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          verificationToken: null,
          tokenExpiry: null,
          isVerified: true,
        },
      });
      return NextResponse.json({ success: true, message: 'Verification successful.' });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Invalid or expired verification code.',
      }, { status: 400 });
    }
  } catch (error) {
    console.error('Error during verification:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred during verification.',
    }, { status: 500 });
  }
}