import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Breathe or Breath - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling and usage between &quot;breathe&quot; and &quot;breath&quot;. Discover definitions, usage examples, and when to use each word.',
}

export default function BreatheVsBreathPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Breathe or Breath</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Word is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;breathe&quot; and &quot;breath&quot;? Learn the correct usage, meaning, and when to use each word properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Breathe (verb)</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Breathe&quot; is the verb form meaning to take air into and expel it from the lungs.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Breath (noun)</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Breath&quot; is the noun form meaning the air inhaled or exhaled during respiration.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Breathe (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To take air into and expel it from the lungs; to inhale and exhale.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Take a deep <strong>breathe</strong> and relax.</li>
                  <li>• It&apos;s hard to <strong>breathe</strong> in this smoke.</li>
                  <li>• The patient can <strong>breathe</strong> normally now.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Breath (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The air inhaled or exhaled during respiration; a single respiration.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Take a deep <strong>breath</strong>.</li>
                  <li>• His <strong>breath</strong> smelled of coffee.</li>
                  <li>• She held her <strong>breath</strong> underwater.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Breathe (verb):</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Inhale</li>
                <li>• Exhale</li>
                <li>• Respire</li>
                <li>• Draw breath</li>
                <li>• Take air</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Breath (noun):</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Respiration</li>
                <li>• Inhalation</li>
                <li>• Exhalation</li>
                <li>• Air</li>
                <li>• Wind</li>
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
            <li>• <strong>Breathe</strong> is the verb (action) - what you do.</li>
            <li>• <strong>Breath</strong> is the noun (thing) - what you take.</li>
            <li>• Both words are correct but serve different grammatical functions.</li>
            <li>• Common in health, meditation, and everyday contexts.</li>
            <li>• Remember: &quot;I breathe air&quot; vs &quot;Take a breath.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are both words correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, both &quot;breathe&quot; and &quot;breath&quot; are correct, but they serve different grammatical functions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember which is which?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as: &quot;I breathe&quot; (action) vs &quot;Take a breath&quot; (thing). The verb has an &quot;e&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between breathe and breath?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Breathe&quot; is the verb (action), while &quot;breath&quot; is the noun (the air inhaled or exhaled).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can breath be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;breath&quot; is only a noun. The verb form is always &quot;breathe.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often confuse these words?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The confusion likely occurs because of similar pronunciation and related meanings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using these words?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: breathe in/out, take a breath, breathe deeply, catch your breath, and breathe life into.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Breathe</strong> is the verb (action) meaning to take air into and expel it from the lungs. <strong>Breath</strong> is the noun (thing) meaning the air inhaled or exhaled. Both are correct but serve different grammatical functions. Use &quot;breathe&quot; when describing the action and &quot;breath&quot; when referring to the air itself.</p>
      </div>
    </div>
  )
} 