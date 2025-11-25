/**
 * LIGHTHOUSE API Test Script
 *
 * Run with: node test-lighthouse-api.js
 *
 * Make sure your development server is running: npm run dev
 */

const BASE_URL = 'http://localhost:3000/api/lighthouse'

// Test 1: Normal check-in
async function testNormalCheckIn() {
  console.log('\n--- Test 1: Normal Check-In ---')

  const payload = {
    email: 'test@heavenonearthmovement.com',
    moodScore: 7,
    energy: 6,
    feelings: ['hopeful', 'grateful', 'tired'],
    thoughts: 'Had a challenging day but made it through. Feeling grateful for small wins.'
  }

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    const data = await response.json()

    console.log('Status:', response.status)
    console.log('Success:', data.success)
    console.log('Check-In ID:', data.checkInId)
    console.log('Crisis Detected:', data.crisisDetected)
    console.log('\nAI Response:')
    console.log(data.response)
    console.log('\nAnalysis:', JSON.stringify(data.analysis, null, 2))

    return data.checkInId
  } catch (error) {
    console.error('Error:', error.message)
  }
}

// Test 2: Crisis detection
async function testCrisisDetection() {
  console.log('\n--- Test 2: Crisis Detection ---')

  const payload = {
    email: 'crisis-test@heavenonearthmovement.com',
    moodScore: 1,
    energy: 1,
    feelings: ['hopeless', 'desperate', 'empty'],
    thoughts: 'I cant take this anymore. I feel like theres no point in going on.'
  }

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    const data = await response.json()

    console.log('Status:', response.status)
    console.log('Success:', data.success)
    console.log('Crisis Detected:', data.crisisDetected)
    console.log('Crisis Resources:', JSON.stringify(data.crisisResources, null, 2))
    console.log('\nAI Response:')
    console.log(data.response)

    return data.checkInId
  } catch (error) {
    console.error('Error:', error.message)
  }
}

// Test 3: Anonymous check-in (no email)
async function testAnonymousCheckIn() {
  console.log('\n--- Test 3: Anonymous Check-In ---')

  const payload = {
    moodScore: 5,
    feelings: ['calm', 'thoughtful'],
    energy: 5
  }

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    const data = await response.json()

    console.log('Status:', response.status)
    console.log('Success:', data.success)
    console.log('Check-In ID:', data.checkInId)
    console.log('\nAI Response Preview:')
    console.log(data.response.substring(0, 200) + '...')

    return data.checkInId
  } catch (error) {
    console.error('Error:', error.message)
  }
}

// Test 4: Get check-in history
async function testGetHistory(email) {
  console.log('\n--- Test 4: Get Check-In History ---')

  try {
    const response = await fetch(
      `${BASE_URL}?email=${encodeURIComponent(email)}&limit=10`
    )

    const data = await response.json()

    console.log('Status:', response.status)
    console.log('Success:', data.success)
    console.log('Total Check-Ins:', data.insights.totalCheckIns)
    console.log('Average Mood:', data.insights.averageMood)
    console.log('Current Streak:', data.insights.streak)
    console.log('Crisis Count:', data.insights.crisisDetected)
    console.log('\nRecent Check-Ins:')
    data.checkIns.slice(0, 3).forEach((checkIn, i) => {
      console.log(`${i + 1}. ${new Date(checkIn.created_at).toLocaleString()} - Mood: ${checkIn.mood_score}/10`)
    })

  } catch (error) {
    console.error('Error:', error.message)
  }
}

// Test 5: Invalid request (should fail)
async function testInvalidRequest() {
  console.log('\n--- Test 5: Invalid Request (Missing Required Fields) ---')

  const payload = {
    email: 'test@example.com',
    // Missing moodScore and feelings
  }

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    const data = await response.json()

    console.log('Status:', response.status)
    console.log('Expected 400 error:', data.error)

  } catch (error) {
    console.error('Error:', error.message)
  }
}

// Run all tests
async function runAllTests() {
  console.log('='.repeat(60))
  console.log('LIGHTHOUSE API TEST SUITE')
  console.log('='.repeat(60))

  await testNormalCheckIn()
  await testCrisisDetection()
  await testAnonymousCheckIn()
  await testGetHistory('test@heavenonearthmovement.com')
  await testInvalidRequest()

  console.log('\n' + '='.repeat(60))
  console.log('TESTS COMPLETE')
  console.log('='.repeat(60))
  console.log('\nCheck your Supabase database to verify data was saved.')
  console.log('Check the console for any errors.')
}

// Run tests
runAllTests().catch(console.error)
