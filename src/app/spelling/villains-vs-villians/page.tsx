import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Villains or Villians - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;villains&quot; and &quot;villians&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VillainsVsVilliansPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Villains or Villians</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;villains&quot; and &quot;villians&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Villians</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Villians&quot; is a misspelling. The correct spelling is &quot;villains&quot; with the &quot;a&quot; before the &quot;i&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Villains</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Villains&quot; is the correct spelling. It is the plural of &quot;villain&quot;, meaning a character whose evil actions or motives are important to the plot.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Villains (noun, plural):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Characters whose evil actions or motives are important to the plot.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The story has several memorable <strong>villains</strong>.</li>
                  <li>• Comic books often feature colorful <strong>villains</strong>.</li>
                  <li>• The <strong>villains</strong> plotted against the hero.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Villians (noun, plural):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Villians&quot; is a misspelling of &quot;villains&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Villians&quot; is not used in standard English.</li>
                  <li>• Always use <strong>villains</strong> when referring to evil characters.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Villains:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Antagonists</li>
                <li>• Evildoers</li>
                <li>• Foes</li>
                <li>• Rogues</li>
                <li>• Criminals</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Villians:</h4>
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
            <li>• <strong>Villains</strong> is spelled with an &quot;a&quot; before the &quot;i&quot;.</li>
            <li>• It is the plural of &quot;villain&quot;.</li>
            <li>• &quot;Villians&quot; is never correct in any context.</li>
            <li>• The word comes from Old French &quot;vilain&quot; meaning &quot;peasant&quot; or &quot;scoundrel&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;villians&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;villians&quot; is never correct. The proper spelling is always &quot;villains&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;villains&quot; has an &quot;a&quot; before the &quot;i&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is a villain?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A villain is a character whose evil actions or motives are important to the plot.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use &quot;villains&quot; in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;villains&quot; is the correct plural form of &quot;villain&quot; and is used in all contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;villains&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;villians&quot; often happens by transposing the &quot;a&quot; and &quot;i&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Villains</strong> is the correct spelling, referring to evil characters in stories. The misspelling &quot;villians&quot; is never correct. Always use &quot;villains&quot; when referring to such characters.</p>
      </div>
    </div>
  )
} 