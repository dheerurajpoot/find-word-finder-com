import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Volunteering or Volonteering - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;volunteering&quot; and &quot;volonteering&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VolunteeringVsVolonteeringPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Volunteering or Volonteering</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;volunteering&quot; and &quot;volonteering&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Volonteering</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Volonteering&quot; is a misspelling. The correct spelling is &quot;volunteering&quot; with a &quot;u&quot; after the &quot;o&quot; and double &quot;e&quot; after the &quot;t&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Volunteering</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Volunteering&quot; is the correct spelling. It means freely offering to do something, especially for a good cause or without payment.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Volunteering (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Freely offer to do something, especially for a good cause or without payment.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• 140 employees <strong>volunteered</strong> for redundancy.</li>
                  <li>• I rashly <strong>volunteered</strong> to be a contestant.</li>
                  <li>• She enjoys <strong>volunteering</strong> at the animal shelter.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Volonteering (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Volonteering&quot; is a misspelling of &quot;volunteering&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Volonteering&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;volunteering&quot;</strong> when referring to offering help freely.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Volunteering:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Helping</li>
                <li>• Assisting</li>
                <li>• Contributing</li>
                <li>• Donating time</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Volonteering:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Volunteering</strong> is spelled with a &quot;u&quot; after the &quot;o&quot; and double &quot;e&quot; after the &quot;t&quot;.</li>
            <li>• Used to refer to freely offering to help or participate, often without payment.</li>
            <li>• The word &quot;volunteer&quot; comes from the Latin &quot;voluntarius&quot; meaning &quot;willing&quot;.</li>
            <li>• &quot;Volonteering&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;volonteering&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;volonteering&quot; is never correct. The proper spelling is always &quot;volunteering&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;volunteering&quot; has a &quot;u&quot; after the &quot;o&quot; and double &quot;e&quot; after the &quot;t&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;volunteering&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Volunteering&quot; means freely offering to do something, especially for a good cause or without payment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;volunteering&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;volunteering&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;volunteering&quot; pronounced?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It is pronounced /ˌvɒlənˈtɪərɪŋ/ (VOL-un-teer-ing).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Volunteering</strong> is the correct spelling with a &quot;u&quot; after the &quot;o&quot; and double &quot;e&quot; after the &quot;t&quot;. It means freely offering to help or participate, often without payment. The misspelling &quot;volonteering&quot; is never correct. Use &quot;volunteering&quot; to indicate offering your time or service willingly.</p>
      </div>
    </div>
  )
} 