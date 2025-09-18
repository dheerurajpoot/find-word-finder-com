import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Abandon or Abbandon - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;abandon&quot; and &quot;abbandon&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AbandonVsAbbandonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Abandon or Abbandon</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;abandon&quot; and &quot;abbandon&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Abbandon</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Abbandon&quot; is a common misspelling. The correct spelling is &quot;abandon&quot; with a single &apos;b&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Abandon</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Abandon&quot; is the correct spelling. It means to leave permanently or give up completely.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Abandon (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To leave permanently, give up completely, or desert someone or something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• They had to <strong>abandon</strong> their car in the snowstorm.</li>
                  <li>• She refused to <strong>abandon</strong> her dreams despite the challenges.</li>
                  <li>• The building was <strong>abandoned</strong> after the fire.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Abbandon (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Abbandon&quot; is not a standard English word and is considered a misspelling of &quot;abandon&quot;.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Abbandon&quot; is not used in standard English for &quot;abandon&quot;.</li>
                  <li>• Always use <strong>abandon</strong> when referring to leaving permanently or giving up.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Abandon:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Desert</li>
                <li>• Forsake</li>
                <li>• Relinquish</li>
                <li>• Surrender</li>
                <li>• Give up</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Abbandon:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word in this context)</li>
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
            <li>• <strong>Abandon</strong> is spelled with a single &apos;b&apos;, not double.</li>
            <li>• Used to describe leaving permanently or giving up completely.</li>
            <li>• The opposite is &quot;keep&quot; or &quot;maintain&quot;.</li>
            <li>• &quot;Abbandon&quot; is not correct in this context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;abbandon&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;abbandon&quot; is never correct as a spelling for &quot;abandon&quot;. Always use &quot;abandon&quot; for leaving permanently or giving up.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;abandon&quot; has a single &apos;b&apos;, not double.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;abandon&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;abandon&quot; can refer to leaving places, people, or giving up on ideas or plans.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;abandon&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: abandon ship, abandon hope, abandon all hope, abandon the idea, abandon the project.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;abbandon&quot; happens because double &apos;b&apos; is common in English, but &quot;abandon&quot; only has one.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Abandon</strong> is the correct spelling with a single &apos;b&apos;. It means to leave permanently or give up completely. The misspelling &quot;abbandon&quot; is never correct. Use &quot;abandon&quot; in contexts involving leaving, deserting, or giving up.</p>
      </div>
    </div>
  )
} 