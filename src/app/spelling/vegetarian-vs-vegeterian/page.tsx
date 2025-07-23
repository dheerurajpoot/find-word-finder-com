import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Vegetarian or Vegeterian - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;vegetarian&quot; and &quot;vegeterian&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VegetarianVsVegeterianPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Vegetarian or Vegeterian</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;vegetarian&quot; and &quot;vegeterian&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Vegeterian</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Vegeterian&quot; is a misspelling. The correct spelling is &quot;vegetarian&quot; with an &quot;a&quot; after the &quot;t&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Vegetarian</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Vegetarian&quot; is the correct spelling. It refers to a person who does not eat meat, and sometimes other animal products, especially for moral, religious, or health reasons.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Vegetarian (noun/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person who does not eat meat; also, relating to or denoting a diet without meat.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She has been a <strong>vegetarian</strong> for ten years.</li>
                  <li>• The restaurant offers many <strong>vegetarian</strong> dishes.</li>
                  <li>• He follows a <strong>vegetarian</strong> diet.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Vegeterian:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Vegeterian&quot; is a misspelling of &quot;vegetarian&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Vegeterian&quot; is not used in standard English.</li>
                  <li>• Always use <strong>vegetarian</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Vegetarian:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Herbivore</li>
                <li>• Plant-eater</li>
                <li>• Vegan (if no animal products at all)</li>
                <li>• Non-meat-eater</li>
                <li>• Lacto-vegetarian (if includes dairy)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Vegeterian:</h4>
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
            <li>• <strong>Vegetarian</strong> is spelled with an &quot;a&quot; after the &quot;t&quot;.</li>
            <li>• &quot;Vegeterian&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;vegetus&quot; meaning &quot;lively&quot; or &quot;vigorous&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vegeterian&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;vegeterian&quot; is never correct. The proper spelling is always &quot;vegetarian&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;vegetarian&quot; has an &quot;a&quot; after the &quot;t&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is a vegetarian?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A vegetarian is a person who does not eat meat, and sometimes other animal products.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;vegetarian&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;vegeterian&quot; often happens by replacing the &quot;a&quot; with an &quot;e&quot;. Always use &quot;a&quot; after the &quot;t&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vegetarian&quot; used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;vegetarian&quot; is the correct spelling in all contexts, both formal and informal.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Vegetarian</strong> is the correct spelling, referring to a person who does not eat meat. The misspelling &quot;vegeterian&quot; is never correct. Always use &quot;vegetarian&quot; in your writing.</p>
      </div>
    </div>
  )
} 