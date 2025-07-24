import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Unequalled or Unequaled - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;unequalled&quot; and &quot;unequaled&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function UnequalledVsUnequaledPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Unequalled or Unequaled</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;unequalled&quot; and &quot;unequaled&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Unequaled (US)</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Unequaled&quot; is the American English spelling. In British English, &quot;unequalled&quot; is preferred.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Unequalled (UK)</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Unequalled&quot; is the British English spelling. Both forms mean unmatched or without equal.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Unequalled (adjective, UK):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Unmatched; without equal.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She has an <strong>unequalled</strong> talent for music.</li>
                  <li>• The view from the summit is <strong>unequalled</strong>.</li>
                  <li>• His achievements are <strong>unequalled</strong> in the field.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Unequaled (adjective, US):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Unmatched; without equal. (American English spelling)</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• She has an <strong>unequaled</strong> talent for music.</li>
                  <li>• The view from the summit is <strong>unequaled</strong>.</li>
                  <li>• His achievements are <strong>unequaled</strong> in the field.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Unequalled/Unequaled:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Unmatched</li>
                <li>• Peerless</li>
                <li>• Incomparable</li>
                <li>• Supreme</li>
                <li>• Unparalleled</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Unequaled/Unequalled:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (Both are correct, but &quot;unequalled&quot; is UK, &quot;unequaled&quot; is US spelling)</li>
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
            <li>• <strong>Unequalled</strong> is the British English spelling; <strong>unequaled</strong> is American English.</li>
            <li>• Both mean unmatched or without equal.</li>
            <li>• Use the spelling appropriate for your audience.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;unequalled&quot; or &quot;unequaled&quot; correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both are correct. &quot;Unequalled&quot; is British English, &quot;unequaled&quot; is American English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does unequalled/unequaled mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means unmatched or without equal.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use either spelling in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, but use the version appropriate for your region or audience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are there other words with UK/US spelling differences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, such as &quot;travelled&quot; (UK) vs. &quot;traveled&quot; (US).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Unequalled</strong> (UK) and <strong>unequaled</strong> (US) both mean unmatched or without equal. Use the spelling that matches your audience or region.</p>
      </div>
    </div>
  )
} 