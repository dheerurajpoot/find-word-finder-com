import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cigarette or Cigarete - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;cigarette&quot; and &quot;cigarete&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CigaretteVsCigaretePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Cigarette or Cigarete</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;cigarette&quot; and &quot;cigarete&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Cigarete</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Cigarete&quot; is a common misspelling. The correct spelling is &quot;cigarette&quot; with two &quot;t&quot;s and an &quot;e&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Cigarette</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Cigarette&quot; is the correct spelling. It refers to a small cylinder of finely cut tobacco rolled in paper for smoking.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Cigarette (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A small cylinder of finely cut tobacco rolled in paper for smoking.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He lit a <strong>cigarette</strong> after dinner.</li>
                  <li>• Smoking <strong>cigarettes</strong> is harmful to your health.</li>
                  <li>• She bought a pack of <strong>cigarettes</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Cigarete (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Cigarete&quot; is a misspelling of &quot;cigarette&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Cigarete&quot; is not used in standard English.</li>
                  <li>• Always use <strong>cigarette</strong> for clarity and correctness.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Cigarette:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Smoke</li>
                <li>• Ciggy (slang)</li>
                <li>• Fag (British slang)</li>
                <li>• Tobacco stick</li>
                <li>• Roll-up</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Cigarete:</h4>
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
            <li>• <strong>Cigarette</strong> is spelled with two &quot;t&quot;s and an &quot;e&quot; at the end.</li>
            <li>• Refers to a small cylinder of tobacco for smoking.</li>
            <li>• &quot;Cigarete&quot; is never correct in any context.</li>
            <li>• The word &quot;cigarette&quot; comes from the French &quot;cigare&quot; meaning cigar.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;cigarete&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cigarete&quot; is never correct. The proper spelling is always &quot;cigarette.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;cigarette&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Cigarette&quot; is a small cylinder of finely cut tobacco rolled in paper for smoking.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;cigarette&quot; has two &quot;t&quot;s and ends with &quot;ette&quot; like other French-derived words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are there other common misspellings of &quot;cigarette&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, but &quot;cigarete&quot; is one of the most frequent. Always use &quot;cigarette&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Cigarette</strong> is the correct and standard spelling. &quot;Cigarete&quot; is never correct. Always use &quot;cigarette&quot; in your writing.</p>
      </div>
    </div>
  )
} 