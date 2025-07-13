import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accommodation or Accomadation - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accommodation&quot; and &quot;accomadation&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccommodationVsAccomadationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Accommodation or Accomadation</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;accommodation&quot; and &quot;accomadation&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Accomadation</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Accomadation&quot; is a misspelling. The correct spelling is &quot;accommodation&quot; with two &quot;c&quot;s and two &quot;m&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accommodation</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Accommodation&quot; is the correct spelling. It means lodging, housing, or the act of providing for someone&apos;s needs.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Accommodation (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Lodging, housing, or the act of providing for someone&apos;s needs or requirements.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The hotel provides <strong>accommodation</strong> for guests.</li>
                  <li>• We need to find <strong>accommodation</strong> for the conference.</li>
                  <li>• The school made <strong>accommodation</strong> for students with disabilities.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Accomadation (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Accomadation&quot; is a misspelling of &quot;accommodation&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Accomadation&quot; is not used in standard English.</li>
                  <li>• Always use <strong>accommodation</strong> when referring to lodging or housing.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Accommodation:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Lodging</li>
                <li>• Housing</li>
                <li>• Quarters</li>
                <li>• Residence</li>
                <li>• Shelter</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Accomadation:</h4>
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
            <li>• <strong>Accommodation</strong> is spelled with two &quot;c&quot;s and two &quot;m&quot;s.</li>
            <li>• The word comes from Latin &quot;accommodatio&quot; meaning &quot;adjustment.&quot;</li>
            <li>• Used to describe lodging, housing, or making adjustments for needs.</li>
            <li>• Common in both formal and informal writing.</li>
            <li>• &quot;Accomadation&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;accomadation&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;accomadation&quot; is never correct. The proper spelling is always &quot;accommodation.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ac + com + mod + ation&quot; - remember the double &quot;c&quot; and double &quot;m.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between accommodation and lodging?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Accommodation&quot; is broader and can include lodging, while &quot;lodging&quot; specifically refers to temporary housing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can accommodation be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;accommodation&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;accomadation&quot; likely occurs because of confusion about the double consonants.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accommodation&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: accommodation booking, accommodation costs, accommodation facilities, and accommodation arrangements.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Accommodation</strong> is the correct spelling with two &quot;c&quot;s and two &quot;m&quot;s. It means lodging, housing, or the act of providing for someone&apos;s needs. The misspelling &quot;accomadation&quot; is never correct. Use &quot;accommodation&quot; to describe lodging or making adjustments for needs.</p>
      </div>
    </div>
  )
} 