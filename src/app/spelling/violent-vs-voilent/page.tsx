import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Violent or Voilent - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;violent&quot; and &quot;voilent&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ViolentVsVoilentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Violent or Voilent</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;violent&quot; and &quot;voilent&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Voilent</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Voilent&quot; is a misspelling. The correct spelling is &quot;violent&quot; with the &quot;i&quot; before the &quot;o&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Violent</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Violent&quot; is the correct spelling. It means using or involving physical force intended to hurt, damage, or kill someone or something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Violent (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Using or involving physical force intended to hurt, damage, or kill someone or something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The movie contained several <strong>violent</strong> scenes.</li>
                  <li>• He was arrested for <strong>violent</strong> behavior.</li>
                  <li>• The storm was extremely <strong>violent</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Voilent (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Voilent&quot; is a misspelling of &quot;violent&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Voilent&quot; is not used in standard English.</li>
                  <li>• Always use <strong>violent</strong> when referring to forceful actions.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Violent:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Brutal</li>
                <li>• Fierce</li>
                <li>• Savage</li>
                <li>• Aggressive</li>
                <li>• Forceful</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Voilent:</h4>
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
            <li>• <strong>Violent</strong> is spelled with the &quot;i&quot; before the &quot;o&quot;.</li>
            <li>• It is an adjective describing forceful or aggressive actions.</li>
            <li>• &quot;Voilent&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;violentus&quot; meaning &quot;vehement&quot; or &quot;forceful&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;voilent&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;voilent&quot; is never correct. The proper spelling is always &quot;violent&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;violent&quot; has the &quot;i&quot; before the &quot;o&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;violent&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means using or involving physical force intended to hurt, damage, or kill someone or something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use &quot;violent&quot; in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;violent&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;violent&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;voilent&quot; often happens by transposing the &quot;i&quot; and &quot;o&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Violent</strong> is the correct spelling, meaning using or involving physical force. The misspelling &quot;voilent&quot; is never correct. Always use &quot;violent&quot; when referring to forceful actions.</p>
      </div>
    </div>
  )
} 