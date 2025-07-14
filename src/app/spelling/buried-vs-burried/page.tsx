import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Buried or Burried - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;buried&quot; and &quot;burried&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BuriedVsBurriedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Buried or Burried</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;buried&quot; and &quot;burried&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Burried</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Burried&quot; is a misspelling. The correct spelling is &quot;buried&quot; with one &quot;r&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Buried</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Buried&quot; is the correct spelling. It&apos;s the past tense and past participle of &quot;bury.&quot;</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Buried (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense and past participle of &quot;bury&quot; - to place something in the ground or hide it.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• They <strong>buried</strong> the treasure in the backyard.</li>
                  <li>• The dog <strong>buried</strong> its bone in the garden.</li>
                  <li>• She <strong>buried</strong> her face in her hands.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Burried (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Burried&quot; is a misspelling of &quot;buried&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Burried&quot; is not used in standard English.</li>
                  <li>• Always use <strong>buried</strong> as the past tense of bury.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Buried:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Interred</li>
                <li>• Hidden</li>
                <li>• Concealed</li>
                <li>• Entombed</li>
                <li>• Covered</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Burried:</h4>
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
            <li>• <strong>Buried</strong> is spelled with one &quot;r&quot;, not two.</li>
            <li>• The verb &quot;bury&quot; conjugates as: bury (present), buried (past), buried (past participle).</li>
            <li>• &quot;Buried&quot; can refer to both physical burial and figurative hiding.</li>
            <li>• &quot;Burried&quot; is never correct in any context.</li>
            <li>• The pronunciation is /ˈberid/ with emphasis on the first syllable.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;burried&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;burried&quot; is never correct. The proper spelling is always &quot;buried.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bury-ed&quot; - the verb &quot;bury&quot; plus the past tense ending &quot;-ed.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between buried and interred?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Buried&quot; is more general, while &quot;interred&quot; specifically refers to burying human remains.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can buried be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;buried&quot; can be used as an adjective, as in &quot;buried treasure&quot; or &quot;buried feelings.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;burried&quot; likely occurs because of confusion about the double &quot;r&quot; or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;buried&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: buried alive, buried treasure, buried the hatchet, and buried in work.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can buried be used in passive voice?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;buried&quot; is commonly used in passive constructions, as in &quot;The treasure was buried by pirates.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is buried always about physical burial?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;buried&quot; can also refer to hiding or concealing things, emotions, or information.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Buried</strong> is the correct spelling with one &quot;r&quot;. It&apos;s the past tense and past participle of the verb &quot;bury&quot; and can refer to placing something in the ground or hiding it. The misspelling &quot;burried&quot; is never correct. Use &quot;buried&quot; for all contexts involving past actions of burying or concealing.</p>
      </div>
    </div>
  )
} 