import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Visitor or Visiter - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;visitor&quot; and &quot;visiter&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VisitorVsVisiterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Visitor or Visiter</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;visitor&quot; and &quot;visiter&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Visiter</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Visiter&quot; is a misspelling. The correct spelling is &quot;visitor&quot; with an &quot;o&quot; before the &quot;r&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Visitor</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Visitor&quot; is the correct spelling. It refers to a person visiting a place, especially socially or as a tourist.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Visitor (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person visiting a place, especially socially or as a tourist.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The museum had over 1,000 <strong>visitors</strong> last week.</li>
                  <li>• We have a <strong>visitor</strong> staying with us this weekend.</li>
                  <li>• Every <strong>visitor</strong> must sign in at the front desk.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Visiter (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Visiter&quot; is a misspelling of &quot;visitor&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Visiter&quot; is not used in standard English.</li>
                  <li>• Always use <strong>visitor</strong> when referring to someone visiting a place.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Visitor:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Guest</li>
                <li>• Caller</li>
                <li>• Tourist</li>
                <li>• Sightseer</li>
                <li>• Company</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Visiter:</h4>
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
            <li>• <strong>Visitor</strong> is spelled with an &quot;o&quot; before the &quot;r&quot;.</li>
            <li>• Used to refer to someone who visits a place temporarily.</li>
            <li>• &quot;Visiter&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;visitare&quot; meaning &quot;to go to see&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;visiter&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;visiter&quot; is never correct. The proper spelling is always &quot;visitor&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;visitor&quot; has an &quot;o&quot; before the &quot;r&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;visitor&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means a person who visits a place, especially socially or as a tourist.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use &quot;visitor&quot; in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;visitor&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;visitor&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;visiter&quot; often happens due to confusion with the verb &quot;visit&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Visitor</strong> is the correct spelling, meaning a person who visits a place. The misspelling &quot;visiter&quot; is never correct. Always use &quot;visitor&quot; when referring to someone visiting a place.</p>
      </div>
    </div>
  )
} 