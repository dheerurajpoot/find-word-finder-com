import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Apology or Appology - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;apology&quot; and &quot;appology&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ApologyVsAppologyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Apology or Appology</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;apology&quot; and &quot;appology&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Appology</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Appology&quot; is a misspelling. The correct spelling is &quot;apology&quot; with one &quot;p&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Apology</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Apology&quot; is the correct spelling. It means a statement expressing regret or sorrow for wrongdoing.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Apology (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A statement expressing regret or sorrow for wrongdoing, offense, or mistake.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I owe you an <strong>apology</strong> for my behavior.</li>
                  <li>• The company issued a public <strong>apology</strong>.</li>
                  <li>• Please accept my sincere <strong>apology</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Appology (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Appology&quot; is a misspelling of &quot;apology&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Appology&quot; is not used in standard English.</li>
                  <li>• Always use <strong>apology</strong> when referring to a statement of regret.</li>
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
                <li>• Pardon</li>
                <li>• Amends</li>
                <li>• Repentance</li>
                <li>• Contrition</li>
                <li>• Remorse</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Appology:</h4>
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
            <li>• <strong>Apology</strong> is spelled with one &quot;p&quot;.</li>
            <li>• Used to express regret or sorrow for wrongdoing.</li>
            <li>• Can be used in both formal and informal contexts.</li>
            <li>• The word comes from the Greek &quot;apologia&quot; meaning &quot;defense.&quot;</li>
            <li>• &quot;Appology&quot; is never correct in any context.</li>
            <li>• Often used in phrases like &quot;make an apology&quot; or &quot;accept an apology.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;appology&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;appology&quot; is never correct. The proper spelling is always &quot;apology&quot; with one &quot;p&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;a-pol-o-gy&quot; - it&apos;s related to &quot;apologize&quot; with one &quot;p&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between apology and excuse?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: An &quot;apology&quot; expresses regret, while an &quot;excuse&quot; tries to justify or explain away the wrongdoing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apology be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;apology&quot; is very appropriate in formal writing and business communications.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;appology&quot; likely occurs because of confusion with words that have double consonants.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;apology&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: make an apology, accept an apology, public apology, and sincere apology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is apology always about wrongdoing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;apology&quot; always refers to a statement expressing regret for some form of wrongdoing or mistake.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apology be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;apology&quot; is a noun. The verb form is &quot;apologize&quot; (to apologize to someone).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Apology</strong> is the correct spelling with one &quot;p&quot;. It means a statement expressing regret or sorrow for wrongdoing. The misspelling &quot;appology&quot; is never correct. Use &quot;apology&quot; to refer to statements of regret in both formal and informal contexts.</p>
      </div>
    </div>
  )
} 