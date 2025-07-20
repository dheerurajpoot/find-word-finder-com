import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Conceive or Concieve - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;conceive&quot; and &quot;concieve&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ConceiveVsConcievePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Conceive or Concieve</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;conceive&quot; or &quot;concieve&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Concieve</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Concieve&quot; is a common misspelling of &quot;conceive&quot;. Always use &quot;conceive&quot; when referring to forming an idea or becoming pregnant.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Conceive</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Conceive&quot; is a verb meaning to form or devise a plan or idea in the mind; to become pregnant with a child.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Conceive&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Conceive&quot;</strong> (verb): To form or devise a plan or idea in the mind; to become pregnant with a child.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in creative, intellectual, and biological contexts.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Conceive&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Imagine</li>
                <li>• Devise</li>
                <li>• Formulate</li>
                <li>• Invent</li>
                <li>• Envision</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Create</li>
                <li>• Think up</li>
                <li>• Dream up</li>
                <li>• Originate</li>
                <li>• Become pregnant</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;She <span className="text-green-600 font-semibold">conceived</span> a brilliant idea for the project.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;She <span className="text-red-600 font-semibold">concieved</span> a brilliant idea for the project.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;It is difficult to conceive of life on other planets.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Conceive&quot; is spelled with &quot;ei&quot; after the &quot;c&quot;.</li>
          <li>• The pronunciation is /kənˈsiːv/ (kuhn-SEEV).</li>
          <li>• Commonly used in creative, intellectual, and biological contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;concieve&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;concieve&quot; is never correct. The only correct form is &quot;conceive&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;conceive&quot; has &quot;ei&quot; after the &quot;c&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the noun form of &quot;conceive&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The noun form is &quot;conception&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;conceive&quot; be used in science?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;conceive&quot; is often used in science to describe the beginning of pregnancy or the formation of ideas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;conceive&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;conceive an idea&quot;, &quot;conceive a child&quot;, &quot;difficult to conceive&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Conceive</strong> is the correct spelling, while <strong>concieve</strong> is always incorrect. Use &quot;conceive&quot; when referring to forming an idea or becoming pregnant.
        </p>
      </div>
    </div>
  )
} 