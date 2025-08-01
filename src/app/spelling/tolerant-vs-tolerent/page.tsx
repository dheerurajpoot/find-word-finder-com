import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tolerant or Tolerent - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;tolerant&quot; and &quot;tolerent&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TolerantVsTolerentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Tolerant or Tolerent</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;tolerant&quot; and &quot;tolerent&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tolerent</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tolerent&quot; is a misspelling. The correct spelling is &quot;tolerant&quot; with an &quot;a&quot; before the &quot;t.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tolerant</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tolerant&quot; is the correct spelling. It means willing to accept or endure something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tolerant (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Willing to accept or endure something; showing tolerance.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She is very <strong>tolerant</strong> of different opinions.</li>
                  <li>• The community is <strong>tolerant</strong> of diverse cultures.</li>
                  <li>• He was <strong>tolerant</strong> of the noise from the construction.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tolerent (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tolerent&quot; is a misspelling of &quot;tolerant&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tolerent&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tolerant</strong> when referring to acceptance.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tolerant:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Accepting</li>
                <li>• Understanding</li>
                <li>• Patient</li>
                <li>• Forbearing</li>
                <li>• Liberal</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tolerent:</h4>
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
            <li>• <strong>Tolerant</strong> is spelled with an &quot;a&quot; before the &quot;t.&quot;</li>
            <li>• It is the adjective form of &quot;tolerance.&quot;</li>
            <li>• &quot;Tolerent&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;tolerans&quot; meaning &quot;bearing.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tolerent&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tolerent&quot; is never correct. The proper spelling is always &quot;tolerant.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;tolerant&quot; has an &quot;a&quot; before the &quot;t&quot; - think &quot;to-ler-ant.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;tolerant&quot; and &quot;tolerance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tolerant&quot; is an adjective, while &quot;tolerance&quot; is a noun.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tolerant&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tolerant&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;tolerant&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tolerent&quot; often happens due to pronunciation confusion or forgetting the &quot;a.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;tolerant&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: tolerant society, tolerant attitude, tolerant of differences, and tolerant community.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tolerant&quot; always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Usually, but it can also be used neutrally to describe acceptance without judgment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tolerant&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tolerant&quot; is only used as an adjective. The noun form is &quot;tolerance.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Tolerant</strong> is the correct spelling with an &quot;a&quot; before the &quot;t.&quot; It means willing to accept or endure something. The misspelling &quot;tolerent&quot; is never correct. Always use &quot;tolerant&quot; when referring to acceptance or patience.</p>
      </div>
    </div>
  )
} 