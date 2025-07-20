import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Coincide or Concide - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;coincide&quot; and &quot;concide&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CoincideVsConcidePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Coincide or Concide</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;coincide&quot; or &quot;concide&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Concide</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Concide&quot; is a common misspelling of &quot;coincide&quot;. Always use &quot;coincide&quot; when referring to events or circumstances happening at the same time.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Coincide</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Coincide&quot; is a verb meaning to occur at the same time or to correspond in position or character.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Coincide&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Coincide&quot;</strong> (verb): To occur at the same time; to correspond in position or character.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in scheduling, science, and general conversation to describe simultaneous events or matching characteristics.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Coincide&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Correspond</li>
                <li>• Match</li>
                <li>• Agree</li>
                <li>• Concur</li>
                <li>• Synchronize</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Overlap</li>
                <li>• Align</li>
                <li>• Harmonize</li>
                <li>• Jibe</li>
                <li>• Occur together</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;The meeting will <span className="text-green-600 font-semibold">coincide</span> with the conference.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The meeting will <span className="text-red-600 font-semibold">concide</span> with the conference.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Their interests coincide.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Coincide&quot; is spelled with &quot;co&quot; at the beginning and &quot;cide&quot; at the end.</li>
          <li>• The pronunciation is /ˌkəʊɪnˈsaɪd/ (koh-in-SIDE).</li>
          <li>• Commonly used in scheduling, science, and conversation.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;concide&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;concide&quot; is never correct. The only correct form is &quot;coincide&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;coincide&quot; starts with &quot;co&quot; and ends with &quot;cide&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the noun form of &quot;coincide&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The noun form is &quot;coincidence&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;coincide&quot; be used for ideas?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;coincide&quot; can refer to ideas, interests, or events matching or happening at the same time.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;coincide&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;coincide with&quot;, &quot;interests coincide&quot;, &quot;dates coincide&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Coincide</strong> is the correct spelling, while <strong>concide</strong> is always incorrect. Use &quot;coincide&quot; when referring to events or circumstances happening at the same time.
        </p>
      </div>
    </div>
  )
} 