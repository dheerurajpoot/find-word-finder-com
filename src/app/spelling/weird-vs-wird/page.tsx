import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Weird or Wird - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;weird&quot; and &quot;wird&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WeirdVsWirdPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Weird or Wird</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;weird&quot; and &quot;wird&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wird</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wird&quot; is a misspelling. The correct spelling is &quot;weird&quot; with an &quot;e&quot; before the &quot;i&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Weird</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Weird&quot; is the correct spelling. It means strange, unusual, or supernatural in nature.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Weird</strong> is the correct spelling. It is an adjective meaning strange, unusual, or supernatural in nature.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wird</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Weird (adjective)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Suggesting something supernatural or uncanny; strange or unusual in a way that is unsettling or mysterious.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to describe something that is strange, unusual, or difficult to explain.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;That was a <span className="text-green-600 font-semibold">weird</span> dream I had last night.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She has a <span className="text-green-600 font-semibold">weird</span> sense of humor.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The weather has been <span className="text-green-600 font-semibold">weird</span> lately.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;That was a <span className="text-red-600 font-semibold">wird</span> dream I had last night&quot; (should be &quot;weird&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For strange:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Strange</li>
                <li>• Unusual</li>
                <li>• Peculiar</li>
                <li>• Odd</li>
                <li>• Bizarre</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For supernatural:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Supernatural</li>
                <li>• Uncanny</li>
                <li>• Mysterious</li>
                <li>• Eerie</li>
                <li>• Spooky</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Weird&quot; is spelled with an &quot;e&quot; before the &quot;i&quot;</li>
          <li>• The word comes from Old English &quot;wyrd&quot; meaning &quot;fate&quot; or &quot;destiny&quot;</li>
          <li>• It follows the &quot;i before e except after c&quot; rule</li>
          <li>• Often used in informal contexts to describe strange situations</li>
          <li>• Can be used as both an adjective and informally as a noun</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wird&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wird&quot; is never correct. The correct spelling is always &quot;weird&quot; with an &quot;e&quot; before the &quot;i&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;weird&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WEERD&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;weird&quot; and &quot;wird&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Weird&quot; is the correct spelling meaning strange or unusual, while &quot;wird&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;weird&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;weird&quot; can describe strange behavior, unusual situations, supernatural phenomena, or anything that seems odd or mysterious.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;weird&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, many people incorrectly spell it as &quot;wird&quot;, possibly because the pronunciation doesn&apos;t clearly indicate the &quot;e&quot;. This is a very common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Weird</strong> is the correct spelling. It is an adjective meaning strange, unusual, or supernatural in nature.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wird</strong> is always incorrect. Remember to include the &quot;e&quot; before the &quot;i&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 