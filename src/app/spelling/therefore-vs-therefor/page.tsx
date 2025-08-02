import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Therefore or Therefor - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;therefore&quot; and &quot;therefor&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThereforeVsThereforPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Therefore or Therefor</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;therefore&quot; and &quot;therefor&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Therefor</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Therefor&quot; is a misspelling. The correct spelling is &quot;therefore&quot; with &quot;fore&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Therefore</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Therefore&quot; is the correct spelling. It means as a result or consequently.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Therefore (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">As a result; consequently; for that reason; hence; thus.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• It was raining; <strong>therefore</strong>, we stayed home.</li>
                  <li>• He was late, <strong>therefore</strong> he missed the meeting.</li>
                  <li>• The evidence was clear; <strong>therefore</strong>, the verdict was obvious.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Therefor (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Therefor&quot; is a misspelling of &quot;therefore&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Therefor&quot; is not used in standard English.</li>
                  <li>• Always use <strong>therefore</strong> when indicating consequence.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Therefore:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Consequently</li>
                <li>• Thus</li>
                <li>• Hence</li>
                <li>• As a result</li>
                <li>• For that reason</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Therefor:</h4>
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
            <li>• <strong>Therefore</strong> is spelled with &quot;fore&quot; at the end: there-fore.</li>
            <li>• It is a conjunctive adverb indicating logical consequence.</li>
            <li>• &quot;Therefor&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þǣrfore&quot; meaning &quot;for that.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;therefor&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;therefor&quot; is never correct. The proper spelling is always &quot;therefore.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;therefore&quot; has &quot;fore&quot; at the end - think of it as &quot;there-fore.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;therefore&quot; and &quot;thus&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both indicate consequence, but &quot;therefore&quot; is more formal and commonly used in academic writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;therefore&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;therefore&quot; is very appropriate in formal and academic writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;therefore&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;therefor&quot; often happens by omitting the &quot;e&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;therefore&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: and therefore, therefore we can conclude, therefore it follows, and therefore the result.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;therefore&quot; always about logic?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;therefore&quot; always indicates a logical consequence or result.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;therefore&quot; be used as a conjunction?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;therefore&quot; is an adverb, not a conjunction, though it connects ideas logically.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Therefore</strong> is the correct spelling with &quot;fore&quot; at the end: there-fore. It is an adverb meaning as a result or consequently. The misspelling &quot;therefor&quot; is never correct. Always use &quot;therefore&quot; when indicating logical consequence or result.</p>
      </div>
    </div>
  )
} 