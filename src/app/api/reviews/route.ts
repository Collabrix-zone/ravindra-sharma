import { NextResponse } from 'next/server'

export interface GoogleReview {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
  time: number
  profile_photo_url?: string
}

interface PlaceDetailsResponse {
  result?: {
    reviews?: GoogleReview[]
    rating?: number
    user_ratings_total?: number
  }
  status: string
}

export const revalidate = 3600 // cache for 1 hour

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { reviews: [], rating: 0, totalReviews: 0, error: 'Missing API configuration' },
      { status: 200 }
    )
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    const res = await fetch(url, { next: { revalidate: 3600 } })
    const data: PlaceDetailsResponse = await res.json()

    if (data.status !== 'OK' || !data.result) {
      return NextResponse.json(
        { reviews: [], rating: 0, totalReviews: 0, error: `Google API: ${data.status}` },
        { status: 200 }
      )
    }

    return NextResponse.json({
      reviews: data.result.reviews ?? [],
      rating: data.result.rating ?? 0,
      totalReviews: data.result.user_ratings_total ?? 0,
    })
  } catch {
    return NextResponse.json(
      { reviews: [], rating: 0, totalReviews: 0, error: 'Failed to fetch reviews' },
      { status: 200 }
    )
  }
}
