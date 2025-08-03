import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Technically vs Technecally - Spelling Guide & Common Mistakes | Word Finder',
  description: 'Learn the correct spelling: &quot;technically&quot; vs &quot;technecally&quot;. Understand word formation, avoid common errors, and master proper usage.',
}

export default function TechnicallyVsTechnecallyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Technically vs Technecally</h1>
        <p className="text-xl text-gray-600">Spelling Guide & Common Mistakes</p>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg mb-8 border-l-4 border-emerald-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Spelling Guide & Word Formation</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;technically&quot; and &quot;technecally&quot;. Learn word formation rules, common mistakes, and proper usage patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Technecally</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Technecally&quot; is incorrect. The proper spelling is &quot;technically&quot; with &quot;nic&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Technically</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Technically&quot; is the correct spelling. It means &quot;according to technical principles.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Technically (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">According to technical principles; strictly speaking; with regard to technical details.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• <strong>Technically</strong>, that&apos;s not the right approach.</li>
                  <li>• The system is <strong>technically</strong> sound.</li>
                  <li>• <strong>Technically</strong> speaking, you&apos;re correct.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Technecally (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Technecally&quot; is a misspelling and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Technecally&quot; is never used in standard English.</li>
                  <li>• Always use <strong>technically</strong> when referring to technical matters.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Technically:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Strictly speaking</li>
                <li>• Precisely</li>
                <li>• Exactly</li>
                <li>• Theoretically</li>
                <li>• Formally</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Technecally:</h4>
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
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Spelling Rules:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Technically</strong> is spelled with &quot;nic&quot; in the middle: tech-nic-al-ly.</li>
            <li>• The word comes from &quot;technical&quot; + the adverb suffix &quot;-ly.&quot;</li>
            <li>• &quot;Technecally&quot; is a common misspelling that should be avoided.</li>
            <li>• Remember: technical → technically (not technecally).</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;technically&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Technically&quot; functions as an adverb that modifies verbs, adjectives, or entire sentences to indicate precision or technical accuracy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;technically&quot; differ from &quot;theoretically&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Technically&quot; refers to technical principles or precise details, while &quot;theoretically&quot; refers to theory or hypothetical situations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;technically&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Technically&quot; is an adverb that modifies the meaning of verbs, adjectives, or entire clauses to indicate technical precision.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;technically&quot; be used in academic writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;technically&quot; is perfectly acceptable in academic and formal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the words &quot;technical&quot; and &quot;technically&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Technical&quot; comes from Greek &quot;technikos&quot; meaning &quot;relating to art or skill,&quot; while &quot;technically&quot; adds the English adverb suffix &quot;-ly.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;technically&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Technically&quot; can be used as a sentence adverb (&quot;Technically, that&apos;s wrong&quot;), modifier (&quot;technically correct&quot;), or qualifier (&quot;technically speaking&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;technically&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: technically correct, technically possible, technically sound, technically accurate, technically proficient, and technically speaking.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;technical&quot; and &quot;technecally&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;technical&quot; has &quot;nic&quot; in the middle (like &quot;nickel&quot;), and emphasize that &quot;technecally&quot; is not a real word.</p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
        <h2 className="text-2xl font-bold mb-4 text-emerald-900">Spelling Summary</h2>
        <p className="text-lg md:text-xl text-emerald-800 leading-relaxed">Spelling Rule: <strong>Technically</strong> is the correct spelling with &quot;nic&quot; in the middle: tech-nic-al-ly. &quot;Technically&quot; is an adverb formed from the adjective &quot;technical&quot; plus the suffix &quot;-ly.&quot; The incorrect spelling &quot;technecally&quot; violates basic word formation rules and is never acceptable in any context. Always use &quot;technically&quot; when expressing technical precision or accuracy.</p>
      </div>
    </div>
  )
} 