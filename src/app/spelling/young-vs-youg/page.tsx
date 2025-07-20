import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Young or Youg - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;young&quot; and &quot;youg&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function YoungVsYougPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Young or Youg</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;young&quot; or &quot;youg&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Youg</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Youg&quot; is a common misspelling of &quot;young&quot;. Always use &quot;young&quot; when referring to someone or something that is not old.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Young</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Young&quot; is an adjective meaning having lived or existed for only a short time; not old.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Young&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Young&quot;</strong> (adjective): Having lived or existed for only a short time; not old.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used to describe people, animals, or things that are in the early stage of life or development.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Young&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Youthful</li>
                <li>• Juvenile</li>
                <li>• New</li>
                <li>• Fresh</li>
                <li>• Adolescent</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Immature</li>
                <li>• Budding</li>
                <li>• Recent</li>
                <li>• Early</li>
                <li>• Baby</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;The <span className="text-green-600 font-semibold">young</span> child played in the park.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The <span className="text-red-600 font-semibold">youg</span> child played in the park.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Young plants need plenty of water.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Young&quot; is spelled with &quot;ou&quot; in the middle and ends with &quot;ng&quot;.</li>
          <li>• The pronunciation is /jʌŋ/ (yuhng).</li>
          <li>• Commonly used to describe people, animals, and things in early life.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;youg&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;youg&quot; is never correct. The only correct form is &quot;young&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;young&quot; has &quot;ou&quot; in the middle and ends with &quot;ng&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the plural of &quot;young&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The plural is &quot;young&quot; (as in &quot;the young&quot; referring to young people or animals).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;young&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;young&quot; can be used as a noun to refer to young people or animals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;young&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;the young generation&quot;, &quot;young at heart&quot;, &quot;when I was young&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Young</strong> is the correct spelling, while <strong>youg</strong> is always incorrect. Use &quot;young&quot; when referring to someone or something that is not old.
        </p>
      </div>
    </div>
  )
} 