import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Before or Befour - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;before&quot; and &quot;befour&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BeforeVsBefourPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Before or Befour</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;before&quot; and &quot;befour&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Befour</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Befour&quot; is a misspelling. The correct spelling is &quot;before&quot; with &quot;e&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Before</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Before&quot; is the correct spelling. It means earlier than, in front of, or prior to.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Before (preposition/adverb/conjunction):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Earlier than; in front of; prior to; in advance of.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I&apos;ll call you <strong>before</strong> I leave.</li>
                  <li>• She was here <strong>before</strong> you arrived.</li>
                  <li>• Please read the instructions <strong>before</strong> starting.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Befour (preposition/adverb/conjunction):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Befour&quot; is a misspelling of &quot;before&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Befour&quot; is not used in standard English.</li>
                  <li>• Always use <strong>before</strong> when referring to time or position.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Before:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Prior to</li>
                <li>• Earlier than</li>
                <li>• In front of</li>
                <li>• Preceding</li>
                <li>• Ahead of</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Befour:</h4>
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
            <li>• <strong>Before</strong> is spelled with &quot;e&quot; at the end - this is the standard English spelling.</li>
            <li>• The word comes from Old English &quot;beforan&quot; meaning in front of or earlier.</li>
            <li>• &quot;Befour&quot; is never correct in any context.</li>
            <li>• Can be used as preposition, adverb, or conjunction.</li>
            <li>• Common in both formal and informal contexts.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;befour&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;befour&quot; is never correct. The proper spelling is always &quot;before.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does before mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Before means earlier than, in front of, prior to, or in advance of.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;before&quot; ends with &quot;e&quot; - think of &quot;be&quot; + &quot;fore.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between before and after?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Before&quot; refers to earlier time or position, while &quot;after&quot; refers to later time or position.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can before be used as a conjunction?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;before&quot; can be used as a conjunction to connect clauses.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases with before?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: before long, before now, before you know it, and before time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is before used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;before&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can before be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;before&quot; is only used as a preposition, adverb, or conjunction.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Before</strong> is the correct spelling with &quot;e&quot; at the end. It means earlier than, in front of, or prior to. The misspelling &quot;befour&quot; is never correct in English.</p>
      </div>
    </div>
  )
} 