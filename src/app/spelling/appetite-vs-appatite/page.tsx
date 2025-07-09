import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Appetite or Appatite - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;appetite&quot; and &quot;appatite&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AppetiteVsAppatitePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Appetite or Appatite</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;appetite&quot; and &quot;appatite&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Appatite</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Appatite&quot; is a misspelling. The correct spelling is &quot;appetite&quot; with two &quot;p&quot;s and one &quot;t&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Appetite</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Appetite&quot; is the correct spelling. It means a natural desire to satisfy bodily needs, especially hunger.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Appetite (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A natural desire to satisfy bodily needs, especially hunger; a strong desire or liking for something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She has a healthy <strong>appetite</strong> for good food.</li>
                  <li>• The child lost his <strong>appetite</strong> when he got sick.</li>
                  <li>• He has an <strong>appetite</strong> for adventure and travel.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Appatite (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Appatite&quot; is a misspelling of &quot;appetite&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Appatite&quot; is not used in standard English.</li>
                  <li>• Always use <strong>appetite</strong> when referring to hunger or desire.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Appetite:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Hunger</li>
                <li>• Craving</li>
                <li>• Desire</li>
                <li>• Thirst</li>
                <li>• Longing</li>
                <li>• Yearning</li>
                <li>• Eagerness</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Appatite:</h4>
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
            <li>• <strong>Appetite</strong> is spelled with two &quot;p&quot;s and one &quot;t&quot;.</li>
            <li>• Used to describe natural hunger or strong desire for something.</li>
            <li>• Can refer to both physical hunger and metaphorical desires.</li>
            <li>• The word comes from Latin &quot;appetitus&quot; meaning &quot;desire.&quot;</li>
            <li>• &quot;Appatite&quot; is never correct in any context.</li>
            <li>• Often used in phrases like &quot;good appetite&quot; or &quot;appetite for.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;appatite&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;appatite&quot; is never correct. The proper spelling is always &quot;appetite&quot; with two &quot;p&quot;s and one &quot;t&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ap-pet-ite&quot; - the word has two &quot;p&quot;s and ends with &quot;-ite&quot; like other words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between appetite and hunger?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Hunger is the physical need for food, while appetite is the desire or craving for food or other things.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can appetite be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;appetite&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;appatite&quot; likely occurs because of confusion about the double consonants or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;appetite&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: good appetite, poor appetite, appetite for success, and whet one&apos;s appetite.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is appetite always about food?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;appetite&quot; can refer to desire for anything, not just food - like appetite for adventure or knowledge.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can appetite be used metaphorically?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;appetite&quot; is often used metaphorically to describe strong desires for non-food items or experiences.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Appetite</strong> is the correct spelling with two &quot;p&quot;s and one &quot;t&quot;. It means a natural desire to satisfy bodily needs, especially hunger, or a strong desire for something. The misspelling &quot;appatite&quot; is never correct. Use &quot;appetite&quot; to describe hunger or strong desires.</p>
      </div>
    </div>
  )
} 