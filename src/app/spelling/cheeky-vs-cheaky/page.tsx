import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cheeky or Cheaky - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;cheeky&quot; and &quot;cheaky&quot;. Discover definitions, usage examples, synonyms, notes, and FAQs to avoid common mistakes.',
}

export default function CheekyVsCheakyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Cheeky or Cheaky</h1>
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-4 mb-8">
        <p className="text-lg md:text-xl text-center text-blue-900 font-semibold">Comparing the correct and incorrect spellings of &quot;cheeky&quot; and &quot;cheaky&quot;.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Incorrect Card */}
        <Card className="bg-red-50 border-l-4 border-red-500 w-full md:w-1/2">
          <CardContent className="py-6">
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">❌</span>
              <span className="text-2xl font-bold text-red-700">Cheaky</span>
            </div>
            <p className="text-lg md:text-xl text-red-800">This is a common misspelling and is not recognized as a correct word in English.</p>
          </CardContent>
        </Card>
        {/* Correct Card */}
        <Card className="bg-green-50 border-l-4 border-green-500 w-full md:w-1/2">
          <CardContent className="py-6">
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">✅</span>
              <span className="text-2xl font-bold text-green-700">Cheeky</span>
            </div>
            <p className="text-lg md:text-xl text-green-800">This is the correct spelling, meaning impudent or irreverent, typically in an endearing or amusing way.</p>
          </CardContent>
        </Card>
      </div>
      {/* Definition Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed"><b>Cheeky</b>: Impudent or irreverent, typically in an endearing or amusing way. Example: &quot;The child gave a cheeky grin.&quot;</p>
      </section>
      {/* Synonyms Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <ul className="list-disc list-inside space-y-2">
            <li>Impudent</li>
            <li>Saucy</li>
            <li>Bold</li>
            <li>Fresh</li>
            <li>Impertinent</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Flippant</li>
            <li>Playful</li>
            <li>Witty</li>
            <li>Mischievous</li>
            <li>Smart-alecky</li>
          </ul>
        </div>
      </section>
      {/* Notes Section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Cheeky&quot; is the correct spelling and is commonly used in British English.</li>
          <li>&quot;Cheaky&quot; is a frequent typo, often due to the misplacement of the &quot;a&quot; for the double &quot;e&quot;.</li>
          <li>Use &quot;cheeky&quot; to describe someone who is playfully rude or bold.</li>
        </ul>
      </div>
      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-lg md:text-xl text-gray-800">Q: What does &quot;cheeky&quot; mean?</p>
            <p className="text-lg md:text-xl text-gray-700">A: It means impudent or irreverent, typically in an endearing or amusing way.</p>
          </div>
          <div>
            <p className="font-semibold text-lg md:text-xl text-gray-800">Q: Is &quot;cheaky&quot; ever correct?</p>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cheaky&quot; is not a recognized word in English and is considered a misspelling.</p>
          </div>
          <div>
            <p className="font-semibold text-lg md:text-xl text-gray-800">Q: How can I remember the correct spelling?</p>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;cheeky&quot; has a double &quot;e&quot; in the middle.</p>
          </div>
        </div>
      </section>
      {/* Summary Section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Always use &quot;cheeky&quot; as the correct spelling. &quot;Cheaky&quot; is a common misspelling and should be avoided in all writing.</p>
      </div>
    </div>
  )
} 