import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Apology or Apolagy - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;apology&quot; and &quot;apolagy&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ApologyVsApolagyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Apology or Apolagy</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;apology&quot; and &quot;apolagy&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Apolagy</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Apolagy&quot; is a misspelling. The correct spelling is &quot;apology&quot; with an &quot;o&quot; after &quot;ap.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Apology</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Apology&quot; is the correct spelling. It means a regretful acknowledgment of an offense or failure.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Apology (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A regretful acknowledgment of an offense or failure; a formal justification or defense.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I owe you an <strong>apology</strong> for being late.</li>
                  <li>• She accepted his <strong>apology</strong> for the mistake.</li>
                  <li>• The company issued a public <strong>apology</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Apolagy (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Apolagy&quot; is a misspelling of &quot;apology&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Apolagy&quot; is not used in standard English.</li>
                  <li>• Always use <strong>apology</strong> when referring to regrets or excuses.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Apology:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Excuse</li>
                <li>• Regret</li>
                <li>• Remorse</li>
                <li>• Justification</li>
                <li>• Defense</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Apolagy:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Apology</strong> is spelled with an &quot;o&quot; after &quot;ap&quot;, not &quot;a&quot;.</li>
            <li>• Used to express regret, remorse, or formal justification.</li>
            <li>• Can be a noun meaning a regretful acknowledgment or a formal defense.</li>
            <li>• The word comes from Greek &quot;apologia&quot; meaning defense or justification.</li>
            <li>• &quot;Apolagy&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;apolagy&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;apolagy&quot; is never correct. The proper spelling is always &quot;apology&quot; with an &quot;o&quot; after &quot;ap.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ap-o-logy&quot; - the &quot;o&quot; comes after &quot;ap&quot; and before &quot;logy.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between apology and apologize?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Apology&quot; is the noun (the regretful statement), while &quot;apologize&quot; is the verb (to make an apology).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apology be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;apology&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;apolagy&quot; likely occurs because of confusion about the letter order or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;apology&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: accept an apology, owe an apology, public apology, and sincere apology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you pronounce apology?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The correct pronunciation is /əˈpɒlədʒi/ (uh-POL-uh-jee).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the plural form of apology?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The plural form is &quot;apologies&quot; - meaning multiple regretful acknowledgments.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Apology</strong> is the correct spelling with an &quot;o&quot; after &quot;ap&quot;. It means a regretful acknowledgment of an offense or failure. The misspelling &quot;apolagy&quot; is never correct. Use &quot;apology&quot; when expressing regret, remorse, or formal justification for actions or mistakes.</p>
      </div>
    </div>
  )
} 