import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Volunteer or Volonteer - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;volunteer&quot; and &quot;volonteer&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VolunteerVsVolonteerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Volunteer or Volonteer</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;volunteer&quot; and &quot;volonteer&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Volonteer</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Volonteer&quot; is a misspelling. The correct spelling is &quot;volunteer&quot; with a &quot;u&quot; after the &quot;o&quot; and double &quot;e&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Volunteer</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Volunteer&quot; is the correct spelling. It refers to a person who freely offers to take part in an enterprise or undertake a task.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Volunteer (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person who freely offers to take part in an enterprise or undertake a task.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• A call for <strong>volunteers</strong> to act as foster-parents.</li>
                  <li>• She is a <strong>volunteer</strong> at the local food bank.</li>
                  <li>• Many <strong>volunteers</strong> joined the community event.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Volonteer (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Volonteer&quot; is a misspelling of &quot;volunteer&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Volonteer&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;volunteer&quot;</strong> when referring to someone who offers to help.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Volunteer:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Helper</li>
                <li>• Participant</li>
                <li>• Contributor</li>
                <li>• Supporter</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Volonteer:</h4>
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
            <li>• <strong>Volunteer</strong> is spelled with a &quot;u&quot; after the &quot;o&quot; and double &quot;e&quot; at the end.</li>
            <li>• Used to refer to someone who freely offers to help or participate.</li>
            <li>• The word &quot;volunteer&quot; comes from the Latin &quot;voluntarius&quot; meaning &quot;willing&quot;.</li>
            <li>• &quot;Volonteer&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;volonteer&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;volonteer&quot; is never correct. The proper spelling is always &quot;volunteer&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;volunteer&quot; has a &quot;u&quot; after the &quot;o&quot; and double &quot;e&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;volunteer&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Volunteer&quot; means a person who freely offers to take part in an enterprise or undertake a task.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;volunteer&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;volunteer&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;volunteer&quot; pronounced?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It is pronounced /ˌvɒlənˈtɪər/ (VOL-un-teer).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Volunteer</strong> is the correct spelling with a &quot;u&quot; after the &quot;o&quot; and double &quot;e&quot; at the end. It refers to someone who freely offers to help or participate. The misspelling &quot;volonteer&quot; is never correct. Use &quot;volunteer&quot; to indicate a person who offers their time or service willingly.</p>
      </div>
    </div>
  )
} 