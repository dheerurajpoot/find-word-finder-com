import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Angry or Angrey - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;angry&quot; and &quot;angrey&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AngryVsAngreyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Angry or Angrey</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;angry&quot; and &quot;angrey&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Angrey</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Angrey&quot; is a misspelling. The correct spelling is &quot;angry&quot; with &quot;y&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Angry</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Angry&quot; is the correct spelling. It means feeling or showing strong annoyance, displeasure, or hostility.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Angry (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Feeling or showing strong annoyance, displeasure, or hostility.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He was <strong>angry</strong> about the delay.</li>
                  <li>• She gave him an <strong>angry</strong> look.</li>
                  <li>• The <strong>angry</strong> crowd demanded answers.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Angrey (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Angrey&quot; is a misspelling of &quot;angry&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Angrey&quot; is not used in standard English.</li>
                  <li>• Always use <strong>angry</strong> when referring to strong annoyance or displeasure.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Angry:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Furious</li>
                <li>• Irate</li>
                <li>• Annoyed</li>
                <li>• Enraged</li>
                <li>• Incensed</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Angrey:</h4>
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
            <li>• <strong>Angry</strong> is spelled with &quot;y&quot; at the end.</li>
            <li>• Used to describe strong feelings of annoyance or displeasure.</li>
            <li>• The word comes from Old Norse &quot;angr&quot; meaning &quot;grief, sorrow&quot;.</li>
            <li>• &quot;Angrey&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;angrey&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;angrey&quot; is never correct. The proper spelling is always &quot;angry.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;y&quot; at the end of &quot;angry.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does angry mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means feeling or showing strong annoyance, displeasure, or hostility.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;angrey&quot; occurs because people replace the &quot;y&quot; with &quot;ey&quot; by mistake.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Angry</strong> is the correct spelling with &quot;y&quot; at the end. It means feeling or showing strong annoyance, displeasure, or hostility. The misspelling &quot;angrey&quot; is never correct. Use &quot;angry&quot; in all contexts requiring this meaning.</p>
      </div>
    </div>
  )
} 