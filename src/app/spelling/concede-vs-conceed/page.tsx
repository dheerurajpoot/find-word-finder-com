import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Concede or Conceed - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;concede&quot; and &quot;conceed&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ConcedeVsConceedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Concede or Conceed</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;concede&quot; or &quot;conceed&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Conceed</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Conceed&quot; is a common misspelling of &quot;concede&quot;. Always use &quot;concede&quot; when referring to admitting something is true or surrendering.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Concede</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Concede&quot; is a verb meaning to admit that something is true or valid after first denying or resisting it; to surrender or yield.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Concede&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Concede&quot;</strong> (verb): To admit that something is true or valid after first denying or resisting it; to surrender or yield.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in debates, competitions, and negotiations to describe admitting defeat or yielding a point.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Concede&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Admit</li>
                <li>• Acknowledge</li>
                <li>• Yield</li>
                <li>• Surrender</li>
                <li>• Grant</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Relinquish</li>
                <li>• Capitulate</li>
                <li>• Allow</li>
                <li>• Confess</li>
                <li>• Accept</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;He had to <span className="text-green-600 font-semibold">concede</span> defeat after the final round.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;He had to <span className="text-red-600 font-semibold">conceed</span> defeat after the final round.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;She conceded that she was wrong.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Concede&quot; is spelled with one &quot;e&quot; after the &quot;c&quot;.</li>
          <li>• The pronunciation is /kənˈsiːd/ (kuhn-SEED).</li>
          <li>• Commonly used in debates, competitions, and negotiations.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;conceed&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;conceed&quot; is never correct. The only correct form is &quot;concede&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;concede&quot; has only one &quot;e&quot; after the &quot;c&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the noun form of &quot;concede&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The noun form is &quot;concession&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;concede&quot; be used in sports?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;concede&quot; is often used in sports to mean surrendering a point, goal, or match.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;concede&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;concede defeat&quot;, &quot;concede a goal&quot;, &quot;concede a point&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Concede</strong> is the correct spelling, while <strong>conceed</strong> is always incorrect. Use &quot;concede&quot; when referring to admitting something is true or surrendering.
        </p>
      </div>
    </div>
  )
} 