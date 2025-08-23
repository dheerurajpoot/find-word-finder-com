import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Their or Thier - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;their&quot; and &quot;thier&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TheirVsThierPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Their or Thier</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;their&quot; and &quot;thier&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Thier</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Thier&quot; is a misspelling. The correct spelling is &quot;their&quot; with &quot;ei&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Their</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Their&quot; is the correct spelling. It means belonging to them.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Their (determiner):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Belonging to or associated with people or things previously mentioned or easily identified.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• <strong>Their</strong> house is beautiful.</li>
                  <li>• The students finished <strong>their</strong> homework.</li>
                  <li>• <strong>Their</strong> car broke down.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Thier (determiner):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Thier&quot; is a misspelling of &quot;their&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Thier&quot; is not used in standard English.</li>
                  <li>• Always use <strong>their</strong> when referring to possession.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Their:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Belonging to them</li>
                <li>• Of them</li>
                <li>• Possessed by them</li>
                <li>• Associated with them</li>
                <li>• Owned by them</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Thier:</h4>
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
            <li>• <strong>Their</strong> is spelled with &quot;ei&quot; in the middle.</li>
            <li>• It is a possessive determiner (their, his, her, its).</li>
            <li>• &quot;Thier&quot; is never correct in any context.</li>
            <li>• The word comes from Old Norse &quot;þeirra&quot; meaning &quot;their.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thier&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thier&quot; is never correct. The proper spelling is always &quot;their.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;their&quot; has &quot;ei&quot; in the middle - think of it as &quot;th-ei-r.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;their&quot; and &quot;there&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Their&quot; is a possessive determiner, while &quot;there&quot; refers to a location or existence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;their&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;their&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;their&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;thier&quot; often happens by transposing the letters &quot;e&quot; and &quot;i.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;their&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: their own, their way, their turn, and their best.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;their&quot; always about possession?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;their&quot; always indicates possession or association with a group.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;their&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;their&quot; is only used as a possessive determiner.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Their</strong> is the correct spelling with &quot;ei&quot;: their. It means belonging to them. The misspelling &quot;thier&quot; is never correct. Always use &quot;their&quot; when referring to possession by multiple people.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/although-vs-allthough" className="text-blue-700 hover:text-blue-900 underline">Although vs Allthough</a></li>
            <li><a href="/spelling/cherry-vs-chery" className="text-blue-700 hover:text-blue-900 underline">Cherry vs Chery</a></li>
            <li><a href="/spelling/uniform-vs-unaform" className="text-blue-700 hover:text-blue-900 underline">Uniform vs Unaform</a></li>
            <li><a href="/spelling/berries-vs-berrys" className="text-blue-700 hover:text-blue-900 underline">Berries vs Berrys</a></li>
            <li><a href="/spelling/vigilance-vs-vigilence" className="text-blue-700 hover:text-blue-900 underline">Vigilance vs Vigilence</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/told-vs-telled" className="text-purple-700 hover:text-purple-900 underline">Told vs Telled</a></li>
            <li><a href="/spelling/affect-vs-effect" className="text-purple-700 hover:text-purple-900 underline">Affect vs Effect</a></li>
            <li><a href="/spelling/withhold-vs-withold" className="text-purple-700 hover:text-purple-900 underline">Withhold vs Withold</a></li>
            <li><a href="/spelling/biscuit-vs-buiscuit" className="text-purple-700 hover:text-purple-900 underline">Biscuit vs Buiscuit</a></li>
            <li><a href="/spelling/access-vs-akcess" className="text-purple-700 hover:text-purple-900 underline">Access vs Akcess</a></li>
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