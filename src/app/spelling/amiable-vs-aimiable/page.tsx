import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Amiable or Aimiable - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;amiable&quot; and &quot;aimiable&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AmiableVsAimiablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Amiable or Aimiable</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;amiable&quot; or &quot;aimiable&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aimiable</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aimiable&quot; is a common misspelling. The correct spelling is &quot;amiable&quot; with no &apos;i&apos; after the &apos;a&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Amiable</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Amiable&quot; is the correct spelling. It means having a friendly and pleasant manner.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Amiable</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Amiable</strong> (adjective): Having a friendly and pleasant manner.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She has an <strong>amiable</strong> personality.</li>
              <li>• The host was very <strong>amiable</strong> and welcoming.</li>
              <li>• He greeted everyone with an <strong>amiable</strong> smile.</li>
              <li>• The meeting was conducted in an <strong>amiable</strong> atmosphere.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Amiable</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Friendly</li>
                <li>• Pleasant</li>
                <li>• Good-natured</li>
                <li>• Sociable</li>
                <li>• Agreeable</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Cordial</li>
                <li>• Genial</li>
                <li>• Affable</li>
                <li>• Charming</li>
                <li>• Pleasant-tempered</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Amiable</strong> is spelled with no &apos;i&apos; after the &apos;a&apos;.</li>
            <li>• Used to describe people or atmospheres that are friendly and pleasant.</li>
            <li>• The noun form is &quot;amiability&quot;.</li>
            <li>• The adverb form is &quot;amiably&quot;.</li>
            <li>• The opposite is &quot;unfriendly&quot; or &quot;hostile&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aimiable&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aimiable&quot; is never correct. The proper spelling is always &quot;amiable&quot; with no &apos;i&apos; after the &apos;a&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;amiable&quot; comes from the Latin &quot;amicus&quot; meaning friend.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;amiable&quot; describe a situation?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;amiable&quot; can describe a friendly or pleasant atmosphere or situation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;amiable&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: amiable personality, amiable smile, amiable host, amiable conversation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aimiable&quot; happens because the extra &apos;i&apos; is mistakenly added, perhaps by analogy with other words.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Amiable</strong> is the correct spelling with no &apos;i&apos; after the &apos;a&apos;. It means having a friendly and pleasant manner. The misspelling &quot;aimiable&quot; is never correct. Use &quot;amiable&quot; for people or situations that are friendly and pleasant.</p>
      </div>
    </div>
  )
} 