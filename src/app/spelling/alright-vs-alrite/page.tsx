import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Alright or Alrite - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;alright&quot; and &quot;alrite&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AlrightVsAlritePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Alright or Alrite</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;alright&quot; and &quot;alrite&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alrite</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alrite&quot; is a misspelling. The correct spelling is &quot;alright&quot; as one word.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Alright</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Alright&quot; is the correct spelling. It means satisfactory, acceptable, or okay.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Alright (adverb/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Satisfactory, acceptable, or okay; in a satisfactory state.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Are you <strong>alright</strong> after the accident?</li>
                  <li>• It&apos;s <strong>alright</strong> if you can&apos;t make it.</li>
                  <li>• Everything turned out <strong>alright</strong> in the end.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alrite (adverb/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alrite&quot; is a misspelling of &quot;alright&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Alrite&quot; is not used in standard English.</li>
                  <li>• Always use <strong>alright</strong> when meaning okay.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Alright:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Okay</li>
                <li>• Fine</li>
                <li>• Satisfactory</li>
                <li>• Acceptable</li>
                <li>• Good</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alrite:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
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
            <li>• <strong>Alright</strong> is spelled as one word, not two words.</li>
            <li>• Used in informal contexts to mean satisfactory or okay.</li>
            <li>• Some style guides prefer &quot;all right&quot; (two words) for formal writing.</li>
            <li>• The word combines &quot;all&quot; and &quot;right&quot; into a single term.</li>
            <li>• &quot;Alrite&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alrite&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alrite&quot; is never correct. The proper spelling is &quot;alright&quot; (one word).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between alright and all right?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Alright&quot; is informal, while &quot;all right&quot; (two words) is more formal and preferred in academic writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can alright be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It&apos;s better to use &quot;all right&quot; (two words) in formal contexts, though &quot;alright&quot; is acceptable in informal writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;al-right&quot; - it&apos;s one word that combines &quot;all&quot; and &quot;right.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;alright&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: that&apos;s alright, everything&apos;s alright, and it&apos;s alright with me.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alrite&quot; occurs because people think it should be spelled phonetically or like &quot;write.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is alright always informal?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;alright&quot; is considered informal. For formal writing, use &quot;all right&quot; (two words) or &quot;satisfactory.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can alright be used as both an adjective and adverb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;alright&quot; can function as both an adjective (describing a state) and an adverb (describing how something is).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Alright</strong> is the correct spelling as one word. It means satisfactory or okay. The misspelling &quot;alrite&quot; is never correct. For formal writing, consider using &quot;all right&quot; (two words).</p>
      </div>
    </div>
  )
} 