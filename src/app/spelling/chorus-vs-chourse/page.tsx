import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Chorus or Chourse - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;chorus&quot; and &quot;chourse&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ChorusVsChoursePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Chorus or Chourse</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;chorus&quot; and &quot;chourse&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Chourse</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Chourse&quot; is a common misspelling. The correct spelling is &quot;chorus&quot; with the &quot;u&quot; after the &quot;o&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Chorus</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Chorus&quot; is the correct spelling. It refers to a group of singers or the refrain of a song.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Chorus (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A group of singers who perform together, or the part of a song that is repeated after each verse.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>chorus</strong> sang beautifully during the concert.</li>
                  <li>• Everyone joined in for the <strong>chorus</strong> of the song.</li>
                  <li>• She is a member of the school <strong>chorus</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Chourse (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Chourse&quot; is a misspelling of &quot;chorus&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Chourse&quot; is not used in standard English.</li>
                  <li>• Always use <strong>chorus</strong> when referring to a group of singers or a song refrain.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Chorus:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Choir</li>
                <li>• Refrain</li>
                <li>• Ensemble</li>
                <li>• Group</li>
                <li>• Singers</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Chourse:</h4>
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
            <li>• <strong>Chorus</strong> is spelled with the &quot;u&quot; after the &quot;o&quot;.</li>
            <li>• Refers to a group of singers or the repeated part of a song.</li>
            <li>• &quot;Chourse&quot; is never correct in any context.</li>
            <li>• The word &quot;chorus&quot; comes from the Greek &quot;khoros&quot; meaning a group of singers and dancers.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;chourse&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;chourse&quot; is never correct. The proper spelling is always &quot;chorus.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;chorus&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Chorus&quot; refers to a group of singers or the part of a song that is repeated after each verse.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;chorus&quot; has the &quot;u&quot; after the &quot;o&quot; and is similar to &quot;choir&quot; in meaning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are &quot;chorus&quot; and &quot;choir&quot; the same?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: While both refer to groups of singers, a &quot;chorus&quot; can also mean the repeated part of a song, while a &quot;choir&quot; is specifically a group of singers.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Chorus</strong> is the correct spelling for a group of singers or the refrain of a song. &quot;Chourse&quot; is never correct. Always use &quot;chorus&quot; in your writing.</p>
      </div>
    </div>
  )
} 