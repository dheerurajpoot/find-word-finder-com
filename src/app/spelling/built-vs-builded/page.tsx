import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Built or Builded - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;built&quot; and &quot;builded&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BuiltVsBuildedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Built or Builded</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;built&quot; and &quot;builded&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Builded</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Builded&quot; is a misspelling. The correct past tense and past participle of &quot;build&quot; is &quot;built.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Built</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Built&quot; is the correct past tense and past participle of the verb &quot;build.&quot;</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Built (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense and past participle of &quot;build&quot; - to construct or create something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• They <strong>built</strong> a new house last year.</li>
                  <li>• The bridge was <strong>built</strong> in 1950.</li>
                  <li>• She has <strong>built</strong> a successful business.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Builded (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Builded&quot; is a misspelling of &quot;built&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Builded&quot; is not used in standard English.</li>
                  <li>• Always use <strong>built</strong> as the past tense of build.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Built:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Constructed</li>
                <li>• Erected</li>
                <li>• Assembled</li>
                <li>• Created</li>
                <li>• Formed</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Builded:</h4>
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
            <li>• <strong>Built</strong> is an irregular verb form - it doesn&apos;t follow the regular -ed pattern.</li>
            <li>• The verb &quot;build&quot; conjugates as: build (present), built (past), built (past participle).</li>
            <li>• &quot;Builded&quot; was used in older English but is now considered archaic or incorrect.</li>
            <li>• &quot;Built&quot; is used for both past tense and past participle forms.</li>
            <li>• The pronunciation is /bɪlt/ with a short &quot;i&quot; sound.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;builded&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;builded&quot; is not correct in modern English. Use &quot;built&quot; for both past tense and past participle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as an irregular verb like &quot;feel&quot; (felt) or &quot;keep&quot; (kept) - &quot;build&quot; becomes &quot;built.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between built and constructed?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Built&quot; is more general, while &quot;constructed&quot; often implies a more systematic or technical building process.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can built be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;built&quot; can be used as an adjective, as in &quot;well-built&quot; or &quot;built-in.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;builded&quot; occurs because most English verbs follow the regular -ed pattern for past tense.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;built&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: built-in, well-built, built-up, built environment, and built to last.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can built be used in passive voice?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;built&quot; is commonly used in passive constructions, as in &quot;The house was built in 1990.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is built always about physical construction?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;built&quot; can refer to creating anything, including relationships, businesses, or abstract concepts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Built</strong> is the correct past tense and past participle of &quot;build.&quot; It&apos;s an irregular verb that doesn&apos;t follow the regular -ed pattern. The misspelling &quot;builded&quot; is never correct in modern English. Use &quot;built&quot; for all past tense and past participle forms of the verb &quot;build.&quot;</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/separate-vs-seperate" className="text-blue-700 hover:text-blue-900 underline">Separate vs Seperate</a></li>
            <li><a href="/spelling/against-vs-againstt" className="text-blue-700 hover:text-blue-900 underline">Against vs Againstt</a></li>
            <li><a href="/spelling/barely-vs-bearly" className="text-blue-700 hover:text-blue-900 underline">Barely vs Bearly</a></li>
            <li><a href="/spelling/definitely-vs-definately" className="text-blue-700 hover:text-blue-900 underline">Definitely vs Definately</a></li>
            <li><a href="/spelling/occurred-vs-occured" className="text-blue-700 hover:text-blue-900 underline">Occurred vs Occured</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/felt-vs-feeled" className="text-purple-700 hover:text-purple-900 underline">Felt vs Feeled</a></li>
            <li><a href="/spelling/kept-vs-keeped" className="text-purple-700 hover:text-purple-900 underline">Kept vs Keeped</a></li>
            <li><a href="/spelling/slept-vs-sleeped" className="text-purple-700 hover:text-purple-900 underline">Slept vs Sleeped</a></li>
            <li><a href="/spelling/wept-vs-weeped" className="text-purple-700 hover:text-purple-900 underline">Wept vs Weeped</a></li>
            <li><a href="/spelling/crept-vs-creeped" className="text-purple-700 hover:text-purple-900 underline">Crept vs Creeped</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/verbs" className="text-green-700 hover:text-green-900 underline">Verbs Guide</a></li>
            <li><a href="/grammar/irregular-verbs" className="text-green-700 hover:text-green-900 underline">Irregular Verbs</a></li>
            <li><a href="/grammar/parts-of-speech" className="text-green-700 hover:text-green-900 underline">Parts of Speech</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/verb-tenses" className="text-green-700 hover:text-green-900 underline">Verb Tenses</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 