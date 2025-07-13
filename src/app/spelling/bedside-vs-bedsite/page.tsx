import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bedside or Bedsite - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bedside&quot; and &quot;bedsite&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BedsideVsBedsitePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Bedside or Bedsite</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;bedside&quot; and &quot;bedsite&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bedsite</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bedsite&quot; is a misspelling. The correct spelling is &quot;bedside&quot; with &quot;de&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bedside</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bedside&quot; is the correct spelling. It means the area beside a bed.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bedside (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The area beside a bed; the space next to a bed where people can sit or stand.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The nurse stood at the patient&apos;s <strong>bedside</strong>.</li>
                  <li>• She placed a glass of water on the <strong>bedside</strong> table.</li>
                  <li>• The doctor made his <strong>bedside</strong> rounds.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bedsite (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bedsite&quot; is a misspelling of &quot;bedside&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bedsite&quot; is not used in standard English.</li>
                  <li>• Always use <strong>bedside</strong> when referring to the area near a bed.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bedside:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Next to the bed</li>
                <li>• By the bed</li>
                <li>• Near the bed</li>
                <li>• Adjacent to bed</li>
                <li>• Bed area</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bedsite:</h4>
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
          <li>• <strong>Bedside</strong> is spelled with &quot;de&quot; at the end, not &quot;te.&quot;</li>
          <li>• The word is a compound of &quot;bed&quot; + &quot;side.&quot;</li>
          <li>• Used to describe the area or space next to a bed.</li>
          <li>• Commonly used in medical and hospitality contexts.</li>
          <li>• &quot;Bedsite&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bedsite&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bedsite&quot; is never correct. The proper spelling is always &quot;bedside.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bed&quot; + &quot;side&quot; - the area at the side of a bed.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between bedside and next to the bed?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean the same thing, but &quot;bedside&quot; is more formal and commonly used in medical contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bedside be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bedside&quot; can be used as an adjective, as in &quot;bedside manner&quot; or &quot;bedside table.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;bedsite&quot; likely occurs because of confusion with words ending in &quot;-site.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;bedside&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: bedside manner, bedside table, bedside lamp, and bedside visit.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bedside</strong> is the correct spelling with &quot;de&quot; at the end. It means the area beside a bed. The misspelling &quot;bedsite&quot; is never correct. Use &quot;bedside&quot; to describe the space or area next to a bed.</p>
      </div>
    </div>
  )
} 