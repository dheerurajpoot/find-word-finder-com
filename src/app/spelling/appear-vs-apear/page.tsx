import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Appear or Apear - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;appear&quot; and &quot;apear&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AppearVsApearPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Appear or Apear</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;appear&quot; and &quot;apear&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Apear</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Apear&quot; is a misspelling. The correct spelling is &quot;appear&quot; with two &quot;p&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Appear</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Appear&quot; is the correct spelling. It means to become visible or to seem to be something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Appear (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To become visible; to come into sight; to seem to be something; to present oneself.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The sun will <strong>appear</strong> at dawn.</li>
                  <li>• She will <strong>appear</strong> in court tomorrow.</li>
                  <li>• It <strong>appears</strong> to be raining outside.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Apear (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Apear&quot; is a misspelling of &quot;appear&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Apear&quot; is not used in standard English.</li>
                  <li>• Always use <strong>appear</strong> when referring to becoming visible.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Appear:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Emerge</li>
                <li>• Show up</li>
                <li>• Surface</li>
                <li>• Materialize</li>
                <li>• Seem</li>
                <li>• Look</li>
                <li>• Present</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Apear:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Appear</strong> is spelled with two &quot;p&quot;s at the beginning.</li>
            <li>• The word comes from Latin &quot;apparere&quot; meaning to appear.</li>
            <li>• Can mean both &quot;become visible&quot; and &quot;seem to be.&quot;</li>
            <li>• Often used in formal contexts and legal proceedings.</li>
            <li>• &quot;Apear&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;apear&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;apear&quot; is never correct. The proper spelling is always &quot;appear.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;app&quot; + &quot;ear&quot; - appear means to make something visible to your ears (in a figurative sense).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between appear and seem?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Appear can mean both &quot;become visible&quot; and &quot;seem to be,&quot; while seem only means to give the impression of being something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can appear be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;appear&quot; is very appropriate in formal writing and legal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;apear&quot; likely occurs because of confusion about the double &quot;p&quot; or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;appear&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: appear in court, appear to be, and appear on stage.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is appear always about visual things?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, appear can refer to anything that becomes visible or seems to be true, not just visual things.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can appear be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;appear&quot; is only a verb. The noun form would be &quot;appearance.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Appear</strong> is the correct spelling with two &quot;p&quot;s. It means to become visible or to seem to be something. The misspelling &quot;apear&quot; is never correct. Use &quot;appear&quot; when referring to something becoming visible or seeming to be the case.</p>
      </div>
    </div>
  )
} 