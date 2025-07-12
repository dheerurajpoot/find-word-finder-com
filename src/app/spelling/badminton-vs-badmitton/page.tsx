import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Badminton or Badmitton - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;badminton&quot; and &quot;badmitton&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BadmintonVsBadmittonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Badminton or Badmitton</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;badminton&quot; and &quot;badmitton&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Badmitton</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Badmitton&quot; is a misspelling. The correct spelling is &quot;badminton&quot; with an &quot;n&quot; before the &quot;t&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Badminton</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Badminton&quot; is the correct spelling. It is a racket sport played with a shuttlecock.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Badminton (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A racket sport played with a shuttlecock, typically on a court divided by a net.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• We played <strong>badminton</strong> in the backyard.</li>
                  <li>• <strong>Badminton</strong> is an Olympic sport.</li>
                  <li>• The <strong>badminton</strong> court was well-maintained.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Badmitton (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Badmitton&quot; is a misspelling of &quot;badminton&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Badmitton&quot; is not used in standard English.</li>
                  <li>• Always use <strong>badminton</strong> when referring to the sport.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Badminton:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Shuttlecock game</li>
                <li>• Racket sport</li>
                <li>• Court game</li>
                <li>• Net sport</li>
                <li>• Indoor sport</li>
                <li>• Olympic sport</li>
                <li>• Recreational game</li>
                <li>• Competitive sport</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Badmitton:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Badminton</strong> is spelled with an &quot;n&quot; before the &quot;t&quot;, not &quot;badmitton.&quot;</li>
          <li>• The word is named after Badminton House in England where the sport was first played.</li>
          <li>• A popular recreational and competitive sport worldwide.</li>
          <li>• Played with rackets and a shuttlecock (also called a birdie).</li>
          <li>• &quot;Badmitton&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;badmitton&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;badmitton&quot; is never correct. The proper spelling is always &quot;badminton&quot; with an &quot;n&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bad-min-ton&quot; - the word &quot;bad&quot; plus &quot;min&quot; plus &quot;ton.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between badminton and tennis?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Badminton uses a shuttlecock and smaller rackets, while tennis uses a ball and larger rackets. The courts and scoring systems also differ.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can badminton be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;badminton&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;badmitton&quot; likely occurs because of pronunciation or confusion about the &quot;n&quot; sound.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;badminton&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: badminton court, badminton racket, badminton tournament, and badminton club.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is badminton always played indoors?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, badminton can be played both indoors and outdoors, though competitive play is typically indoors.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What equipment is needed for badminton?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Badminton requires rackets, shuttlecocks, a net, and a court. Players also typically wear appropriate athletic shoes.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Badminton</strong> is the correct spelling with an &quot;n&quot; before the &quot;t&quot;. It is a racket sport played with a shuttlecock. The misspelling &quot;badmitton&quot; is never correct. Use &quot;badminton&quot; to refer to the sport, its equipment, or related activities.</p>
      </div>
    </div>
  )
} 