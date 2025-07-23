import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Vein or Veign - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;vein&quot; and &quot;veign&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VeinVsVeignPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Vein or Veign</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;vein&quot; and &quot;veign&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Veign</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Veign&quot; is a misspelling. The correct spelling is &quot;vein&quot; with &quot;i&quot; before &quot;n&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Vein</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Vein&quot; is the correct spelling. It refers to blood vessels that carry blood toward the heart, or a streak of a particular quality in something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Vein (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A blood vessel that carries blood toward the heart; also, a streak or layer of a particular substance in rock or a quality in someone&apos;s character.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The nurse found a <strong>vein</strong> for the injection.</li>
                  <li>• There is a rich <strong>vein</strong> of gold in the mountain.</li>
                  <li>• He spoke in a humorous <strong>vein</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Veign:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Veign&quot; is a misspelling of &quot;vein&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Veign&quot; is not used in standard English.</li>
                  <li>• Always use <strong>vein</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Vein:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Blood vessel</li>
                <li>• Streak</li>
                <li>• Layer</li>
                <li>• Strand</li>
                <li>• Thread</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Veign:</h4>
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
            <li>• <strong>Vein</strong> is spelled with &quot;i&quot; before &quot;n&quot;.</li>
            <li>• &quot;Veign&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;vena&quot; meaning &quot;vein&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;veign&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;veign&quot; is never correct. The proper spelling is always &quot;vein&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;vein&quot; has &quot;i&quot; before &quot;n&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is a vein?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A vein is a blood vessel that carries blood toward the heart, or a streak/layer in rock or a quality in someone&apos;s character.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;vein&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;veign&quot; often happens by confusing the order of letters. Always use &quot;i&quot; before &quot;n&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vein&quot; used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;vein&quot; is the correct spelling in all contexts, both formal and informal.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Vein</strong> is the correct spelling, referring to blood vessels or streaks. The misspelling &quot;veign&quot; is never correct. Always use &quot;vein&quot; in your writing.</p>
      </div>
    </div>
  )
} 