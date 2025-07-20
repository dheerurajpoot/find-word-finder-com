import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Composition or Compostion - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;composition&quot; and &quot;compostion&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CompositionVsCompostionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Composition or Compostion</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;composition&quot; or &quot;compostion&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Compostion</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Compostion&quot; is a common misspelling of &quot;composition&quot;. Always use &quot;composition&quot; when referring to the makeup or structure of something, or a written work.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Composition</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Composition&quot; is a noun meaning the makeup or structure of something, or a written work such as an essay or piece of music.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Composition&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Composition&quot;</strong> (noun): The makeup or structure of something; a written work, especially an essay or piece of music.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in science, art, music, and writing to describe how something is put together or a creative work.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Composition&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Structure</li>
                <li>• Arrangement</li>
                <li>• Makeup</li>
                <li>• Formation</li>
                <li>• Construction</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Essay</li>
                <li>• Piece</li>
                <li>• Work</li>
                <li>• Creation</li>
                <li>• Opus</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;The chemical <span className="text-green-600 font-semibold">composition</span> of water is H₂O.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The chemical <span className="text-red-600 font-semibold">compostion</span> of water is H₂O.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;She wrote a composition for her English class.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Composition&quot; is spelled with &quot;sition&quot; at the end, not &quot;stion&quot;.</li>
          <li>• The pronunciation is /ˌkɒmpəˈzɪʃən/ (kom-puh-ZISH-un).</li>
          <li>• Commonly used in science, art, music, and writing.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;compostion&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;compostion&quot; is never correct. The only correct form is &quot;composition&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;composition&quot; ends with &quot;sition&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the verb form of &quot;composition&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The verb form is &quot;compose&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;composition&quot; refer to music?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;composition&quot; is commonly used for musical works.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;composition&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;composition notebook&quot;, &quot;chemical composition&quot;, &quot;musical composition&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Composition</strong> is the correct spelling, while <strong>compostion</strong> is always incorrect. Use &quot;composition&quot; when referring to the makeup or structure of something, or a written or musical work.
        </p>
      </div>
    </div>
  )
} 