import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Technically vs Technicaly - Correct Spelling & Usage Guide | Word Finder',
  description: 'Learn the correct spelling: &quot;technically&quot; vs &quot;technicaly&quot;. Master proper usage, definitions, examples, and avoid common spelling mistakes.',
}

export default function TechnicallyVsTechnicalyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Technically vs Technicaly
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Master the Correct Spelling: Understanding Technical Terminology
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-cyan-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Technically&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Technicaly&quot; is always incorrect - remember the &quot;al&quot; suffix!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✗</span>
              </div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">Technicaly</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common misspelling that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Technically</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;according to technical principles&quot; or &quot;strictly speaking.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Word Breakdown */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Word Structure Analysis</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Technic&quot; (Root)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• From Greek &quot;technikos&quot;</li>
                <li>• Relating to technique</li>
                <li>• Skill or method</li>
                <li>• Professional knowledge</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;al&quot; (Suffix)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Forms adjectives</li>
                <li>• Means &quot;relating to&quot;</li>
                <li>• Creates &quot;technical&quot;</li>
                <li>• Standard English pattern</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;ly&quot; (Suffix)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Forms adverbs</li>
                <li>• Means &quot;in a manner&quot;</li>
                <li>• Creates &quot;technically&quot;</li>
                <li>• Indicates how something is done</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Real-World Examples</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Technically, that&apos;s not the correct procedure.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The system is technically operational.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Technically speaking, you&apos;re right.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;It&apos;s technically possible to do that.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Technicaly, that&apos;s wrong&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;technically&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;It&apos;s technicaly correct&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;technically&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Technicaly speaking&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;technically&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;That&apos;s technicaly impossible&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;technically&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">AL Rule</h3>
              <p className="text-yellow-800">&quot;Technical&quot; has &quot;al&quot; like &quot;professional&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Professional</h3>
              <p className="text-blue-800">Technical = Professional (both have &quot;al&quot;)</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Break It Down</h3>
              <p className="text-green-800">Tech-nic-al-ly (4 syllables)</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Check Patterns</h3>
              <p className="text-purple-800">Most &quot;-ical&quot; words end in &quot;-ally&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Advanced Usage Patterns</h2>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Phrases</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Technically speaking</strong> - to be precise</li>
                <li>• <strong>Technically correct</strong> - accurate in detail</li>
                <li>• <strong>Technically possible</strong> - feasible in theory</li>
                <li>• <strong>Technically sound</strong> - well-founded</li>
                <li>• <strong>Technically accurate</strong> - precise</li>
                <li>• <strong>Technically proficient</strong> - skilled</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adverb:</strong> &quot;Technically, it&apos;s wrong&quot;</li>
                <li>• <strong>Sentence modifier:</strong> &quot;Technically speaking&quot;</li>
                <li>• <strong>Qualifier:</strong> &quot;Technically correct&quot;</li>
                <li>• <strong>Precision indicator:</strong> &quot;Technically accurate&quot;</li>
                <li>• <strong>Clarification:</strong> &quot;Technically, that&apos;s not true&quot;</li>
                <li>• <strong>Expert opinion:</strong> &quot;Technically, you should...&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people misspell &quot;technically&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people confuse the &quot;al&quot; suffix with other common endings, or they may not be familiar with the word&apos;s Greek etymology and proper formation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;technically&quot; and &quot;technically speaking&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Technically&quot; is an adverb meaning &quot;according to technical principles,&quot; while &quot;technically speaking&quot; is a phrase used to introduce a precise or expert opinion.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;technically&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;technically&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English adverb.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;technically&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: strictly speaking, precisely, exactly, theoretically, formally, officially, and in technical terms.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How do you remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;technical&quot; has the &quot;al&quot; suffix (like &quot;professional&quot;), and &quot;technically&quot; adds the &quot;ly&quot; adverb ending. Think: tech-nic-al-ly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is &quot;technically&quot; always used in technical contexts?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;technically&quot; can be used in everyday conversation to indicate precision or to introduce a more accurate statement, even in non-technical contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;technically&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Technically&quot; comes from the Greek &quot;technikos&quot; (relating to art or skill) + the Latin suffix &quot;-al&quot; + the English suffix &quot;-ly&quot; to form an adverb.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;technically&quot; be used to contradict someone politely?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;technically&quot; is often used to politely correct or contradict someone by introducing a more precise or accurate statement.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are common collocations with &quot;technically&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common collocations include: technically correct, technically possible, technically sound, technically accurate, technically proficient, and technically speaking.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How do you teach children the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Break down the word into syllables (tech-nic-al-ly), emphasize the &quot;al&quot; pattern, and show how it relates to other words like &quot;professional&quot; or &quot;musical.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Technically&quot;</strong> has the &quot;al&quot; suffix and means &quot;according to technical principles.&quot; 
          <br />
          <strong>&quot;Technicaly&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Technical + ly = Technically&quot;</p>
        </div>
      </div>
    </div>
  )
} 