import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Amenities or Amenites - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;amenities&quot; and &quot;amenites&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AmenitiesVsAmenitesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Amenities or Amenites</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;amenities&quot; and &quot;amenites&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Amenites</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Amenites&quot; is a misspelling. The correct spelling is &quot;amenities&quot; with an &quot;i&quot; before the &quot;es&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Amenities</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Amenities&quot; is the correct spelling. It means useful features or facilities that make a place more comfortable.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Amenities (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Useful features or facilities that make a place more comfortable, convenient, or enjoyable.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The hotel offers many <strong>amenities</strong> including a pool and gym.</li>
                  <li>• The apartment building has excellent <strong>amenities</strong>.</li>
                  <li>• Public <strong>amenities</strong> include parks and libraries.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Amenites (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Amenites&quot; is a misspelling of &quot;amenities&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Amenites&quot; is not used in standard English.</li>
                  <li>• Always use <strong>amenities</strong> when referring to facilities or features.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Amenities:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Facilities</li>
                <li>• Features</li>
                <li>• Services</li>
                <li>• Conveniences</li>
                <li>• Perks</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Amenites:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Amenities</strong> is spelled with an &quot;i&quot; before the &quot;es&quot;, not &quot;amenites&quot;.</li>
            <li>• The word comes from Latin &quot;amenitas&quot; meaning pleasantness.</li>
            <li>• Commonly used in real estate, hospitality, and urban planning contexts.</li>
            <li>• Refers to features that enhance comfort or convenience.</li>
            <li>• &quot;Amenites&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;amenites&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;amenites&quot; is never correct. The proper spelling is always &quot;amenities.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;amenity&quot; + &quot;ies&quot; - the base word &quot;amenity&quot; with the plural suffix &quot;ies&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between amenities and facilities?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Amenities&quot; often refers to comfort features, while &quot;facilities&quot; can include any type of building or equipment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can amenities be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;amenities&quot; is very common in formal writing, especially in real estate and business contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of confusion about the &quot;i&quot; before the &quot;es&quot; or pronunciation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;amenities&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: hotel amenities, apartment amenities, public amenities, and luxury amenities.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Amenities</strong> is the correct spelling with an &quot;i&quot; before the &quot;es&quot;. It means useful features or facilities that make a place more comfortable. The misspelling &quot;amenites&quot; is never correct. Use &quot;amenities&quot; when referring to comfort features or conveniences.</p>
      </div>
    </div>
  )
} 