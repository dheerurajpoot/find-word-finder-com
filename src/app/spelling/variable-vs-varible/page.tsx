import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Variable or Varible - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;variable&quot; and &quot;varible&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VariableVsVariblePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Variable or Varible</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;variable&quot; and &quot;varible&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Varible</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Varible&quot; is a misspelling. The correct spelling is &quot;variable&quot; with an &quot;a&quot; after the &quot;v&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Variable</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Variable&quot; is the correct spelling. It means not consistent or having a fixed pattern; liable to change. In mathematics, it is a symbol for a quantity that may change.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Variable (noun/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Not consistent or having a fixed pattern; liable to change. In mathematics, a symbol for a quantity that may change.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The weather is highly <strong>variable</strong> in spring.</li>
                  <li>• In algebra, &quot;x&quot; is a <strong>variable</strong>.</li>
                  <li>• The results are <strong>variable</strong> depending on the method used.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Varible:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Varible&quot; is a misspelling of &quot;variable&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Varible&quot; is not used in standard English.</li>
                  <li>• Always use <strong>variable</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Variable:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Changeable</li>
                <li>• Unstable</li>
                <li>• Inconstant</li>
                <li>• Shifting</li>
                <li>• Mutable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Varible:</h4>
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
            <li>• <strong>Variable</strong> is spelled with an &quot;a&quot; after the &quot;v&quot;.</li>
            <li>• &quot;Varible&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;variabilis&quot; meaning &quot;changeable&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;varible&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;varible&quot; is never correct. The proper spelling is always &quot;variable&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;variable&quot; has an &quot;a&quot; after the &quot;v&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does variable mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Variable&quot; means not consistent or having a fixed pattern; liable to change.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;variable&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;varible&quot; often happens by omitting the &quot;a&quot; after the &quot;v&quot;. Always use &quot;a&quot; after the &quot;v&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;variable&quot; used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;variable&quot; is the correct spelling in all contexts, both formal and informal.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Variable</strong> is the correct spelling, meaning changeable or not fixed. The misspelling &quot;varible&quot; is never correct. Always use &quot;variable&quot; in your writing.</p>
      </div>
    </div>
  )
} 