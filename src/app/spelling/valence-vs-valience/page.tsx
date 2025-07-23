import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Valence or Valience - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;valence&quot; and &quot;valience&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ValenceVsValiencePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Valence or Valience</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;valence&quot; and &quot;valience&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Valience</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Valience&quot; is a misspelling. The correct spelling is &quot;valence&quot; with no &quot;i&quot; after the &quot;l&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Valence</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Valence&quot; is the correct spelling. In chemistry, it refers to the combining power of an element, and in psychology, it refers to the intrinsic attractiveness or averseness of an event, object, or situation.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Valence (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">In chemistry: the combining power of an element. In psychology: the intrinsic attractiveness or averseness of something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Oxygen has a <strong>valence</strong> of two.</li>
                  <li>• The <strong>valence</strong> of an emotion can be positive or negative.</li>
                  <li>• Sodium&apos;s <strong>valence</strong> is one.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Valience:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Valience&quot; is a misspelling of &quot;valence&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Valience&quot; is not used in standard English.</li>
                  <li>• Always use <strong>valence</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Valence:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Capacity</li>
                <li>• Power</li>
                <li>• Strength</li>
                <li>• Charge (chemistry)</li>
                <li>• Affect (psychology)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Valience:</h4>
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
            <li>• <strong>Valence</strong> is spelled with no &quot;i&quot; after the &quot;l&quot;.</li>
            <li>• &quot;Valience&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;valentia&quot; meaning &quot;strength&quot; or &quot;capacity&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;valience&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;valience&quot; is never correct. The proper spelling is always &quot;valence&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;valence&quot; has no &quot;i&quot; after the &quot;l&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does valence mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In chemistry, &quot;valence&quot; is the combining power of an element. In psychology, it is the intrinsic attractiveness or averseness of something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;valence&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;valience&quot; often happens by adding an unnecessary &quot;i&quot;. Always use &quot;valence&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;valence&quot; used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;valence&quot; is the correct spelling in all contexts, both formal and informal.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Valence</strong> is the correct spelling, meaning combining power or emotional value. The misspelling &quot;valience&quot; is never correct. Always use &quot;valence&quot; in your writing.</p>
      </div>
    </div>
  )
} 