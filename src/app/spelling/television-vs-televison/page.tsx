import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Television or Televison - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;television&quot; and &quot;televison&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TelevisionVsTelevisonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Television or Televison</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;television&quot; and &quot;televison&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Televison</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Televison&quot; is a misspelling. The correct spelling is &quot;television&quot; with &quot;i&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Television</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Television&quot; is the correct spelling. It means a system for transmitting visual images.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Television (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A system for transmitting visual images and sound that are reproduced on screens; the medium of television broadcasting; a device for receiving television signals.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• We watched the news on <strong>television</strong>.</li>
                  <li>• The <strong>television</strong> was invented in the early 20th century.</li>
                  <li>• She works in <strong>television</strong> production.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Televison (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Televison&quot; is a misspelling of &quot;television&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Televison&quot; is not used in standard English.</li>
                  <li>• Always use <strong>television</strong> when referring to TV.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Television:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• TV</li>
                <li>• Telly</li>
                <li>• Boob tube</li>
                <li>• Small screen</li>
                <li>• Broadcast medium</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Televison:</h4>
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
            <li>• <strong>Television</strong> is spelled with &quot;i&quot; in the middle: tel-e-vi-sion.</li>
            <li>• It is commonly abbreviated as &quot;TV.&quot;</li>
            <li>• &quot;Televison&quot; is never correct in any context.</li>
            <li>• The word comes from Greek &quot;tele&quot; (far) + Latin &quot;visio&quot; (sight).</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;televison&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;televison&quot; is never correct. The proper spelling is always &quot;television.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;television&quot; has &quot;i&quot; in the middle - think of it as &quot;tel-e-vi-sion.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between television and TV?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;TV&quot; is just the abbreviated form of &quot;television&quot; - they mean the same thing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;television&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;television&quot; is appropriate in formal and academic writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;television&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;televison&quot; often happens by omitting the &quot;i&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;television&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: television show, television network, television program, and television broadcast.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;television&quot; always about entertainment?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;television&quot; can refer to news, educational content, sports, and many other types of programming.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;television&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;television&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Television</strong> is the correct spelling with &quot;i&quot; in the middle: tel-e-vi-sion. It means a system for transmitting visual images and sound. The misspelling &quot;televison&quot; is never correct. Always use &quot;television&quot; when referring to TV broadcasting, programming, or the medium itself in any context.</p>
      </div>
    </div>
  )
} 