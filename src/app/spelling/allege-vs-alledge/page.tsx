import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Allege or Alledge - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;allege&quot; and &quot;alledge&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AllegeVsAlledgePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Allege or Alledge</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;allege&quot; and &quot;alledge&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alledge</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alledge&quot; is a common misspelling. The correct spelling is &quot;allege&quot; with a single &apos;l&apos; and double &apos;g&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Allege</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Allege&quot; is the correct spelling. It means to claim or assert that someone has done something illegal or wrong, typically without proof.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Allege (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To claim or assert that someone has done something illegal or wrong, typically without proof.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The report <strong>alleges</strong> widespread corruption.</li>
                  <li>• He is alleged to have committed fraud.</li>
                  <li>• The witness <strong>alleged</strong> that she saw the suspect at the scene.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alledge (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alledge&quot; is not a standard English word and is considered a misspelling of &quot;allege&quot;.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Alledge&quot; is not used in standard English for &quot;allege&quot;.</li>
                  <li>• Always use <strong>allege</strong> when referring to a claim or assertion.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Allege:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Claim</li>
                <li>• Assert</li>
                <li>• Accuse</li>
                <li>• Maintain</li>
                <li>• State</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alledge:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word in this context)</li>
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
            <li>• <strong>Allege</strong> is spelled with a single &apos;l&apos; and double &apos;g&apos;, not double &apos;l&apos;.</li>
            <li>• Used to describe claims or accusations, often in legal or news contexts.</li>
            <li>• The noun form is &quot;allegation&quot;.</li>
            <li>• The adjective form is &quot;alleged&quot;.</li>
            <li>• The opposite is &quot;deny&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alledge&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alledge&quot; is never correct as a spelling for &quot;allege&quot;. Always use &quot;allege&quot; for a claim or assertion.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;allege&quot; has a single &apos;l&apos; and double &apos;g&apos;, like &quot;allegation&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;allege&quot; be used in everyday conversation?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;allege&quot; can be used in both formal and informal contexts, but is more common in legal or news reports.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;allege&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: allege wrongdoing, allege misconduct, allege fraud, allege abuse.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alledge&quot; happens because double &apos;l&apos; is common in English, but &quot;allege&quot; only has one &apos;l&apos; and double &apos;g&apos;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Allege</strong> is the correct spelling with a single &apos;l&apos; and double &apos;g&apos;. It means to claim or assert, typically without proof. The misspelling &quot;alledge&quot; is never correct. Use &quot;allege&quot; in legal, journalistic, and formal contexts.</p>
      </div>
    </div>
  )
} 