import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Texts or Textes - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;texts&quot; and &quot;textes&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TextsVsTextesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Texts or Textes</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;texts&quot; and &quot;textes&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Textes</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Textes&quot; is a misspelling. The correct spelling is &quot;texts&quot; with &quot;s&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Texts</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Texts&quot; is the correct spelling. It means written words or messages.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Texts (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Written words; messages sent electronically; the plural form of &quot;text&quot;; to send a text message.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I sent several <strong>texts</strong> to my friend.</li>
                  <li>• The ancient <strong>texts</strong> were fascinating.</li>
                  <li>• She <strong>texts</strong> me every day.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Textes (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Textes&quot; is a misspelling of &quot;texts&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Textes&quot; is not used in standard English.</li>
                  <li>• Always use <strong>texts</strong> when referring to written words.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Texts:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Messages</li>
                <li>• Writings</li>
                <li>• Documents</li>
                <li>• Passages</li>
                <li>• SMS</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Textes:</h4>
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
            <li>• <strong>Texts</strong> is spelled with &quot;s&quot; at the end: text-s.</li>
            <li>• It is the plural form of &quot;text&quot; and can also be a verb.</li>
            <li>• &quot;Textes&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;textus&quot; meaning &quot;woven.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;textes&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;textes&quot; is never correct. The proper spelling is always &quot;texts.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;texts&quot; ends with &quot;s&quot; - think of it as &quot;text-s.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;texts&quot; and &quot;messages&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Texts&quot; specifically refers to written words, while &quot;messages&quot; can be any form of communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;texts&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;texts&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;texts&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;textes&quot; often happens by replacing &quot;s&quot; with &quot;es&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;texts&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: text messages, sacred texts, text books, and text messaging.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;texts&quot; always about messages?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;texts&quot; can refer to any written words, not just electronic messages.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;texts&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;texts&quot; can be used as a verb meaning to send a text message.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Texts</strong> is the correct spelling with &quot;s&quot; at the end: text-s. It means written words or messages, and can also be used as a verb. The misspelling &quot;textes&quot; is never correct. Always use &quot;texts&quot; when referring to written words, documents, or electronic messages.</p>
      </div>
    </div>
  )
} 