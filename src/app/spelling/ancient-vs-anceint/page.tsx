import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Ancient or Anceint - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;ancient&quot; and &quot;anceint&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AncientVsAnceintPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Ancient or Anceint</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;ancient&quot; and &quot;anceint&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Anceint</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Anceint&quot; is a misspelling. The correct spelling is &quot;ancient&quot; with &quot;i&quot; before &quot;e&quot; after the &quot;c&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Ancient</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Ancient&quot; is the correct spelling. It means belonging to the very distant past and no longer in existence.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Ancient (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Belonging to the very distant past and no longer in existence.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>ancient</strong> ruins attracted many tourists.</li>
                  <li>• He studied <strong>ancient</strong> history at university.</li>
                  <li>• The <strong>ancient</strong> civilization left behind many artifacts.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Anceint (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Anceint&quot; is a misspelling of &quot;ancient&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Anceint&quot; is not used in standard English.</li>
                  <li>• Always use <strong>ancient</strong> when referring to something from the distant past.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Ancient:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Old</li>
                <li>• Antique</li>
                <li>• Archaic</li>
                <li>• Prehistoric</li>
                <li>• Primeval</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Anceint:</h4>
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
            <li>• <strong>Ancient</strong> is spelled with &quot;i&quot; before &quot;e&quot; after the &quot;c&quot;.</li>
            <li>• Used to describe things from the distant past.</li>
            <li>• The word comes from Latin &quot;anteanus&quot; meaning &quot;former, old&quot;.</li>
            <li>• &quot;Anceint&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;anceint&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;anceint&quot; is never correct. The proper spelling is always &quot;ancient.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;i&quot; before &quot;e&quot; after the &quot;c&quot; in &quot;ancient.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does ancient mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means belonging to the very distant past and no longer in existence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;anceint&quot; occurs because people reverse the order of &quot;i&quot; and &quot;e&quot; after the &quot;c&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Ancient</strong> is the correct spelling with &quot;i&quot; before &quot;e&quot; after the &quot;c&quot;. It means belonging to the very distant past and no longer in existence. The misspelling &quot;anceint&quot; is never correct. Use &quot;ancient&quot; for all references to things from the distant past.</p>
      </div>
    </div>
  )
} 