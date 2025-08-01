import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Threat or Treath - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;threat&quot; and &quot;treath&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThreatVsTreathPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Threat or Treath</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;threat&quot; and &quot;treath&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Treath</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Treath&quot; is a misspelling. The correct spelling is &quot;threat&quot; with the letters in the right order.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Threat</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Threat&quot; is the correct spelling. It means a statement of an intention to harm or cause trouble.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Threat (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A statement of an intention to harm or cause trouble; a person or thing likely to cause damage or danger.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The storm posed a serious <strong>threat</strong> to the city.</li>
                  <li>• He made a <strong>threat</strong> against his neighbor.</li>
                  <li>• Climate change is a global <strong>threat</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Treath (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Treath&quot; is a misspelling of &quot;threat&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Treath&quot; is not used in standard English.</li>
                  <li>• Always use <strong>threat</strong> when referring to danger or harm.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Threat:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Danger</li>
                <li>• Menace</li>
                <li>• Risk</li>
                <li>• Hazard</li>
                <li>• Peril</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Treath:</h4>
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
            <li>• <strong>Threat</strong> is spelled with the letters in the correct order: t-h-r-e-a-t.</li>
            <li>• It can refer to both verbal statements and physical dangers.</li>
            <li>• &quot;Treath&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þreat&quot; meaning &quot;crowd, troop, threat.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;treath&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;treath&quot; is never correct. The proper spelling is always &quot;threat.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;threat&quot; has the letters in the correct order: t-h-r-e-a-t.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;threat&quot; and &quot;danger&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Threat&quot; implies an intention to harm, while &quot;danger&quot; refers to a general risk or hazard.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;threat&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;threat&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;threat&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;treath&quot; often happens due to transposing letters or typing errors.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;threat&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: threat level, threat assessment, threat of violence, and security threat.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;threat&quot; always about harm?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;threat&quot; always implies some form of potential harm, danger, or trouble.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;threat&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;threat&quot; is only used as a noun. The verb form is &quot;threaten.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Threat</strong> is the correct spelling with the letters in the right order: t-h-r-e-a-t. It means a statement of an intention to harm or cause trouble. The misspelling &quot;treath&quot; is never correct. Always use &quot;threat&quot; when referring to danger, harm, or potential trouble.</p>
      </div>
    </div>
  )
} 