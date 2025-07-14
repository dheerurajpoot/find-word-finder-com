import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Camouflage or Camoflage - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;camouflage&quot; and &quot;camoflage&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CamouflageVsCamoflagePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Camouflage or Camoflage</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;camouflage&quot; and &quot;camoflage&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Camoflage</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Camoflage&quot; is a misspelling. The correct spelling is &quot;camouflage&quot; with a &quot;u&quot; after the &quot;o&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Camouflage</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Camouflage&quot; is the correct spelling. It means to hide or disguise something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Camouflage (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The act of hiding or disguising something to blend in with its surroundings.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The soldier wore <strong>camouflage</strong> to blend into the forest.</li>
                  <li>• The chameleon uses <strong>camouflage</strong> to hide from predators.</li>
                  <li>• They tried to <strong>camouflage</strong> their true intentions.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Camoflage (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Camoflage&quot; is a misspelling of &quot;camouflage&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Camoflage&quot; is not used in standard English.</li>
                  <li>• Always use <strong>camouflage</strong> when referring to hiding or disguise.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Camouflage:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Disguise</li>
                <li>• Concealment</li>
                <li>• Cover</li>
                <li>• Mask</li>
                <li>• Hide</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Camoflage:</h4>
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
            <li>• <strong>Camouflage</strong> is spelled with a &quot;u&quot; after the &quot;o&quot;, not just &quot;o&quot;.</li>
            <li>• The word comes from French &quot;camoufler&quot; meaning to disguise.</li>
            <li>• Can be used as both a noun and a verb.</li>
            <li>• Commonly used in military and wildlife contexts.</li>
            <li>• &quot;Camoflage&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;camoflage&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;camoflage&quot; is never correct. The proper spelling is always &quot;camouflage.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;cam-ou-flage&quot; - the word has a &quot;u&quot; after the &quot;o&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between camouflage and disguise?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean to hide, but &quot;camouflage&quot; specifically refers to blending with surroundings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;camoflage&quot; likely occurs because of confusion about the &quot;u&quot; after the &quot;o&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;camouflage&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: camouflage pattern, camouflage clothing, and camouflage tactics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can camouflage be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;camouflage&quot; can be used as an adjective, as in &quot;camouflage clothing.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is camouflage only used in military contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;camouflage&quot; is used in many contexts including wildlife, fashion, and figurative language.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word camouflage?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from French &quot;camoufler&quot; and was first used in English in the early 20th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Camouflage</strong> is the correct spelling with a &quot;u&quot; after the &quot;o&quot;. It means to hide or disguise something to blend in with surroundings. The misspelling &quot;camoflage&quot; is never correct. Use &quot;camouflage&quot; to describe hiding, disguise, or blending in.</p>
      </div>
    </div>
  )
} 