import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Villain or Villian - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;villain&quot; and &quot;villian&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VillainVsVillianPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Villain or Villian</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;villain&quot; and &quot;villian&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Villian</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Villian&quot; is a misspelling. The correct spelling is &quot;villain&quot; with an &quot;a&quot; before the &quot;i&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Villain</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Villain&quot; is the correct spelling. It means a character whose evil actions or motives are important to the plot.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Villain (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A character whose evil actions or motives are important to the plot.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>villain</strong> was finally defeated by the hero.</li>
                  <li>• Every good story needs a memorable <strong>villain</strong>.</li>
                  <li>• The <strong>villain</strong> plotted against the protagonist.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Villian (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Villian&quot; is a misspelling of &quot;villain&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Villian&quot; is not used in standard English.</li>
                  <li>• Always use <strong>villain</strong> when referring to an evil character.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Villain:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Antagonist</li>
                <li>• Evildoer</li>
                <li>• Foe</li>
                <li>• Rogue</li>
                <li>• Criminal</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Villian:</h4>
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
            <li>• <strong>Villain</strong> is spelled with an &quot;a&quot; before the &quot;i&quot;.</li>
            <li>• It is a noun referring to an evil character in a story.</li>
            <li>• &quot;Villian&quot; is never correct in any context.</li>
            <li>• The word comes from Old French &quot;vilain&quot; meaning &quot;peasant&quot; or &quot;scoundrel&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;villian&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;villian&quot; is never correct. The proper spelling is always &quot;villain&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;villain&quot; has an &quot;a&quot; before the &quot;i&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is a villain?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A villain is a character whose evil actions or motives are important to the plot.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use &quot;villain&quot; in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;villain&quot; is the correct term for an evil character in all contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;villain&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;villian&quot; often happens by doubling the &quot;i&quot; instead of using an &quot;a&quot; before the &quot;i&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Villain</strong> is the correct spelling, referring to an evil character in stories. The misspelling &quot;villian&quot; is never correct. Always use &quot;villain&quot; when referring to such a character.</p>
      </div>
    </div>
  )
} 