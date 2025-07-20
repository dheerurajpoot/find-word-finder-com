import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Complement or Compliement - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;complement&quot; and &quot;compliement&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ComplementVsCompliementPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Complement or Compliement</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;complement&quot; or &quot;compliement&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Compliement</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Compliement&quot; is a common misspelling of &quot;complement&quot;. Always use &quot;complement&quot; when referring to something that completes or goes well with something else.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Complement</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Complement&quot; is a noun meaning something that completes or goes well with something; as a verb, it means to add to something in a way that enhances or improves it.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Complement&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Complement&quot;</strong> (noun): Something that completes or goes well with something else.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            As a verb, it means to add to something in a way that enhances or improves it.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Complement&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Accompaniment</li>
                <li>• Addition</li>
                <li>• Enhancement</li>
                <li>• Supplement</li>
                <li>• Accessory</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Counterpart</li>
                <li>• Match</li>
                <li>• Balance</li>
                <li>• Completion</li>
                <li>• Augmentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;The wine is a perfect <span className="text-green-600 font-semibold">complement</span> to the meal.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The wine is a perfect <span className="text-red-600 font-semibold">compliement</span> to the meal.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Her skills complement those of her partner.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Complement&quot; is spelled with &quot;e&quot; after the &quot;l&quot;, not &quot;ie&quot;.</li>
          <li>• The pronunciation is /ˈkɒmplɪmɛnt/ (KOM-pli-ment).</li>
          <li>• Commonly used in food, fashion, and teamwork contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;compliement&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;compliement&quot; is never correct. The only correct form is &quot;complement&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;complement&quot; has &quot;e&quot; after the &quot;l&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the verb form of &quot;complement&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The verb form is also &quot;complement&quot; (e.g., &quot;to complement something&quot;).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the difference between &quot;complement&quot; and &quot;compliment&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Complement&quot; means something that completes or goes well with something else, while &quot;compliment&quot; means praise.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;complement&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;complement each other&quot;, &quot;perfect complement&quot;, &quot;complementary colors&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Complement</strong> is the correct spelling, while <strong>compliement</strong> is always incorrect. Use &quot;complement&quot; when referring to something that completes or goes well with something else.
        </p>
      </div>
    </div>
  )
} 