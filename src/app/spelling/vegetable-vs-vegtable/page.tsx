import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Vegetable or Vegtable - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;vegetable&quot; and &quot;vegtable&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VegetableVsVegtablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Vegetable or Vegtable</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;vegetable&quot; and &quot;vegtable&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Vegtable</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Vegtable&quot; is a misspelling. The correct spelling is &quot;vegetable&quot; with an &quot;e&quot; after the &quot;g&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Vegetable</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Vegetable&quot; is the correct spelling. It refers to a plant or part of a plant used as food, such as a cabbage, potato, turnip, or bean.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Vegetable (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, turnip, or bean.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Carrots are a popular <strong>vegetable</strong>.</li>
                  <li>• Eat more <strong>vegetables</strong> for a healthy diet.</li>
                  <li>• The soup contains several <strong>vegetables</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Vegtable:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Vegtable&quot; is a misspelling of &quot;vegetable&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Vegtable&quot; is not used in standard English.</li>
                  <li>• Always use <strong>vegetable</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Vegetable:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Plant</li>
                <li>• Produce</li>
                <li>• Greens</li>
                <li>• Legume</li>
                <li>• Root</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Vegtable:</h4>
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
            <li>• <strong>Vegetable</strong> is spelled with an &quot;e&quot; after the &quot;g&quot;.</li>
            <li>• &quot;Vegtable&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;vegetabilis&quot; meaning &quot;growing, flourishing&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vegtable&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;vegtable&quot; is never correct. The proper spelling is always &quot;vegetable&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;vegetable&quot; has an &quot;e&quot; after the &quot;g&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is a vegetable?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A vegetable is a plant or part of a plant used as food.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;vegetable&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;vegtable&quot; often happens by omitting the &quot;e&quot; after the &quot;g&quot;. Always use &quot;e&quot; after the &quot;g&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vegetable&quot; used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;vegetable&quot; is the correct spelling in all contexts, both formal and informal.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Vegetable</strong> is the correct spelling, referring to a plant used as food. The misspelling &quot;vegtable&quot; is never correct. Always use &quot;vegetable&quot; in your writing.</p>
      </div>
    </div>
  )
} 