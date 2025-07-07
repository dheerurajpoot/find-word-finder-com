import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Allusion vs Illusion - Which is Correct? | Word Finder',
  description: 'Learn the difference and correct usage between &quot;allusion&quot; and &quot;illusion&quot;. Discover definitions, examples, and common mistakes to avoid.',
}

export default function AllusionVsIllusionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Allusion vs Illusion</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Word is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;allusion&quot; or &quot;illusion&quot;? Learn the difference in meaning, spelling, and usage to avoid common mistakes in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-blue-500 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">📚</span>
              <h3 className="text-2xl font-bold text-blue-800">Allusion</h3>
            </div>
            <p className="text-lg md:text-xl text-blue-700">&quot;Allusion&quot; is a reference to something, often indirect or implied, especially in literature or speech.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-purple-500 bg-purple-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🎩</span>
              <h3 className="text-2xl font-bold text-purple-800">Illusion</h3>
            </div>
            <p className="text-lg md:text-xl text-purple-700">&quot;Illusion&quot; is a false idea, belief, or appearance; something that deceives by producing a false impression of reality.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Allusion (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An indirect or passing reference to something, especially in literature, art, or speech.</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-blue-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                  <li>• The novel is full of <strong>allusions</strong> to classical mythology.</li>
                  <li>• Her speech made an <strong>allusion</strong> to Shakespeare.</li>
                  <li>• The painting contains subtle <strong>allusions</strong> to historical events.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-900">Illusion (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A deceptive appearance or impression; something that misleads the mind or senses.</p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-purple-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-purple-800 space-y-2">
                  <li>• The magician created the <strong>illusion</strong> of levitation.</li>
                  <li>• Mirrors can give the <strong>illusion</strong> of more space.</li>
                  <li>• He was under the <strong>illusion</strong> that he would win easily.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Allusion:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Reference</li>
                <li>• Hint</li>
                <li>• Mention</li>
                <li>• Suggestion</li>
                <li>• Indirect mention</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-purple-900">Illusion:</h4>
              <ul className="text-lg md:text-xl text-purple-800 space-y-1">
                <li>• Mirage</li>
                <li>• Deception</li>
                <li>• Hallucination</li>
                <li>• Delusion</li>
                <li>• Fantasy</li>
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
            <li>• <strong>Allusion</strong> is about making a reference; <strong>illusion</strong> is about creating a false impression.</li>
            <li>• Both words sound similar but have very different meanings and uses.</li>
            <li>• &quot;Allusion&quot; is common in literature and art; &quot;illusion&quot; is common in magic, psychology, and everyday speech.</li>
            <li>• Do not confuse &quot;allusion&quot; with &quot;illusion&quot; in your writing.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;allusion&quot; and &quot;illusion&quot; be used interchangeably?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, they have different meanings. &quot;Allusion&quot; is a reference; &quot;illusion&quot; is a false impression or deception.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How can I remember the difference?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember: &quot;Allusion&quot; starts with &apos;a&apos; for &apos;art&apos; (reference in art/literature); &quot;illusion&quot; starts with &apos;i&apos; for &apos;imagination&apos; (false impression).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are there other words that are commonly confused with these?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;elusion&quot; (escape/avoidance) is also sometimes confused with &quot;allusion&quot; and &quot;illusion&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Allusion</strong> is a reference, often indirect. <strong>Illusion</strong> is a false impression or deception. Use them carefully to avoid confusion in your writing.</p>
      </div>
    </div>
  )
} 