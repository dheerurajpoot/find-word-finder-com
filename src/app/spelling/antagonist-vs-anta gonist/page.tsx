import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Antagonist or Anta Gonist - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;antagonist&quot; and &quot;anta gonist&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AntagonistVsAntaGonistPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Antagonist or Anta Gonist</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;antagonist&quot; and &quot;anta gonist&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Anta Gonist</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Anta gonist&quot; is a misspelling. The correct spelling is &quot;antagonist&quot; as one word, not two.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Antagonist</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Antagonist&quot; is the correct spelling. It means a person who actively opposes or is hostile to someone or something; an adversary.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Antagonist (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person who actively opposes or is hostile to someone or something; an adversary.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>antagonist</strong> in the story was clever and ruthless.</li>
                  <li>• Every hero needs an <strong>antagonist</strong> to challenge them.</li>
                  <li>• The <strong>antagonist</strong> tried to thwart the protagonist&apos;s plans.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Anta Gonist (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Anta gonist&quot; is a misspelling of &quot;antagonist&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Anta gonist&quot; is not used in standard English.</li>
                  <li>• Always use <strong>antagonist</strong> when referring to an adversary.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Antagonist:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Opponent</li>
                <li>• Adversary</li>
                <li>• Rival</li>
                <li>• Enemy</li>
                <li>• Foe</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Anta Gonist:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Antagonist</strong> is spelled as one word, not two.</li>
            <li>• Used to describe an adversary or opponent.</li>
            <li>• The word comes from Greek &quot;antagonistēs&quot; meaning &quot;opponent, rival&quot;.</li>
            <li>• &quot;Anta gonist&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;anta gonist&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;anta gonist&quot; is never correct. The proper spelling is always &quot;antagonist.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember it is one word: &quot;antagonist&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does antagonist mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means a person who actively opposes or is hostile to someone or something; an adversary.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;anta gonist&quot; occurs because people split the word into two parts by mistake.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Antagonist</strong> is the correct spelling as one word. It means a person who actively opposes or is hostile to someone or something; an adversary. The misspelling &quot;anta gonist&quot; is never correct. Use &quot;antagonist&quot; in all contexts requiring this meaning.</p>
      </div>
    </div>
  )
} 