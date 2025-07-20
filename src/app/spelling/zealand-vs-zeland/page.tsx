import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Zealand or Zeland - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;Zealand&quot; and &quot;Zeland&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ZealandVsZelandPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Zealand or Zeland</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;Zealand&quot; or &quot;Zeland&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Zeland</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English as a place name.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Zeland&quot; is a common misspelling of &quot;Zealand&quot;. Always use &quot;Zealand&quot; when referring to the country New Zealand or the Danish island.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Zealand</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this place name.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Zealand&quot; refers to the largest island in Denmark and is also part of the country name &quot;New Zealand&quot; in the southwestern Pacific Ocean.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Zealand&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Zealand&quot;</strong> (proper noun): The largest island in Denmark; also part of the country name &quot;New Zealand&quot;.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in geography and travel to refer to specific places.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Zealand&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• New Zealand</li>
                <li>• Sjælland (Danish name for Zealand)</li>
                <li>• Danish island</li>
                <li>• Pacific country</li>
                <li>• Oceania nation</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Island</li>
                <li>• Country</li>
                <li>• Landmass</li>
                <li>• Region</li>
                <li>• Territory</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;She traveled to <span className="text-green-600 font-semibold">Zealand</span> in Denmark.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;She traveled to <span className="text-red-600 font-semibold">Zeland</span> in Denmark.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;New Zealand is a beautiful country.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Zealand&quot; is spelled with &quot;ea&quot; in the middle.</li>
          <li>• The pronunciation is /ˈziːlənd/ (ZEE-luhnd).</li>
          <li>• Commonly used in geography and travel.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;zeland&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;zeland&quot; is never correct. The only correct form is &quot;Zealand&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;Zealand&quot; has &quot;ea&quot; in the middle.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the Danish name for Zealand?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The Danish name is &quot;Sjælland&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is Zealand part of New Zealand?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The country &quot;New Zealand&quot; was named after the Dutch province of Zeeland, but &quot;Zealand&quot; itself refers to the Danish island.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;Zealand&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;New Zealand&quot;, &quot;Zealand, Denmark&quot;, &quot;Zealand bridge&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Zealand</strong> is the correct spelling, while <strong>Zeland</strong> is always incorrect. Use &quot;Zealand&quot; when referring to the Danish island or as part of the country name &quot;New Zealand&quot;.
        </p>
      </div>
    </div>
  )
} 