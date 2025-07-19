import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Clerk or Clerck - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;clerk&quot; and &quot;clerck&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ClerkVsClerckPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Clerk or Clerck</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;clerk&quot; and &quot;clerck&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Clerck</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Clerck&quot; is a misspelling. The correct spelling is &quot;clerk&quot; with no &quot;c&quot; before the &quot;k&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Clerk</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Clerk&quot; is the correct spelling. It refers to a person employed in an office or bank to keep records, accounts, and undertake other routine administrative duties.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Clerk (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person employed in an office, bank, or shop to keep records, accounts, and perform routine administrative tasks.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>clerk</strong> helped me at the bank.</li>
                  <li>• She works as a <strong>clerk</strong> in a law office.</li>
                  <li>• The store <strong>clerk</strong> was very helpful.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Clerck (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Clerck&quot; is a misspelling of &quot;clerk&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Clerck&quot; is not used in standard English.</li>
                  <li>• Always use <strong>clerk</strong> when referring to an office or shop worker.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Clerk:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Assistant</li>
                <li>• Secretary</li>
                <li>• Administrator</li>
                <li>• Receptionist</li>
                <li>• Bookkeeper</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Clerck:</h4>
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
            <li>• <strong>Clerk</strong> is spelled with no &quot;c&quot; before the &quot;k&quot;.</li>
            <li>• Used to describe office, bank, or shop workers.</li>
            <li>• The word comes from Latin &quot;clericus&quot; meaning &quot;clergyman&quot; or &quot;scholar&quot;.</li>
            <li>• &quot;Clerck&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;clerck&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;clerck&quot; is never correct. The proper spelling is always &quot;clerk.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember there is no &quot;c&quot; before the &quot;k&quot; in &quot;clerk&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;clerk&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A &quot;clerk&quot; is a person who works in an office, bank, or shop, handling records and administrative tasks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;clerck&quot; may occur due to confusion with similar-sounding words or overcomplicating the spelling.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Clerk</strong> is the correct spelling with no &quot;c&quot; before the &quot;k&quot;. It refers to a person who works in an office, bank, or shop. The misspelling &quot;clerck&quot; is never correct. Use &quot;clerk&quot; in all contexts.</p>
      </div>
    </div>
  )
} 