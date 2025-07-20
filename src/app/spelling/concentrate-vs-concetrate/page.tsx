import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Concentrate or Concetrate - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;concentrate&quot; and &quot;concetrate&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ConcentrateVsConcetratePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Concentrate or Concetrate</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;concentrate&quot; or &quot;concetrate&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Concetrate</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Concetrate&quot; is a common misspelling of &quot;concentrate&quot;. Always use &quot;concentrate&quot; when referring to focusing attention or making something denser.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Concentrate</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Concentrate&quot; is a verb meaning to focus all one&apos;s attention on a particular object or activity; to make a substance denser or stronger.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Concentrate&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Concentrate&quot;</strong> (verb): To focus all one&apos;s attention on a particular object or activity; to make a substance denser or stronger.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in education, science, and cooking to describe focusing or increasing strength.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Concentrate&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Focus</li>
                <li>• Direct</li>
                <li>• Center</li>
                <li>• Fixate</li>
                <li>• Gather</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Intensify</li>
                <li>• Consolidate</li>
                <li>• Accumulate</li>
                <li>• Pool</li>
                <li>• Condense</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;Please <span className="text-green-600 font-semibold">concentrate</span> on your homework.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;Please <span className="text-red-600 font-semibold">concetrate</span> on your homework.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;The juice is made from concentrate.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Concentrate&quot; is spelled with &quot;cen&quot; in the middle, not &quot;ce&quot;.</li>
          <li>• The pronunciation is /ˈkɒnsəntreɪt/ (KON-sen-trayt).</li>
          <li>• Commonly used in education, science, and cooking.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;concetrate&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;concetrate&quot; is never correct. The only correct form is &quot;concentrate&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;concentrate&quot; has &quot;cen&quot; in the middle.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the noun form of &quot;concentrate&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The noun form is also &quot;concentrate&quot; (e.g., orange juice concentrate).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;concentrate&quot; be used in science?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;concentrate&quot; is often used in science to describe making a solution denser.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;concentrate&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;concentrate on&quot;, &quot;from concentrate&quot;, &quot;concentrate solution&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Concentrate</strong> is the correct spelling, while <strong>concetrate</strong> is always incorrect. Use &quot;concentrate&quot; when referring to focusing attention or making something denser.
        </p>
      </div>
    </div>
  )
} 