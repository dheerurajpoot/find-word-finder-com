import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Contempt or Condempt - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;contempt&quot; and &quot;condempt&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ContemptVsCondemptPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Contempt or Condempt</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;contempt&quot; or &quot;condempt&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Condempt</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Condempt&quot; is a common misspelling of &quot;contempt&quot;. Always use &quot;contempt&quot; when referring to the feeling that someone or something is worthless or beneath consideration.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Contempt</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Contempt&quot; is a noun meaning the feeling that someone or something is worthless or beneath consideration; also used in law for disobedience to a court order.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Contempt&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Contempt&quot;</strong> (noun): The feeling that someone or something is worthless or beneath consideration; disobedience to a court order.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in law, psychology, and everyday conversation to describe disdain or legal disobedience.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Contempt&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Disdain</li>
                <li>• Scorn</li>
                <li>• Disrespect</li>
                <li>• Derision</li>
                <li>• Disregard</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Disapproval</li>
                <li>• Mockery</li>
                <li>• Aversion</li>
                <li>• Hatred</li>
                <li>• Loathing</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;She looked at him with <span className="text-green-600 font-semibold">contempt</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;She looked at him with <span className="text-red-600 font-semibold">condempt</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;He was found in contempt of court.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Contempt&quot; is spelled with &quot;mpt&quot; at the end, not &quot;mpt&quot;.</li>
          <li>• The pronunciation is /kənˈtɛmpt/ (kuhn-TEMPT).</li>
          <li>• Commonly used in law, psychology, and conversation.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;condempt&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;condempt&quot; is never correct. The only correct form is &quot;contempt&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;contempt&quot; ends with &quot;mpt&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the adjective form of &quot;contempt&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The adjective form is &quot;contemptuous&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;contempt&quot; be used in law?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;contempt&quot; is often used in law for disobedience to a court order.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;contempt&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;contempt of court&quot;, &quot;hold in contempt&quot;, &quot;look with contempt&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Contempt</strong> is the correct spelling, while <strong>condempt</strong> is always incorrect. Use &quot;contempt&quot; when referring to the feeling that someone or something is worthless or beneath consideration.
        </p>
      </div>
    </div>
  )
} 