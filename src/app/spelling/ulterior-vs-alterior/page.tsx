import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Ulterior or Alterior - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;ulterior&quot; and &quot;alterior&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function UlteriorVsAlteriorPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Ulterior or Alterior</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;ulterior&quot; and &quot;alterior&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alterior</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alterior&quot; is a misspelling. The correct spelling is &quot;ulterior&quot; with &quot;ul&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Ulterior</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Ulterior&quot; is the correct spelling. It means hidden, concealed, or beyond what is obvious.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Ulterior (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Hidden, concealed, or beyond what is obvious; having a hidden purpose or motive.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He had <strong>ulterior</strong> motives for helping.</li>
                  <li>• The <strong>ulterior</strong> purpose was not immediately clear.</li>
                  <li>• She suspected an <strong>ulterior</strong> agenda.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alterior (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alterior&quot; is a misspelling of &quot;ulterior&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Alterior&quot; is not used in standard English.</li>
                  <li>• Always use <strong>ulterior</strong> when referring to hidden motives.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Ulterior:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Hidden</li>
                <li>• Concealed</li>
                <li>• Secret</li>
                <li>• Covert</li>
                <li>• Underlying</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alterior:</h4>
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
            <li>• <strong>Ulterior</strong> is spelled with &quot;ul&quot; at the beginning, not &quot;al.&quot;</li>
            <li>• Used to describe hidden motives, purposes, or meanings.</li>
            <li>• Often used in the phrase &quot;ulterior motives.&quot;</li>
            <li>• The word comes from Latin &quot;ulterior&quot; meaning &quot;farther.&quot;</li>
            <li>• &quot;Alterior&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alterior&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alterior&quot; is never correct. The proper spelling is always &quot;ulterior.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ul-terior&quot; - it starts with &quot;ul&quot; like &quot;ultimate&quot; or &quot;ultra.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does ulterior motive mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: An ulterior motive is a hidden reason or purpose that is not immediately obvious or stated.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can ulterior be used positively?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: While &quot;ulterior&quot; often has negative connotations, it can be neutral - it simply means hidden or concealed.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;ulterior&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: ulterior motives, ulterior purpose, and ulterior meaning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alterior&quot; occurs because people think it should start with &quot;al&quot; like many other words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can ulterior be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;ulterior&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is ulterior always about negative intentions?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ulterior&quot; can refer to any hidden purpose, whether positive, negative, or neutral.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Ulterior</strong> is the correct spelling with &quot;ul&quot; at the beginning. It means hidden, concealed, or beyond what is obvious. The misspelling &quot;alterior&quot; is never correct. Use &quot;ulterior&quot; to describe hidden motives, purposes, or meanings.</p>
      </div>
    </div>
  )
} 