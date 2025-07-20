import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Compilation or Complation - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;compilation&quot; and &quot;complation&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CompilationVsComplationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Compilation or Complation</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;compilation&quot; or &quot;complation&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Complation</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Complation&quot; is a common misspelling of &quot;compilation&quot;. Always use &quot;compilation&quot; when referring to a collection or the act of compiling.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Compilation</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Compilation&quot; is a noun meaning a collection of things, especially information or works, that have been gathered together.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Compilation&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Compilation&quot;</strong> (noun): A collection of things, especially information or works, that have been gathered together; the act of compiling.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used for books, music albums, data, and other collections that are assembled from various sources.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Compilation&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Collection</li>
                <li>• Anthology</li>
                <li>• Digest</li>
                <li>• Assortment</li>
                <li>• Selection</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Album</li>
                <li>• Compendium</li>
                <li>• Gatherings</li>
                <li>• Aggregation</li>
                <li>• Sampler</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;The band released a <span className="text-green-600 font-semibold">compilation</span> of their greatest hits.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The band released a <span className="text-red-600 font-semibold">complation</span> of their greatest hits.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;This book is a compilation of essays from various authors.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Compilation&quot; is spelled with &quot;tion&quot; at the end, not &quot;tion&quot;.</li>
          <li>• The pronunciation is /ˌkɒmpɪˈleɪʃən/ (kom-pi-LAY-shun).</li>
          <li>• Commonly used for books, music, and data collections.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;complation&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;complation&quot; is never correct. The only correct form is &quot;compilation&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;compilation&quot; ends with &quot;tion&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the verb form of &quot;compilation&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The verb form is &quot;compile&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;compilation&quot; be used for music albums?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;compilation&quot; is commonly used for music albums that collect songs from various sources or artists.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;compilation&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;compilation album&quot;, &quot;data compilation&quot;, &quot;compilation of essays&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Compilation</strong> is the correct spelling, while <strong>complation</strong> is always incorrect. Use &quot;compilation&quot; when referring to a collection of things or the act of compiling.
        </p>
      </div>
    </div>
  )
} 