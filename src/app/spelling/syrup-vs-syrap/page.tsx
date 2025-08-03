import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Syrup vs Syrap - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;syrup&quot; vs &quot;syrap&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SyrupVsSyrapPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Syrup vs Syrap</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg mb-8 border-l-4 border-amber-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;syrup&quot; and &quot;syrap&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Syrap</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Syrap&quot; is not a standard English word. The correct spelling is &quot;syrup.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Syrup</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Syrup&quot; is the correct spelling. It means &quot;a thick, sweet liquid&quot; or &quot;a concentrated solution.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Syrup (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A thick, sweet liquid made by dissolving sugar in water; a concentrated solution used in medicine or cooking.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Maple <strong>syrup</strong> is delicious on pancakes.</li>
                  <li>• The cough <strong>syrup</strong> helps with symptoms.</li>
                  <li>• Chocolate <strong>syrup</strong> is used in desserts.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Syrap (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Syrap&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Syrap&quot; is not used in standard English.</li>
                  <li>• Always use <strong>syrup</strong> when referring to sweet liquids or solutions.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Syrup:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Nectar</li>
                <li>• Molasses</li>
                <li>• Honey</li>
                <li>• Elixir</li>
                <li>• Solution</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Syrap:</h4>
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
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Spelling Rules:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Syrup</strong> is spelled with &quot;up&quot;: s-y-r-u-p.</li>
            <li>• The word comes from Arabic &quot;sharab&quot; meaning &quot;drink.&quot;</li>
            <li>• &quot;Syrap&quot; is not a recognized English word.</li>
            <li>• Remember: syrup ends with &quot;up&quot; like &quot;cup&quot; and &quot;up.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;syrup&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Syrup&quot; is a noun that refers to a thick, sweet liquid. It follows standard English grammar patterns and can be countable or uncountable.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;syrup&quot; differ from &quot;honey&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Syrup&quot; is typically made by dissolving sugar in water, while &quot;honey&quot; is a natural sweet substance produced by bees.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;syrup&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Syrup&quot; is a noun that refers to a thick, sweet liquid used in cooking, medicine, or as a sweetener.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;syrup&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;syrup&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;syrup&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Syrup&quot; comes from Arabic &quot;sharab&quot; meaning &quot;drink&quot; and entered English through Old French &quot;sirop.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;syrup&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Syrup&quot; can be used as a subject (&quot;The syrup is sweet&quot;), object (&quot;Pour the syrup&quot;), or in compound forms (&quot;maple syrup&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;syrup&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: maple syrup, cough syrup, chocolate syrup, simple syrup, and pancake syrup.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;syrup&quot; and &quot;syrap&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;syrup&quot; ends with &quot;up&quot; (like &quot;cup&quot; and &quot;up&quot;), and emphasize that &quot;syrap&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;syrup&quot; used in medical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;syrup&quot; is commonly used in medicine to refer to liquid medications, such as cough syrup or children&apos;s medicine.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different types of syrups?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common types include maple syrup, corn syrup, simple syrup, chocolate syrup, and various fruit syrups used in cooking and beverages.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;syrup&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;syrup&quot; as ending with &quot;up&quot; like other words: cup, up, pup. The &quot;up&quot; ending is easy to remember.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;syrup&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: syrap, sirup, syrupp, and syrupe. The correct spelling always ends with &quot;up.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;syrup&quot; used in cooking?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In cooking, syrups are used as sweeteners, flavorings, and toppings for desserts, pancakes, waffles, and beverages.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between syrup and molasses?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Syrup is typically made by dissolving sugar in water, while molasses is a byproduct of sugar refining and has a stronger, more complex flavor.</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
        <h2 className="text-2xl font-bold mb-4 text-amber-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-amber-800 leading-relaxed">Word Definition Rule: <strong>Syrup</strong> is the correct spelling with &quot;up&quot;: s-y-r-u-p. &quot;Syrup&quot; is a word of Arabic origin meaning a thick, sweet liquid made by dissolving sugar in water. The incorrect spelling &quot;syrap&quot; is not a recognized English word and should never be used. Always use &quot;syrup&quot; when referring to sweet liquids, medicinal solutions, or cooking ingredients.</p>
      </div>
    </div>
  )
} 