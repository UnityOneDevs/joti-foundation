import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, phone, qualification, address } = req.body

    // Validate required fields
    if (!name || !email || !phone || !qualification || !address) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address',
      })
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid phone number',
      })
    }

    const { db } = await connectToDatabase()

    // Create volunteer document
    const volunteerData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      qualification: qualification.trim(),
      address: address.trim(),
      createdAt: new Date(),
      type: 'volunteer',
    }

    // Insert into volunteers collection
    const result = await db.collection('volunteers').insertOne(volunteerData)

    if (result.insertedId) {
      return res.status(200).json({
        success: true,
        message:
          'Thank you for your volunteer application! We will get back to you soon.',
        id: result.insertedId,
      })
    } else {
      return res.status(500).json({
        success: false,
        message: 'Failed to submit volunteer application. Please try again.',
      })
    }
  } catch (error) {
    console.error('Volunteer form submission error:', error)
    return res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    })
  }
}
