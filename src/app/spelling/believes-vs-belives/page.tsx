import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Believes or Belives - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;believes&quot; and &quot;belives&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BelievesVsBelivesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Believes or Belives</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;believes&quot; and &quot;belives&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Belives</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Belives&quot; is a misspelling. The correct spelling is &quot;believes&quot; with &quot;e&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Believes</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Believes&quot; is the correct spelling. It is the third person singular form of the verb &quot;believe.&quot;</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Believes (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Third person singular form of &quot;believe&quot;; to accept something as true or real.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>believes</strong> in ghosts.</li>
                  <li>• He <strong>believes</strong> the story is true.</li>
                  <li>• The team <strong>believes</strong> they can win.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Belives (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Belives&quot; is a misspelling of &quot;believes&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Belives&quot; is not used in standard English.</li>
                  <li>• Always use <strong>believes</strong> when referring to third person singular belief.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Believes:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Thinks</li>
                <li>• Considers</li>
                <li>• Accepts</li>
                <li>• Trusts</li>
                <li>• Has faith in</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Belives:</h4>
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
            <li>• <strong>Believes</strong> is spelled with &quot;e&quot;, not without it.</li>
            <li>• The word comes from &quot;believe&quot; + &quot;-s&quot; for third person singular.</li>
            <li>• Used as a verb only.</li>
            <li>• Common in everyday language for expressing belief or faith.</li>
            <li>• &quot;Belives&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;belives&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;belives&quot; is never correct. The proper spelling is always &quot;believes.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;believe&quot; + &quot;s&quot; - the word has an &quot;e&quot; like &quot;believe.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between believes and believe?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Believe&quot; is the base form, while &quot;believes&quot; is the third person singular form (he/she/it believes).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can believes be used in other tenses?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Believes&quot; is specifically the present tense third person singular form.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation patterns or confusion with similar words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;believes&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: believes in God, believes the story, believes in love, believes in science, and believes in miracles.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Believes</strong> is the correct spelling with &quot;ie&quot;: be-lieves. It means to accept something as true or real. The misspelling &quot;belives&quot; is never correct. Always use &quot;believes&quot; when referring to accepting something as true.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/splendid-vs-spendid" className="text-blue-700 hover:text-blue-900 underline">Splendid vs Spendid</a></li>
            <li><a href="/spelling/behaviour-vs-behavor" className="text-blue-700 hover:text-blue-900 underline">Behaviour vs Behaver</a></li>
            <li><a href="/spelling/should-vs-shoud" className="text-blue-700 hover:text-blue-900 underline">Should vs Shoud</a></li>
            <li><a href="/spelling/similar-vs-silimar" className="text-blue-700 hover:text-blue-900 underline">Similar vs Silimar</a></li>
            <li><a href="/spelling/apparatus-vs-aparatus" className="text-blue-700 hover:text-blue-900 underline">Apparatus vs Aparatus</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/cassette-vs-casete" className="text-purple-700 hover:text-purple-900 underline">Cassette vs Casete</a></li>
            <li><a href="/spelling/technology-vs-tecnology" className="text-purple-700 hover:text-purple-900 underline">Technology vs Tecnology</a></li>
            <li><a href="/spelling/consensus-vs-concensus" className="text-purple-700 hover:text-purple-900 underline">Consensus vs Concensus</a></li>
            <li><a href="/spelling/running-vs-runing" className="text-purple-700 hover:text-purple-900 underline">Running vs Runing</a></li>
            <li><a href="/spelling/attacked-vs-attacted" className="text-purple-700 hover:text-purple-900 underline">Attacked vs Attacted</a></li>
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