import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Zucchini or Zuckini - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;zucchini&quot; and &quot;zuckini&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ZucchiniVsZuckiniPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Zucchini or Zuckini</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;zucchini&quot; or &quot;zuckini&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Zuckini</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Zuckini&quot; is a common misspelling of &quot;zucchini&quot;. Always use &quot;zucchini&quot; when referring to the green summer squash.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Zucchini</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Zucchini&quot; is a noun meaning a green summer squash, also known as courgette in British English.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Zucchini&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Zucchini&quot;</strong> (noun): A green summer squash, also known as courgette in British English.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in cooking and gardening to describe a popular vegetable in salads, stir-fries, and baked goods.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Zucchini&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Courgette (British English)</li>
                <li>• Summer squash</li>
                <li>• Vegetable marrow</li>
                <li>• Green squash</li>
                <li>• Cucurbita pepo</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Squash</li>
                <li>• Marrow</li>
                <li>• Gourd</li>
                <li>• Edible gourd</li>
                <li>• Italian squash</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;She made grilled <span className="text-green-600 font-semibold">zucchini</span> for dinner.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;She made grilled <span className="text-red-600 font-semibold">zuckini</span> for dinner.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Zucchini bread is a popular treat.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Zucchini&quot; is spelled with &quot;zuc&quot; at the beginning and double &quot;c&quot; in the middle.</li>
          <li>• The pronunciation is /zuːˈkiːni/ (zoo-KEE-nee).</li>
          <li>• Commonly used in American and Italian cuisine.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;zuckini&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;zuckini&quot; is never correct. The only correct form is &quot;zucchini&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;zucchini&quot; has double &quot;c&quot; in the middle.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the plural of &quot;zucchini&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The plural can be &quot;zucchinis&quot; or &quot;zucchini&quot; (same as singular).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;zucchini&quot; the same as &quot;courgette&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;zucchini&quot; is the American English term, while &quot;courgette&quot; is used in British English.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common dishes with zucchini?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;zucchini bread&quot;, &quot;grilled zucchini&quot;, &quot;stuffed zucchini&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Zucchini</strong> is the correct spelling, while <strong>zuckini</strong> is always incorrect. Use &quot;zucchini&quot; when referring to the green summer squash.
        </p>
      </div>
    </div>
  )
} 