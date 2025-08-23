import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Told or Telled - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;told&quot; and &quot;telled&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ToldVsTelledPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Told or Telled</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;told&quot; and &quot;telled&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Telled</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Telled&quot; is a misspelling. The correct spelling is &quot;told&quot; - the past tense of &quot;tell.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Told</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Told&quot; is the correct spelling. It is the past tense and past participle of &quot;tell.&quot;</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Told (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense and past participle of tell; communicated information to someone.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I <strong>told</strong> him the truth.</li>
                  <li>• She <strong>told</strong> me about her trip.</li>
                  <li>• They had <strong>told</strong> us everything.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Telled (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Telled&quot; is a misspelling of &quot;told&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Telled&quot; is not used in standard English.</li>
                  <li>• Always use <strong>told</strong> as the past tense of tell.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Told:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Informed</li>
                <li>• Said</li>
                <li>• Communicated</li>
                <li>• Revealed</li>
                <li>• Disclosed</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Telled:</h4>
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
            <li>• <strong>Told</strong> is the irregular past tense of &quot;tell.&quot;</li>
            <li>• It does not follow the regular -ed pattern like &quot;telled&quot; would suggest.</li>
            <li>• &quot;Telled&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;tellan&quot; meaning &quot;to count, tell.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;telled&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;telled&quot; is never correct. The proper spelling is always &quot;told.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;tell&quot; is an irregular verb - its past tense is &quot;told,&quot; not &quot;telled.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;told&quot; and &quot;said&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Told&quot; implies communication to someone specific, while &quot;said&quot; is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;told&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;told&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;told&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;telled&quot; often happens because people expect regular verb conjugation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;told&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: told the truth, told a story, told me about, and told you so.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;told&quot; always about communication?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;told&quot; always refers to communicating information to someone.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;told&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;told&quot; is only used as a verb (past tense and past participle of tell).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Told</strong> is the correct spelling for both past tense and past participle: told. It means to communicate information. The misspelling &quot;telled&quot; is never correct. Always use &quot;told&quot; when referring to past communication.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/affect-vs-effect" className="text-blue-700 hover:text-blue-900 underline">Affect vs Effect</a></li>
            <li><a href="/spelling/withhold-vs-withold" className="text-blue-700 hover:text-blue-900 underline">Withhold vs Withold</a></li>
            <li><a href="/spelling/biscuit-vs-buiscuit" className="text-blue-700 hover:text-blue-900 underline">Biscuit vs Buiscuit</a></li>
            <li><a href="/spelling/access-vs-akcess" className="text-blue-700 hover:text-blue-900 underline">Access vs Akcess</a></li>
            <li><a href="/spelling/complement-vs-compalement" className="text-blue-700 hover:text-blue-900 underline">Complement vs Compalement</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/temperament-vs-temperment" className="text-purple-700 hover:text-purple-900 underline">Temperament vs Temperment</a></li>
            <li><a href="/spelling/comrade-vs-comrad" className="text-purple-700 hover:text-purple-900 underline">Comrade vs Comrad</a></li>
            <li><a href="/spelling/completion-vs-complition" className="text-purple-700 hover:text-purple-900 underline">Completion vs Complition</a></li>
            <li><a href="/spelling/squeeze-vs-squeese" className="text-purple-700 hover:text-purple-900 underline">Squeeze vs Squeese</a></li>
            <li><a href="/spelling/accommodate-vs-accomodate" className="text-purple-700 hover:text-purple-900 underline">Accommodate vs Accomodate</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/declarative-sentence" className="text-green-700 hover:text-green-900 underline">Declarative Sentences</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/adjectives-starting-with-vowels" className="text-green-700 hover:text-green-900 underline">Adjectives Starting with Vowels</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-green-700 hover:text-green-900 underline">Proper Nouns Worksheets</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 