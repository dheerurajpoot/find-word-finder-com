import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Usurpation or Usurption - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;usurpation&quot; and &quot;usurption&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function UsurpationVsUsurptionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Usurpation or Usurption</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;usurpation&quot; and &quot;usurption&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Usurption</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Usurption&quot; is a misspelling. The correct spelling is &quot;usurpation&quot; with an &quot;a&quot; after the &quot;p&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Usurpation</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Usurpation&quot; is the correct spelling. It refers to the act of taking someone else&apos;s power or property by force or without legal right.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Usurpation (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The act of taking a position of power or importance illegally or by force.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The general&apos;s <strong>usurpation</strong> of the throne shocked the nation.</li>
                  <li>• The company accused its rival of <strong>usurpation</strong> of its trademark.</li>
                  <li>• History is full of stories of <strong>usurpation</strong> of power.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Usurption:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Usurption&quot; is a misspelling of &quot;usurpation&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Usurption&quot; is not used in standard English.</li>
                  <li>• Always use <strong>usurpation</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Usurpation:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Seizure</li>
                <li>• Appropriation</li>
                <li>• Takeover</li>
                <li>• Encroachment</li>
                <li>• Expropriation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Usurption:</h4>
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
            <li>• <strong>Usurpation</strong> is spelled with an &quot;a&quot; after the &quot;p&quot;.</li>
            <li>• &quot;Usurption&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;usurpatio&quot; meaning &quot;a taking into use&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;usurption&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;usurption&quot; is never correct. The proper spelling is always &quot;usurpation&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;usurpation&quot; has an &quot;a&quot; after the &quot;p&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does usurpation mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Usurpation&quot; means the act of taking power or property by force or without legal right.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;usurpation&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;usurption&quot; often happens by omitting the &quot;a&quot;. Always use &quot;a&quot; after the &quot;p&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;usurpation&quot; used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;usurpation&quot; is the correct spelling in all contexts, both formal and informal.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Usurpation</strong> is the correct spelling, meaning the act of taking power or property by force. The misspelling &quot;usurption&quot; is never correct. Always use &quot;usurpation&quot; in your writing.</p>
      </div>
    </div>
  )
} 