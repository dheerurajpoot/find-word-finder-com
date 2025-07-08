import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Alleviate or Alliviate - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;alleviate&quot; and &quot;alliviate&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AlleviateVsAlliviatePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Alleviate or Alliviate</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;alleviate&quot; and &quot;alliviate&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alliviate</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alliviate&quot; is a common misspelling. The correct spelling is &quot;alleviate&quot; with an &apos;e&apos; after the &apos;l&apos; and a single &apos;l&apos; at the start.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Alleviate</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Alleviate&quot; is the correct spelling. It means to make (suffering, deficiency, or a problem) less severe.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Alleviate (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To make (suffering, deficiency, or a problem) less severe; to relieve or ease.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The medicine will help <strong>alleviate</strong> the pain.</li>
                  <li>• Efforts were made to <strong>alleviate</strong> poverty.</li>
                  <li>• The new law aims to <strong>alleviate</strong> traffic congestion.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alliviate (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alliviate&quot; is not a standard English word and is considered a misspelling of &quot;alleviate&quot;.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Alliviate&quot; is not used in standard English for &quot;alleviate&quot;.</li>
                  <li>• Always use <strong>alleviate</strong> when referring to relief or easing.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Alleviate:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Relieve</li>
                <li>• Ease</li>
                <li>• Lessen</li>
                <li>• Mitigate</li>
                <li>• Soothe</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alliviate:</h4>
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
            <li>• <strong>Alleviate</strong> is spelled with an &apos;e&apos; after the &apos;l&apos; and a single &apos;l&apos; at the start, not double &apos;l&apos; at the start.</li>
            <li>• Used to describe making something less severe.</li>
            <li>• The noun form is &quot;alleviation&quot;.</li>
            <li>• The opposite is &quot;aggravate&quot;.</li>
            <li>• &quot;Alliviate&quot; is not correct in this context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alliviate&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alliviate&quot; is never correct as a spelling for &quot;alleviate&quot;. Always use &quot;alleviate&quot; for relief or easing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;alleviate&quot; has an &apos;e&apos; after the &apos;l&apos; and a single &apos;l&apos; at the start.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;alleviate&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;alleviate&quot; can refer to reducing pain, stress, or problems.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;alleviate&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: alleviate pain, alleviate suffering, alleviate symptoms, alleviate concerns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alliviate&quot; happens because double &apos;l&apos; is common in English, but &quot;alleviate&quot; only has one &apos;l&apos; at the start and an &apos;e&apos; after the &apos;l&apos;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Alleviate</strong> is the correct spelling with an &apos;e&apos; after the &apos;l&apos; and a single &apos;l&apos; at the start. It means to make something less severe. The misspelling &quot;alliviate&quot; is never correct. Use &quot;alleviate&quot; in medical, social, and everyday contexts.</p>
      </div>
    </div>
  )
} 