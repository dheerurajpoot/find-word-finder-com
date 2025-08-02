import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Theory or Thoery - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;theory&quot; and &quot;thoery&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TheoryVsThoeryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Theory or Thoery</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;theory&quot; and &quot;thoery&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Thoery</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Thoery&quot; is a misspelling. The correct spelling is &quot;theory&quot; with &quot;ry&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Theory</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Theory&quot; is the correct spelling. It means a system of ideas or principles.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Theory (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A supposition or a system of ideas intended to explain something; a set of principles on which the practice of an activity is based.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Einstein&apos;s <strong>theory</strong> of relativity changed physics.</li>
                  <li>• The <strong>theory</strong> behind this approach is sound.</li>
                  <li>• She has a <strong>theory</strong> about what happened.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Thoery (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Thoery&quot; is a misspelling of &quot;theory&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Thoery&quot; is not used in standard English.</li>
                  <li>• Always use <strong>theory</strong> when referring to ideas or principles.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Theory:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Hypothesis</li>
                <li>• Concept</li>
                <li>• Principle</li>
                <li>• Idea</li>
                <li>• Framework</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Thoery:</h4>
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
            <li>• <strong>Theory</strong> is spelled with &quot;ry&quot; at the end: the-o-ry.</li>
            <li>• It is a common word in academic and scientific contexts.</li>
            <li>• &quot;Thoery&quot; is never correct in any context.</li>
            <li>• The word comes from Greek &quot;theōria&quot; meaning &quot;contemplation.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thoery&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thoery&quot; is never correct. The proper spelling is always &quot;theory.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;theory&quot; ends with &quot;ry&quot; - think of it as &quot;the-o-ry.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between a theory and a hypothesis?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A hypothesis is a proposed explanation, while a theory is a well-substantiated explanation that has been tested and supported by evidence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;theory&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;theory&quot; is very appropriate in formal and academic writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;theory&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;thoery&quot; often happens by transposing the letters &quot;e&quot; and &quot;o.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;theory&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: in theory, theory of evolution, conspiracy theory, and game theory.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;theory&quot; always scientific?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;theory&quot; can refer to any system of ideas or principles, not just scientific ones.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;theory&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;theory&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Theory</strong> is the correct spelling with &quot;ry&quot; at the end: the-o-ry. It means a system of ideas or principles intended to explain something. The misspelling &quot;thoery&quot; is never correct. Always use &quot;theory&quot; when referring to concepts, principles, or explanatory frameworks.</p>
      </div>
    </div>
  )
} 