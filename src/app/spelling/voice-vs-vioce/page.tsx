import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Voice or Vioce - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;voice&quot; and &quot;vioce&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VoiceVsViocePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Voice or Vioce</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;voice&quot; and &quot;vioce&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Vioce</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Vioce&quot; is a misspelling. The correct spelling is &quot;voice&quot; with the &quot;i&quot; before the &quot;c&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Voice</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Voice&quot; is the correct spelling. It refers to the sound produced in a person&apos;s larynx and uttered through the mouth, as speech or song.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Voice (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The sound produced in a person&apos;s larynx and uttered through the mouth, especially as speech or song.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She has a beautiful singing <strong>voice</strong>.</li>
                  <li>• Please lower your <strong>voice</strong> in the library.</li>
                  <li>• He lost his <strong>voice</strong> after cheering at the game.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Vioce (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Vioce&quot; is a misspelling of &quot;voice&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Vioce&quot; is not used in standard English.</li>
                  <li>• Always use <strong>voice</strong> when referring to sound or speech.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Voice:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Speech</li>
                <li>• Tone</li>
                <li>• Sound</li>
                <li>• Utterance</li>
                <li>• Expression</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Vioce:</h4>
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
            <li>• <strong>Voice</strong> is spelled with the &quot;i&quot; before the &quot;c&quot;.</li>
            <li>• Used to refer to the sound produced by humans or animals.</li>
            <li>• Can also mean to express an opinion or feeling.</li>
            <li>• &quot;Vioce&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;vox&quot; meaning &quot;sound&quot; or &quot;voice&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vioce&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;vioce&quot; is never correct. The proper spelling is always &quot;voice&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;voice&quot; has the &quot;i&quot; before the &quot;c&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;voice&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means the sound produced by a person or animal, or the expression of an opinion.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use &quot;voice&quot; in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;voice&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;voice&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;vioce&quot; often happens due to the transposition of the &quot;i&quot; and &quot;c&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Voice</strong> is the correct spelling with &quot;oi&quot; in the middle. It means the sound produced by speaking or singing. The misspelling &quot;vioce&quot; with &quot;io&quot; is never correct. Always use &quot;voice&quot; when referring to vocal sounds.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><Link href="/spelling/strength-vs-strengh" className="text-blue-700 hover:text-blue-900 underline">Strength vs Strengh</Link></li>
            <li><Link href="/spelling/weights-vs-weigths" className="text-blue-700 hover:text-blue-900 underline">Weights vs Weigths</Link></li>
            <li><Link href="/spelling/biscuit-vs-bisquit" className="text-blue-700 hover:text-blue-900 underline">Biscuit vs Bisquit</Link></li>
            <li><Link href="/spelling/bonfire-vs-bondfire" className="text-blue-700 hover:text-blue-900 underline">Bonfire vs Bondfire</Link></li>
            <li><Link href="/spelling/their-vs-thier" className="text-blue-700 hover:text-blue-900 underline">Their vs Thier</Link></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><Link href="/spelling/although-vs-allthough" className="text-purple-700 hover:text-purple-900 underline">Although vs Allthough</Link></li>
            <li><Link href="/spelling/cherry-vs-chery" className="text-purple-700 hover:text-purple-900 underline">Cherry vs Chery</Link></li>
            <li><Link href="/spelling/uniform-vs-unaform" className="text-purple-700 hover:text-purple-900 underline">Uniform vs Unaform</Link></li>
            <li><Link href="/spelling/berries-vs-berrys" className="text-purple-700 hover:text-purple-900 underline">Berries vs Berrys</Link></li>
            <li><Link href="/spelling/vigilance-vs-vigilence" className="text-purple-700 hover:text-purple-900 underline">Vigilance vs Vigilence</Link></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><Link href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</Link></li>
            <li><Link href="/grammar/declarative-sentence" className="text-green-700 hover:text-green-900 underline">Declarative Sentences</Link></li>
            <li><Link href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</Link></li>
            <li><Link href="/grammar/adjectives-starting-with-vowels" className="text-green-700 hover:text-green-900 underline">Adjectives Starting with Vowels</Link></li>
            <li><Link href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-green-700 hover:text-green-900 underline">Proper Nouns Worksheets</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 