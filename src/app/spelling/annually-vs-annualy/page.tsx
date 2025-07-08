import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Annually or Annualy - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;annually&quot; and &quot;annualy&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AnnuallyVsAnnualyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Annually or Annualy</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;annually&quot; and &quot;annualy&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Annualy</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Annualy&quot; is a misspelling. The correct spelling is &quot;annually&quot; with double &quot;l&quot; before the &quot;y&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Annually</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Annually&quot; is the correct spelling. It means once a year; every year.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Annually (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Once a year; every year.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The event is held <strong>annually</strong>.</li>
                  <li>• Employees receive bonuses <strong>annually</strong>.</li>
                  <li>• The report is published <strong>annually</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Annualy (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Annualy&quot; is a misspelling of &quot;annually&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Annualy&quot; is not used in standard English.</li>
                  <li>• Always use <strong>annually</strong> when referring to something that happens every year.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Annually:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Yearly</li>
                <li>• Once a year</li>
                <li>• Every year</li>
                <li>• Per annum</li>
                <li>• Each year</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Annualy:</h4>
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
            <li>• <strong>Annually</strong> is spelled with double &quot;l&quot; before the &quot;y&quot;.</li>
            <li>• Used to describe something that happens every year.</li>
            <li>• The word comes from Latin &quot;annualis&quot; meaning &quot;yearly&quot;.</li>
            <li>• &quot;Annualy&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;annualy&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;annualy&quot; is never correct. The proper spelling is always &quot;annually.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the double &quot;l&quot; before the &quot;y&quot; in &quot;annually.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does annually mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means once a year; every year.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;annualy&quot; occurs because people omit one &quot;l&quot; by mistake.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Annually</strong> is the correct spelling with double &quot;l&quot; before the &quot;y&quot;. It means once a year; every year. The misspelling &quot;annualy&quot; is never correct. Use &quot;annually&quot; in all contexts requiring this meaning.</p>
      </div>
    </div>
  )
} 