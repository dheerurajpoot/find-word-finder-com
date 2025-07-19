import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Colleagues or Collegues - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;colleagues&quot; and &quot;collegues&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ColleaguesVsColleguesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Colleagues or Collegues</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;colleagues&quot; and &quot;collegues&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Collegues</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Collegues&quot; is a misspelling. The correct spelling is &quot;colleagues&quot; with &quot;ea&quot; after the &quot;l&quot; and before the &quot;g&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Colleagues</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Colleagues&quot; is the correct spelling. It refers to people with whom one works in a profession or business.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Colleagues (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">People with whom one works in a profession or business.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She met with her <strong>&quot;colleagues&quot;</strong> to discuss the project.</li>
                  <li>• All the <strong>&quot;colleagues&quot;</strong> attended the meeting.</li>
                  <li>• He values the support of his <strong>&quot;colleagues&quot;</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Collegues (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Collegues&quot; is a misspelling of &quot;colleagues&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Collegues&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;colleagues&quot;</strong> when referring to coworkers.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Colleagues:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Coworkers</li>
                <li>• Associates</li>
                <li>• Partners</li>
                <li>• Teammates</li>
                <li>• Collaborators</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Collegues:</h4>
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
            <li>• <strong>&quot;Colleagues&quot;</strong> is spelled with &quot;ea&quot; after the &quot;l&quot; and before the &quot;g&quot;.</li>
            <li>• Used to describe people you work with in a profession or business.</li>
            <li>• The word comes from Latin &quot;collega&quot; meaning &quot;partner in office&quot;.</li>
            <li>• &quot;Collegues&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;collegues&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;collegues&quot; is never correct. The proper spelling is always &quot;colleagues.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;ea&quot; after the &quot;l&quot; and before the &quot;g&quot; in &quot;colleagues&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;colleagues&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Colleagues&quot; means people with whom one works in a profession or business.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;collegues&quot; may occur due to confusion about the vowel sequence.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Colleagues&quot;</strong> is the correct spelling with &quot;ea&quot; after the &quot;l&quot; and before the &quot;g&quot;. It refers to people you work with. The misspelling &quot;collegues&quot; is never correct. Use &quot;colleagues&quot; in all contexts.</p>
      </div>
    </div>
  )
} 