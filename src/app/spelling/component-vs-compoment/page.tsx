import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Component or Compoment - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;component&quot; and &quot;compoment&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ComponentVsCompomentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Component or Compoment</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;component&quot; or &quot;compoment&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Compoment</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Compoment&quot; is a common misspelling of &quot;component&quot;. Always use &quot;component&quot; when referring to a part or element of a larger whole.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Component</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Component&quot; is a noun meaning a part or element of a larger whole, especially in technical or scientific contexts.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Component&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Component&quot;</strong> (noun): A part or element of a larger whole, especially a part of a machine or vehicle.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in engineering, electronics, computing, and many other fields to describe individual parts that make up a system.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Component&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Part</li>
                <li>• Element</li>
                <li>• Piece</li>
                <li>• Module</li>
                <li>• Segment</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Unit</li>
                <li>• Section</li>
                <li>• Ingredient</li>
                <li>• Constituent</li>
                <li>• Factor</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;The engine is a vital <span className="text-green-600 font-semibold">component</span> of the car.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The engine is a vital <span className="text-red-600 font-semibold">compoment</span> of the car.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Each component of the system must work together.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Component&quot; is spelled with &quot;ent&quot; at the end, not &quot;ment&quot;.</li>
          <li>• The pronunciation is /kəmˈpoʊnənt/ (kuhm-POH-nuhnt).</li>
          <li>• Commonly used in technical, scientific, and everyday contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;compoment&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;compoment&quot; is never correct. The only correct form is &quot;component&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;component&quot; ends with &quot;ent&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the adjective form of &quot;component&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The adjective form is also &quot;component&quot; (e.g., &quot;component parts&quot;).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;component&quot; refer to people?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, in some contexts, &quot;component&quot; can refer to people as parts of a group or team.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;component&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;key component&quot;, &quot;electronic component&quot;, &quot;component part&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Component</strong> is the correct spelling, while <strong>compoment</strong> is always incorrect. Use &quot;component&quot; when referring to a part or element of a larger whole.
        </p>
      </div>
    </div>
  )
} 