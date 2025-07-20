import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Warrant or Warrent - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;warrant&quot; and &quot;warrent&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WarrantVsWarrentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Warrant or Warrent</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;warrant&quot; and &quot;warrent&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Warrent</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Warrent&quot; is a misspelling. The correct spelling is &quot;warrant&quot; with an &quot;a&quot; before the &quot;n&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Warrant</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Warrant&quot; is the correct spelling. It refers to a legal document authorizing an action or a justification for something.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Warrant</strong> is the correct spelling. It is a noun meaning a legal document or justification, and a verb meaning to justify or guarantee.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Warrent</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Warrant (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A legal document authorizing police or another body to make an arrest, search premises, or carry out some other action; justification or authority for an action or belief.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Warrant (verb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            To justify or necessitate a certain course of action; to guarantee or affirm.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used in legal, business, and everyday contexts to refer to official documents or justifications.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The police obtained a search <span className="text-green-600 font-semibold">warrant</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;There is no <span className="text-green-600 font-semibold">warrant</span> for his arrest.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;His actions do not <span className="text-green-600 font-semibold">warrant</span> such a response.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;The police obtained a search <span className="text-red-600 font-semibold">warrent</span>&quot; (should be &quot;warrant&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For legal document:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Authorization</li>
                <li>• Permit</li>
                <li>• License</li>
                <li>• Order</li>
                <li>• Writ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For justification:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Justification</li>
                <li>• Reason</li>
                <li>• Grounds</li>
                <li>• Basis</li>
                <li>• Sanction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Warrant&quot; is spelled with an &quot;a&quot; before the &quot;n&quot;</li>
          <li>• It is both a noun and a verb</li>
          <li>• The word comes from Old North French &quot;warant&quot;</li>
          <li>• Used in legal, business, and everyday contexts</li>
          <li>• &quot;Warrent&quot; is never correct in English</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;warrent&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;warrent&quot; is never correct. The correct spelling is always &quot;warrant&quot; with an &quot;a&quot; before the &quot;n&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;warrant&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WAHR-uhnt&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;warrant&quot; and &quot;warrent&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Warrant&quot; is the correct spelling meaning a legal document or justification, while &quot;warrent&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;warrant&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;warrant&quot; can refer to legal documents, justifications, or guarantees in various contexts.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;warrant&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;warrent&quot;, possibly because of the similar pronunciation. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Warrant</strong> is the correct spelling. It is both a noun and a verb meaning legal document, justification, or to justify/guarantee.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Warrent</strong> is always incorrect. Remember to use an &quot;a&quot; before the &quot;n&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 