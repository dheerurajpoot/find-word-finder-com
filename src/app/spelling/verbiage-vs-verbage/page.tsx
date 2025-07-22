import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Verbiage or Verbage - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;verbiage&quot; and &quot;verbage&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VerbiageVsVerbagePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Verbiage or Verbage</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;verbiage&quot; and &quot;verbage&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Verbage</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Verbage&quot; is a misspelling. The correct spelling is &quot;verbiage&quot; with an &quot;i&quot; after the &quot;b&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Verbiage</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Verbiage&quot; is the correct spelling. It means speech or writing that uses too many words or excessively technical expressions.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Verbiage (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Speech or writing that uses too many words or excessively technical expressions.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The report was full of unnecessary <strong>verbiage</strong>.</li>
                  <li>• Try to avoid excessive <strong>verbiage</strong> in your essay.</li>
                  <li>• The contract&apos;s <strong>verbiage</strong> confused the client.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Verbage:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Verbage&quot; is a misspelling of &quot;verbiage&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Verbage&quot; is not used in standard English.</li>
                  <li>• Always use <strong>verbiage</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Verbiage:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Wordiness</li>
                <li>• Prolixity</li>
                <li>• Redundancy</li>
                <li>• Loquacity</li>
                <li>• Circumlocution</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Verbage:</h4>
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
            <li>• <strong>Verbiage</strong> is spelled with an &quot;i&quot; after the &quot;b&quot;.</li>
            <li>• &quot;Verbage&quot; is never correct in any context.</li>
            <li>• The word comes from French &quot;verbiage&quot; meaning &quot;wordiness&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;verbage&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;verbage&quot; is never correct. The proper spelling is always &quot;verbiage&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;verbiage&quot; has an &quot;i&quot; after the &quot;b&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does verbiage mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Verbiage&quot; means speech or writing that uses too many words or excessively technical expressions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;verbiage&quot; be used in a positive sense?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Usually, &quot;verbiage&quot; has a negative connotation, but it can sometimes refer neutrally to the style of wording.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;verbiage&quot; used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;verbiage&quot; is appropriate for both formal and informal writing, especially when discussing writing style.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Verbiage</strong> is the correct spelling, meaning wordiness or excessive wording. The misspelling &quot;verbage&quot; is never correct. Always use &quot;verbiage&quot; in your writing.</p>
      </div>
    </div>
  )
} 