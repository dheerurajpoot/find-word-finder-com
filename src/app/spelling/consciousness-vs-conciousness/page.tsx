import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Consciousness or Conciousness - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;consciousness&quot; and &quot;conciousness&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ConsciousnessVsConciousnessPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Consciousness or Conciousness</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;consciousness&quot; or &quot;conciousness&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Conciousness</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Conciousness&quot; is a common misspelling of &quot;consciousness&quot;. Always use &quot;consciousness&quot; when referring to the state of being aware of and able to think.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Consciousness</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Consciousness&quot; is a noun meaning the state of being aware of and able to think; the state of being conscious.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Consciousness&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Consciousness&quot;</strong> (noun): The state of being aware of and able to think; the state of being conscious.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in philosophy, psychology, medicine, and everyday conversation to describe awareness and perception.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Consciousness&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Awareness</li>
                <li>• Wakefulness</li>
                <li>• Alertness</li>
                <li>• Perception</li>
                <li>• Cognizance</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Mindfulness</li>
                <li>• Sentience</li>
                <li>• Sensibility</li>
                <li>• Responsiveness</li>
                <li>• Lucidity</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;He regained <span className="text-green-600 font-semibold">consciousness</span> after fainting.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;He regained <span className="text-red-600 font-semibold">conciousness</span> after fainting.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Consciousness is a complex topic in philosophy.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Consciousness&quot; is spelled with &quot;scio&quot; in the middle.</li>
          <li>• The pronunciation is /ˈkɒnʃəsnəs/ (KON-shus-nus).</li>
          <li>• Commonly used in philosophy, psychology, and medicine.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;conciousness&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;conciousness&quot; is never correct. The only correct form is &quot;consciousness&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;consciousness&quot; has &quot;scio&quot; in the middle.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the adjective form of &quot;consciousness&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The adjective form is &quot;conscious&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;consciousness&quot; be used in science?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;consciousness&quot; is often used in science to describe awareness and perception.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;consciousness&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;loss of consciousness&quot;, &quot;stream of consciousness&quot;, &quot;altered consciousness&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Consciousness</strong> is the correct spelling, while <strong>conciousness</strong> is always incorrect. Use &quot;consciousness&quot; when referring to the state of being aware of and able to think.
        </p>
      </div>
    </div>
  )
} 