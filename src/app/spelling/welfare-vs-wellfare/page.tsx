import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Welfare or Wellfare - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;welfare&quot; and &quot;wellfare&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WelfareVsWellfarePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Welfare or Wellfare</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;welfare&quot; and &quot;wellfare&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wellfare</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wellfare&quot; is a misspelling. The correct spelling is &quot;welfare&quot; with one &quot;l&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Welfare</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Welfare&quot; is the correct spelling. It refers to the health, happiness, and prosperity of a person or group.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Welfare</strong> is the correct spelling. It refers to the health, happiness, and prosperity of a person or group, or to government assistance programs designed to help people in need.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wellfare</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Welfare (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            The health, happiness, and prosperity of a person or group. It can also refer to government assistance programs designed to help people in need, such as food stamps, housing assistance, or unemployment benefits.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used in both general contexts to refer to well-being and in specific contexts to refer to social assistance programs.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The organization is dedicated to animal <span className="text-green-600 font-semibold">welfare</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She receives <span className="text-green-600 font-semibold">welfare</span> benefits to help support her family.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The government&apos;s <span className="text-green-600 font-semibold">welfare</span> programs help those in need.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;The organization is dedicated to animal <span className="text-red-600 font-semibold">wellfare</span>&quot; (should be &quot;welfare&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For well-being:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Well-being</li>
                <li>• Prosperity</li>
                <li>• Happiness</li>
                <li>• Health</li>
                <li>• Good fortune</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For assistance:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Aid</li>
                <li>• Support</li>
                <li>• Benefits</li>
                <li>• Assistance</li>
                <li>• Relief</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Welfare&quot; is spelled with one &quot;l&quot;, not two</li>
          <li>• The word comes from &quot;well&quot; + &quot;fare&quot; (meaning to go or travel)</li>
          <li>• It can refer to general well-being or specific government programs</li>
          <li>• Often used in discussions about social policy and assistance</li>
          <li>• The word has both positive and political connotations</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wellfare&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wellfare&quot; is never correct. The correct spelling is always &quot;welfare&quot; with one &quot;l&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;welfare&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WEL-fair&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;welfare&quot; and &quot;well-being&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Welfare&quot; can refer to both general well-being and government assistance programs, while &quot;well-being&quot; specifically refers to health and happiness.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;welfare&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;welfare&quot; can refer to general well-being (like animal welfare) or specific government assistance programs (like welfare benefits).</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;welfare&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, many people incorrectly add an extra &quot;l&quot; and spell it as &quot;wellfare&quot;. This is a very common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Welfare</strong> is the correct spelling. It refers to the health, happiness, and prosperity of a person or group, or to government assistance programs.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wellfare</strong> is always incorrect. Remember to use only one &quot;l&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 