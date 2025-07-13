import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Banana or Benana - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;banana&quot; and &quot;benana&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BananaVsBenanaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Banana or Benana</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;banana&quot; and &quot;benana&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Benana</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Benana&quot; is a misspelling. The correct spelling is &quot;banana&quot; with &quot;a&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Banana</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Banana&quot; is the correct spelling. It refers to a yellow tropical fruit.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Banana (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A long curved fruit with a yellow skin and soft sweet flesh, growing in clusters on tropical plants.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I ate a <strong>banana</strong> for breakfast.</li>
                  <li>• The <strong>banana</strong> tree was full of fruit.</li>
                  <li>• She made <strong>banana</strong> bread.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Benana (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Benana&quot; is a misspelling of &quot;banana&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Benana&quot; is not used in standard English.</li>
                  <li>• Always use <strong>banana</strong> when referring to the fruit.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Banana:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Plantain</li>
                <li>• Tropical fruit</li>
                <li>• Yellow fruit</li>
                <li>• Musa fruit</li>
                <li>• Curved fruit</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Benana:</h4>
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
            <li>• <strong>Banana</strong> is spelled with &quot;a&quot;, not &quot;e&quot;.</li>
            <li>• The word comes from Wolof &quot;banana&quot; via Portuguese.</li>
            <li>• Used as a noun only.</li>
            <li>• Common in food, cooking, and tropical discussions.</li>
            <li>• &quot;Benana&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;benana&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;benana&quot; is never correct. The proper spelling is always &quot;banana.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ban&quot; + &quot;ana&quot; - the word starts with &quot;ban&quot; like &quot;band&quot; or &quot;bank.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between banana and plantain?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Banana&quot; typically refers to the sweet dessert variety, while &quot;plantain&quot; refers to a starchy cooking variety.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can banana be used in plural form?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;banana&quot; becomes &quot;bananas&quot; in plural form.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation patterns or confusion with similar words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;banana&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: banana bread, banana split, banana peel, banana tree, and banana republic.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Banana</strong> is the correct spelling with &quot;a&quot;. It refers to a yellow tropical fruit with curved shape and sweet flesh. The misspelling &quot;benana&quot; is never correct. Use &quot;banana&quot; when referring to the fruit, its varieties, or anything related to this popular tropical food.</p>
      </div>
    </div>
  )
} 