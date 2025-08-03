import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tedious or Tediuos - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;tedious&quot; and &quot;tediuos&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TediousVsTediuosPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Tedious or Tediuos</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;tedious&quot; and &quot;tediuos&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tediuos</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tediuos&quot; is a misspelling. The correct spelling is &quot;tedious&quot; with &quot;o&quot; before &quot;u.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tedious</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tedious&quot; is the correct spelling. It means boring and repetitive.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tedious (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Too long, slow, or dull; tiresome or monotonous; boring and repetitive.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The meeting was <strong>tedious</strong> and went on for hours.</li>
                  <li>• Filing paperwork is a <strong>tedious</strong> task.</li>
                  <li>• The <strong>tedious</strong> process took all day.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tediuos (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tediuos&quot; is a misspelling of &quot;tedious&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tediuos&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tedious</strong> when referring to boring tasks.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tedious:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Boring</li>
                <li>• Monotonous</li>
                <li>• Tiresome</li>
                <li>• Dull</li>
                <li>• Repetitive</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tediuos:</h4>
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
            <li>• <strong>Tedious</strong> is spelled with &quot;o&quot; before &quot;u&quot;: te-di-ous.</li>
            <li>• It is commonly used to describe boring or repetitive tasks.</li>
            <li>• &quot;Tediuos&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;taedium&quot; meaning &quot;weariness.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tediuos&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tediuos&quot; is never correct. The proper spelling is always &quot;tedious.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;tedious&quot; has &quot;o&quot; before &quot;u&quot; - think of it as &quot;te-di-ous.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between tedious and boring?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Tedious specifically suggests something is long, slow, and repetitive, while boring is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tedious&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tedious&quot; is appropriate in formal and academic writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;tedious&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tediuos&quot; often happens by transposing the &quot;o&quot; and &quot;u.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;tedious&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: tedious task, tedious process, tedious work, and tedious procedure.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tedious&quot; always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tedious&quot; always has a negative connotation, suggesting something is boring or tiresome.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tedious&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tedious&quot; is only used as an adjective in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Tedious</strong> is the correct spelling with &quot;o&quot; before &quot;u&quot;: te-di-ous. It means too long, slow, or dull; tiresome or monotonous. The misspelling &quot;tediuos&quot; is never correct. Always use &quot;tedious&quot; when referring to boring, repetitive, or tiresome tasks or processes in any context.</p>
      </div>
    </div>
  )
} 