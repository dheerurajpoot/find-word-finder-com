import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Consensus or Concensus - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;consensus&quot; and &quot;concensus&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ConsensusVsConcensusPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Consensus or Concensus</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;consensus&quot; or &quot;concensus&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Concensus</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Concensus&quot; is a common misspelling of &quot;consensus&quot;. Always use &quot;consensus&quot; when referring to general agreement.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Consensus</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Consensus&quot; is a noun meaning general agreement among a group of people.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Consensus&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Consensus&quot;</strong> (noun): General agreement among a group of people.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in meetings, organizations, and discussions to describe a shared opinion or decision.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Consensus&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Agreement</li>
                <li>• Unanimity</li>
                <li>• Harmony</li>
                <li>• Accord</li>
                <li>• Unity</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Concurrence</li>
                <li>• Concord</li>
                <li>• Solidarity</li>
                <li>• Consent</li>
                <li>• Collective opinion</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;The team reached a <span className="text-green-600 font-semibold">consensus</span> on the proposal.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The team reached a <span className="text-red-600 font-semibold">concensus</span> on the proposal.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;There was consensus among the members.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Consensus&quot; is spelled with &quot;sus&quot; at the end, not &quot;sus&quot;.</li>
          <li>• The pronunciation is /kənˈsɛnsəs/ (kuhn-SEN-sus).</li>
          <li>• Commonly used in meetings, organizations, and discussions.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;concensus&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;concensus&quot; is never correct. The only correct form is &quot;consensus&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;consensus&quot; has &quot;sen&quot; in the middle and ends with &quot;sus&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the plural of &quot;consensus&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The plural is &quot;consensuses&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;consensus&quot; be used in science?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;consensus&quot; is often used in science to describe general agreement among experts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;consensus&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;reach a consensus&quot;, &quot;scientific consensus&quot;, &quot;broad consensus&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Consensus</strong> is the correct spelling with &quot;s&quot; in the middle: con-sen-sus. It means general agreement among a group of people. The misspelling &quot;concensus&quot; is never correct. Always use &quot;consensus&quot; when referring to collective agreement or unanimous opinion.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/running-vs-runing" className="text-blue-700 hover:text-blue-900 underline">Running vs Runing</a></li>
            <li><a href="/spelling/attacked-vs-attacted" className="text-blue-700 hover:text-blue-900 underline">Attacked vs Attacted</a></li>
            <li><a href="/spelling/challenged-vs-challanged" className="text-blue-700 hover:text-blue-900 underline">Challenged vs Challanged</a></li>
            <li><a href="/spelling/concussion-vs-concusion" className="text-blue-700 hover:text-blue-900 underline">Concussion vs Concusion</a></li>
            <li><a href="/spelling/acceptable-vs-acceptible" className="text-blue-700 hover:text-blue-900 underline">Acceptable vs Acceptible</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/tyranny-vs-tyrrany" className="text-purple-700 hover:text-purple-900 underline">Tyranny vs Tyrrany</a></li>
            <li><a href="/spelling/specially-vs-specialy" className="text-purple-700 hover:text-purple-900 underline">Specially vs Specialy</a></li>
            <li><a href="/spelling/acknowledgement-vs-acknowlegement" className="text-purple-700 hover:text-purple-900 underline">Acknowledgement vs Acknowlegement</a></li>
            <li><a href="/spelling/temperature-vs-temprature" className="text-purple-700 hover:text-purple-900 underline">Temperature vs Temprature</a></li>
            <li><a href="/spelling/visibly-vs-visably" className="text-purple-700 hover:text-purple-900 underline">Visibly vs Visably</a></li>
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