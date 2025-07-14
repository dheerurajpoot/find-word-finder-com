import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Campaign or Campain - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;campaign&quot; and &quot;campain&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CampaignVsCampainPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Campaign or Campain</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;campaign&quot; and &quot;campain&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Campain</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Campain&quot; is a misspelling. The correct spelling is &quot;campaign&quot; with a &quot;g&quot; before the &quot;n&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Campaign</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Campaign&quot; is the correct spelling. It means an organized effort to achieve a goal.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Campaign (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An organized effort to achieve a specific goal, often in politics, marketing, or military operations.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The political <strong>campaign</strong> lasted for months.</li>
                  <li>• They launched a marketing <strong>campaign</strong> for the new product.</li>
                  <li>• The military <strong>campaign</strong> was successful.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Campain (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Campain&quot; is a misspelling of &quot;campaign&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Campain&quot; is not used in standard English.</li>
                  <li>• Always use <strong>campaign</strong> when referring to organized efforts.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Campaign:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Drive</li>
                <li>• Crusade</li>
                <li>• Initiative</li>
                <li>• Effort</li>
                <li>• Operation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Campain:</h4>
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
            <li>• <strong>Campaign</strong> is spelled with a &quot;g&quot; before the &quot;n&quot;, not just &quot;n&quot;.</li>
            <li>• The word comes from Latin &quot;campania&quot; meaning open country.</li>
            <li>• Can be used as both a noun and a verb.</li>
            <li>• Commonly used in political, marketing, and military contexts.</li>
            <li>• &quot;Campain&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;campain&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;campain&quot; is never correct. The proper spelling is always &quot;campaign.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;camp-aign&quot; - the word has a &quot;g&quot; before the &quot;n&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between campaign and crusade?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean organized efforts, but &quot;crusade&quot; often implies moral or religious motivation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;campain&quot; likely occurs because of confusion about the silent &quot;g&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;campaign&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: campaign trail, campaign manager, and campaign promise.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can campaign be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;campaign&quot; can be used as a verb, as in &quot;to campaign for office.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is campaign only used in politics?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;campaign&quot; is used in many contexts including marketing, military, and social causes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word campaign?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Latin &quot;campania&quot; and was first used in English in the 17th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Campaign</strong> is the correct spelling with a &quot;g&quot; before the &quot;n&quot;. It means an organized effort to achieve a specific goal. The misspelling &quot;campain&quot; is never correct. Use &quot;campaign&quot; to describe organized efforts in politics, marketing, military, or other contexts.</p>
      </div>
    </div>
  )
} 