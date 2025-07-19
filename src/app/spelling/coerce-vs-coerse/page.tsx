import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Coerce or Coerse - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;coerce&quot; and &quot;coerse&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CoerceVsCoersePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Coerce or Coerse</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;coerce&quot; and &quot;coerse&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Coerse</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Coerse&quot; is a misspelling. The correct spelling is &quot;coerce&quot; with a &quot;c&quot; before the &quot;e&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Coerce</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Coerce&quot; is the correct spelling. It means to force someone to do something by using threats or pressure.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Coerce (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To force someone to do something against their will by using threats, pressure, or intimidation.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The suspect was <strong>&quot;coerced&quot;</strong> into confessing.</li>
                  <li>• They tried to <strong>&quot;coerce&quot;</strong> him into signing the contract.</li>
                  <li>• It is illegal to <strong>&quot;coerce&quot;</strong> someone into giving up their rights.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Coerse (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Coerse&quot; is a misspelling of &quot;coerce&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Coerse&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;coerce&quot;</strong> when referring to forcing someone.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Coerce:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Force</li>
                <li>• Compel</li>
                <li>• Pressure</li>
                <li>• Intimidate</li>
                <li>• Bully</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Coerse:</h4>
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
            <li>• <strong>&quot;Coerce&quot;</strong> is spelled with a &quot;c&quot; before the &quot;e&quot;.</li>
            <li>• Used to describe forcing someone to do something against their will.</li>
            <li>• The word comes from Latin &quot;coercere&quot; meaning &quot;to restrain&quot;.</li>
            <li>• &quot;Coerse&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;coerse&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;coerse&quot; is never correct. The proper spelling is always &quot;coerce.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;c&quot; before the &quot;e&quot; in &quot;coerce&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;coerce&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Coerce&quot; means to force someone to do something by using threats or pressure.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;coerse&quot; may occur due to confusion about the vowel sequence.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Coerce&quot;</strong> is the correct spelling with a &quot;c&quot; before the &quot;e&quot;. It means to force someone to do something by threats or pressure. The misspelling &quot;coerse&quot; is never correct. Use &quot;coerce&quot; in all contexts.</p>
      </div>
    </div>
  )
} 