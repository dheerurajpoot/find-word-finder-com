import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Chief or Cheif - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;chief&quot; and &quot;cheif&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ChiefVsCheifPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Chief or Cheif
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Chief or Cheif these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Cheif</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Cheif&quot; is a misspelling. The correct spelling has the letters &apos;i&apos; and &apos;e&apos; in the correct order.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Chief</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Chief&quot; is the correct spelling. It refers to a leader or person in charge.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Chief</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Chief</strong> (noun): A leader or person in charge of a group, organization, or tribe; the most important or prominent person in a particular field or area.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The <strong>chief</strong> of police addressed the media about the investigation.</li>
              <li>• She was appointed <strong>chief</strong> executive officer of the company.</li>
              <li>• The tribal <strong>chief</strong> led the ceremony with great dignity.</li>
              <li>• He is the <strong>chief</strong> architect of this innovative project.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Chief</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Leadership Titles:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Leader</li>
                <li>• Head</li>
                <li>• Boss</li>
                <li>• Director</li>
                <li>• Manager</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Principal</li>
                <li>• Commander</li>
                <li>• Captain</li>
                <li>• Superintendent</li>
                <li>• Overseer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Chief</strong> is spelled with &apos;i&apos; before &apos;e&apos; (chief), not &apos;e&apos; before &apos;i&apos; (cheif).</li>
            <li>• The word follows the rule &quot;i before e except after c&quot; - there&apos;s no &apos;c&apos; before the &apos;ie&apos; in chief.</li>
            <li>• &quot;Cheif&quot; is a common misspelling that appears in informal writing.</li>
            <li>• The word can be used as both a noun and an adjective.</li>
            <li>• In some contexts, &quot;chief&quot; can also mean &quot;main&quot; or &quot;primary.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;cheif&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;cheif&quot; is never correct in standard English. The proper spelling is always &quot;chief&quot; with &apos;i&apos; before &apos;e&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Remember the rule &quot;i before e except after c&quot; - since there&apos;s no &apos;c&apos; before the &apos;ie&apos; in chief, it should be &apos;i&apos; before &apos;e&apos;. Think: &quot;I am the chief&quot; - the &apos;I&apos; comes first.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between chief and leader?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Chief&quot; typically refers to the highest-ranking person in a specific organization or group, while &quot;leader&quot; is a more general term for someone who guides or directs others. A chief is always a leader, but not all leaders are chiefs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;chief&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;chief&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, professional, and official contexts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;cheif&quot; likely occurs because people may confuse the &quot;i before e&quot; rule or be influenced by the pronunciation. The &quot;ie&quot; sound can be tricky to spell correctly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;chief&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: chief executive officer (CEO), chief of staff, chief justice, chief engineer, chief financial officer (CFO), chief operating officer (COO), and chief complaint.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;chief&quot; related to &quot;chef&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! Both words come from the same French root meaning &quot;head&quot; or &quot;chief.&quot; A chef is literally the &quot;chief&quot; or head of the kitchen, while chief refers to any leader or person in charge.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;chief&quot; be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;chief&quot; can be used as an adjective meaning &quot;main&quot; or &quot;primary.&quot; For example: &quot;The chief reason for the delay&quot; or &quot;Her chief concern was safety.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Chief</strong> is the correct spelling with &apos;i&apos; before &apos;e&apos;. It refers to a leader or person in charge of a group, organization, or tribe. The misspelling &quot;cheif&quot; with &apos;e&apos; before &apos;i&apos; is never correct. Use this word when referring to leaders, heads of organizations, or the most important person in a particular field.
        </p>
      </div>
    </div>
  )
} 