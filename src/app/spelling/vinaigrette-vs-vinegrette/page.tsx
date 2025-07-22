import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Vinaigrette or Vinegrette - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;vinaigrette&quot; and &quot;vinegrette&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VinaigretteVsVinegrettePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Vinaigrette or Vinegrette</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;vinaigrette&quot; and &quot;vinegrette&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Vinegrette</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Vinegrette&quot; is a misspelling. The correct spelling is &quot;vinaigrette&quot; with an &quot;ai&quot; after the &quot;v&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Vinaigrette</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Vinaigrette&quot; is the correct spelling. It is a salad dressing made of oil, vinegar, and seasonings.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Vinaigrette (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A salad dressing made of oil, vinegar, and seasonings.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She made a homemade <strong>vinaigrette</strong> for the salad.</li>
                  <li>• The <strong>vinaigrette</strong> was tangy and delicious.</li>
                  <li>• Try a lemon <strong>vinaigrette</strong> on your greens.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Vinegrette (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Vinegrette&quot; is a misspelling of &quot;vinaigrette&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Vinegrette&quot; is not used in standard English.</li>
                  <li>• Always use <strong>vinaigrette</strong> when referring to the salad dressing.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Vinaigrette:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Salad dressing</li>
                <li>• French dressing</li>
                <li>• Oil and vinegar dressing</li>
                <li>• Emulsion</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Vinegrette:</h4>
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
            <li>• <strong>Vinaigrette</strong> is spelled with &quot;ai&quot; after the &quot;v&quot;.</li>
            <li>• It is a French word adopted into English.</li>
            <li>• &quot;Vinegrette&quot; is never correct in any context.</li>
            <li>• Vinaigrette is commonly used as a salad dressing.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vinegrette&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;vinegrette&quot; is never correct. The proper spelling is always &quot;vinaigrette&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;vinaigrette&quot; has &quot;ai&quot; after the &quot;v&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is vinaigrette?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Vinaigrette is a salad dressing made of oil, vinegar, and seasonings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use &quot;vinaigrette&quot; in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;vinaigrette&quot; is the correct term for the salad dressing in all contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;vinaigrette&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;vinegrette&quot; often happens by replacing the &quot;ai&quot; with an &quot;e&quot; after the &quot;v&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Vinaigrette</strong> is the correct spelling, referring to the salad dressing. The misspelling &quot;vinegrette&quot; is never correct. Always use &quot;vinaigrette&quot; when referring to this dressing.</p>
      </div>
    </div>
  )
} 