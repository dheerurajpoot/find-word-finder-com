import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accomplice or Acomplice - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accomplice&quot; and &quot;acomplice&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccompliceVsAcomplicePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Accomplice or Acomplice</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;accomplice&quot; and &quot;acomplice&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Acomplice</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Acomplice&quot; is a misspelling. The correct spelling is &quot;accomplice&quot; with double &quot;c&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accomplice</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Accomplice&quot; is the correct spelling. It means a person who helps another commit a crime.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Accomplice (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person who helps another commit a crime or wrongdoing; a partner in crime.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He was charged as an <strong>accomplice</strong> to the robbery.</li>
                  <li>• The police arrested the <strong>accomplice</strong> as well.</li>
                  <li>• She was his unwitting <strong>accomplice</strong> in the scheme.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Acomplice (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Acomplice&quot; is a misspelling of &quot;accomplice&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Acomplice&quot; is not used in standard English.</li>
                  <li>• Always use <strong>accomplice</strong> when referring to a partner in crime.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Accomplice:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Partner in crime</li>
                <li>• Collaborator</li>
                <li>• Co-conspirator</li>
                <li>• Accessory</li>
                <li>• Helper</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Acomplice:</h4>
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
          <li>• <strong>Accomplice</strong> has double &quot;c&quot; at the beginning.</li>
          <li>• The word comes from Old French &quot;acomplice&quot; meaning partner or associate.</li>
          <li>• Used in legal, criminal, and formal writing contexts.</li>
          <li>• Common in news reports, legal documents, and crime fiction.</li>
          <li>• &quot;Acomplice&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;acomplice&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;acomplice&quot; is never correct. The proper spelling is always &quot;accomplice.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ac&quot; + &quot;complice&quot; - like &quot;ac&quot; with &quot;complice&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between accomplice and accessory?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: An &quot;accomplice&quot; actively participates in the crime, while an &quot;accessory&quot; helps before or after the crime.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can accomplice be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;accomplice&quot; is very common in formal writing, especially in legal and news contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;acomplice&quot; likely occurs because people forget the double &quot;c&quot; at the beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accomplice&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: accomplice to murder, accomplice in crime, willing accomplice, unwitting accomplice, and accomplice after the fact.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Accomplice</strong> is the correct spelling with double &quot;c&quot; at the beginning. It means a person who helps another commit a crime. The misspelling &quot;acomplice&quot; is never correct.</p>
      </div>
    </div>
  )
} 