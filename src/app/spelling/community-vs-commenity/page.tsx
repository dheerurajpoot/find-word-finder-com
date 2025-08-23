import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Community or Commenity - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;community&quot; and &quot;commenity&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CommunityVsCommenityPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Community or Commenity</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;community&quot; and &quot;commenity&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Commenity</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Commenity&quot; is a misspelling. The correct spelling is &quot;community&quot; with a &quot;u&quot; after the &quot;m&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Community</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Community&quot; is the correct spelling. It refers to a group of people living in the same place or having a particular characteristic in common.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Community (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A group of people living in the same place or having a particular characteristic in common.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The local <strong>&quot;community&quot;</strong> organized a festival.</li>
                  <li>• She is active in her school <strong>&quot;community&quot;</strong>.</li>
                  <li>• The <strong>&quot;community&quot;</strong> came together to help.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Commenity (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Commenity&quot; is a misspelling of &quot;community&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Commenity&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;community&quot;</strong> when referring to a group of people.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Community:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Society</li>
                <li>• Group</li>
                <li>• Population</li>
                <li>• Public</li>
                <li>• Neighborhood</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Commenity:</h4>
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
            <li>• <strong>&quot;Community&quot;</strong> is spelled with a &quot;u&quot; after the &quot;m&quot;.</li>
            <li>• Used to describe a group of people living in the same place or having something in common.</li>
            <li>• The word comes from Latin &quot;communitas&quot; meaning &quot;fellowship&quot;.</li>
            <li>• &quot;Commenity&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;commenity&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;commenity&quot; is never correct. The proper spelling is always &quot;community.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;u&quot; after the &quot;m&quot; in &quot;community&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;community&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Community&quot; means a group of people living in the same place or having a particular characteristic in common.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;commenity&quot; may occur due to omitting the &quot;u&quot; or mishearing the pronunciation.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Community</strong> is the correct spelling with double &quot;m&quot;: com-mu-ni-ty. It means a group of people living in the same area or sharing common interests. The misspelling &quot;commenity&quot; is never correct. Always use &quot;community&quot; when referring to groups or neighborhoods.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/knowledgement-vs-acknowledgement" className="text-blue-700 hover:text-blue-900 underline">Knowledgement vs Acknowledgement</a></li>
            <li><a href="/spelling/stroll-vs-strol" className="text-blue-700 hover:text-blue-900 underline">Stroll vs Strol</a></li>
            <li><a href="/spelling/tenement-vs-tenament" className="text-blue-700 hover:text-blue-900 underline">Tenement vs Tenament</a></li>
            <li><a href="/spelling/asymmetry-vs-assymetry" className="text-blue-700 hover:text-blue-900 underline">Asymmetry vs Assymetry</a></li>
            <li><a href="/spelling/believes-vs-belives" className="text-blue-700 hover:text-blue-900 underline">Believes vs Belives</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/splendid-vs-spendid" className="text-purple-700 hover:text-purple-900 underline">Splendid vs Spendid</a></li>
            <li><a href="/spelling/behaviour-vs-behavor" className="text-purple-700 hover:text-purple-900 underline">Behaviour vs Behaver</a></li>
            <li><a href="/spelling/should-vs-shoud" className="text-purple-700 hover:text-purple-900 underline">Should vs Shoud</a></li>
            <li><a href="/spelling/similar-vs-silimar" className="text-purple-700 hover:text-purple-900 underline">Similar vs Silimar</a></li>
            <li><a href="/spelling/apparatus-vs-aparatus" className="text-purple-700 hover:text-purple-900 underline">Apparatus vs Aparatus</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/declarative-sentence" className="text-green-700 hover:text-green-900 underline">Declarative Sentences</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/adjectives-starting-with-vowels" className="text-green-700 hover:text-green-900 underline">Adjectives Starting with Vowels</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-green-700 hover:text-green-900 underline">Proper Nouns Worksheets</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 