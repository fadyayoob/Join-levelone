import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, email, country, platform } = body;

    // Validate required fields
    if (!firstName || !email || !country || !platform) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Send to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/appSLdB5d06DnQiK5/Waitlist%20Entries`,
      {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer patwRUrf9UyB26yTR.5b3d5c8ef465e5ceadd6c5cc2a24fafa4af99f4009f189d7c775769427ab011a',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            'First Name': firstName,
            'Email': email,
            'Country': country,
            'Platform': platform,
            'Signup Date': new Date().toISOString().split('T')[0], // Today's date
            'Status': 'New'
          }
        })
      }
    );

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.text();
      console.error('Airtable API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to save to database. Please try again.' },
        { status: 500 }
      );
    }

    const airtableData = await airtableResponse.json();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully joined the waitlist!',
      id: airtableData.id 
    });

  } catch (error) {
    console.error('Error processing waitlist signup:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
