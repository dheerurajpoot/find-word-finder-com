import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Whining or Whinning - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;whining&quot; and &quot;whinning&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WhiningVsWhinningPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Whining or Whinning</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;whining&quot; and &quot;whinning&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Whinning</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Whinning&quot; is a misspelling. The correct spelling is &quot;whining&quot; with a single &quot;n&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Whining</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Whining&quot; is the correct spelling. It refers to complaining in a feeble or petulant way.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whining</strong> is the correct spelling. It refers to complaining in a feeble, petulant, or irritating way, often in a high-pitched voice.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Whinning</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whining (verb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            To complain in a feeble or petulant way, often in a high-pitched, irritating voice. It can also refer to making a prolonged high-pitched sound.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whining (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700">
            The act of complaining in a feeble or petulant manner, or a prolonged high-pitched sound.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;Stop <span className="text-green-600 font-semibold">whining</span> about the weather and just enjoy the day.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The child was <span className="text-green-600 font-semibold">whining</span> about having to go to bed.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I could hear the <span className="text-green-600 font-semibold">whining</span> of the engine from the garage.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;Stop <span className="text-red-600 font-semibold">whinning</span> about it&quot; (should be &quot;whining&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For complaining:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Complaining</li>
                <li>• Moaning</li>
                <li>• Grumbling</li>
                <li>• Griping</li>
                <li>• Kvetching</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For sounds:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Whimpering</li>
                <li>• Crying</li>
                <li>• Squealing</li>
                <li>• Shrieking</li>
                <li>• Wailing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Whining&quot; is spelled with a single &quot;n&quot;</li>
          <li>• The word comes from the verb &quot;whine&quot;</li>
          <li>• It can refer to both complaining and making high-pitched sounds</li>
          <li>• Often used to describe irritating or annoying behavior</li>
          <li>• The past tense is &quot;whined&quot; and the present participle is &quot;whining&quot;</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;whinning&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;whinning&quot; is never correct. The correct spelling is always &quot;whining&quot; with a single &quot;n&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;whining&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WHY-ning&quot; with a long &quot;i&quot; sound, not &quot;WHIN-ning&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between whining and complaining?</h3>
            <p className="text-lg md:text-xl text-gray-700">Whining typically implies a more irritating, petulant, or feeble manner of complaining, often with a high-pitched voice.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;whining&quot; refer to sounds other than human voices?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;whining&quot; can refer to high-pitched sounds made by machines, animals, or other sources, not just human complaining.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;whining&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, many people incorrectly add an extra &quot;n&quot; and spell it as &quot;whinning&quot;. This is a very common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whining</strong> is the correct spelling. It refers to complaining in a feeble or petulant way, often in a high-pitched voice.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Whinning</strong> is always incorrect. Remember to use only one &quot;n&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 