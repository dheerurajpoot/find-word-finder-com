import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Commencement or Commencment - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;commencement&quot; and &quot;commencment&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CommencementVsCommencmentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Commencement or Commencment</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;commencement&quot; and &quot;commencment&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Commencment</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Commencment&quot; is a misspelling. The correct spelling is &quot;commencement&quot; with an &quot;e&quot; after the &quot;c&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Commencement</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Commencement&quot; is the correct spelling. It means the beginning of something, or a graduation ceremony.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Commencement (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The beginning of something; a graduation ceremony.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>&quot;commencement&quot;</strong> of the project was delayed.</li>
                  <li>• She spoke at her college <strong>&quot;commencement&quot;</strong>.</li>
                  <li>• The ceremony marked the <strong>&quot;commencement&quot;</strong> of a new chapter.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Commencment (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Commencment&quot; is a misspelling of &quot;commencement&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Commencment&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;commencement&quot;</strong> when referring to a beginning or graduation ceremony.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Commencement:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Beginning</li>
                <li>• Start</li>
                <li>• Initiation</li>
                <li>• Opening</li>
                <li>• Launch</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Commencment:</h4>
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
            <li>• <strong>&quot;Commencement&quot;</strong> is spelled with an &quot;e&quot; after the &quot;c&quot;.</li>
            <li>• Used to describe the beginning of something or a graduation ceremony.</li>
            <li>• The word comes from Old French &quot;comencier&quot; meaning &quot;to begin&quot;.</li>
            <li>• &quot;Commencment&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;commencment&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;commencment&quot; is never correct. The proper spelling is always &quot;commencement.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;e&quot; after the &quot;c&quot; in &quot;commencement&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;commencement&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Commencement&quot; means the beginning of something or a graduation ceremony.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;commencment&quot; may occur due to omitting the &quot;e&quot; or mishearing the pronunciation.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Commencement&quot;</strong> is the correct spelling with an &quot;e&quot; after the &quot;c&quot;. It means the beginning of something or a graduation ceremony. The misspelling &quot;commencment&quot; is never correct. Use &quot;commencement&quot; in all contexts.</p>
      </div>
    </div>
  )
} 