import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sentence vs Sentance - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sentence&quot; and &quot;sentance&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SentenceVsSentancePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
          Sentence vs Sentance
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-100 via-teal-100 to-blue-100 p-8 rounded-2xl mb-10 border border-cyan-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-cyan-600">&quot;Sentence&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sentance&quot; is always incorrect - remember the &quot;c&quot; in &quot;sentence&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sentance</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-cyan-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-cyan-800 mb-4">Sentence</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-cyan-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-cyan-700 leading-relaxed">
                This is the proper spelling meaning &quot;a group of words expressing a complete thought.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">&quot;Sentence&quot; (Correct)</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Means &quot;complete thought&quot;</li>
                <li>• Contains &quot;c&quot; before &quot;e&quot;</li>
                <li>• Latin origin: &quot;sententia&quot;</li>
                <li>• Used as noun and verb</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Sentance&quot; (Wrong)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Missing the &quot;c&quot;</li>
                <li>• Phonetic misspelling</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• &quot;Sentance&quot; is not a word</li>
                <li>• Missing essential letter</li>
                <li>• Changes pronunciation</li>
                <li>• Breaks word structure</li>
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
            <h3 className="text-2xl font-bold text-cyan-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;This is a complete <strong>sentence</strong>.&quot;</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;The judge will <strong>sentence</strong> the criminal.&quot;</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;Write a clear <strong>sentence</strong>.&quot;</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;Each <strong>sentence</strong> should have a subject and verb.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This is a complete <strong>sentance</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sentence&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The judge will <strong>sentance</strong> the criminal&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sentence&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Write a clear <strong>sentance</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sentence&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Each <strong>sentance</strong> should have a subject&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sentence&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">C Before E Rule</h3>
              <p className="text-yellow-800">&quot;Sentence&quot; has &quot;c&quot; before &quot;e&quot; - think &quot;sen-C-ence&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Complete</h3>
              <p className="text-blue-800">&quot;Sentence&quot; = complete thought, &quot;Sentance&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sentence&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Proofread</h3>
              <p className="text-purple-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Life sentence</strong> - prison term for life</li>
                <li>• <strong>Death sentence</strong> - capital punishment</li>
                <li>• <strong>Run-on sentence</strong> - overly long sentence</li>
                <li>• <strong>Topic sentence</strong> - main idea sentence</li>
                <li>• <strong>Compound sentence</strong> - two clauses joined</li>
                <li>• <strong>Simple sentence</strong> - one independent clause</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The sentence is complete&quot;</li>
                <li>• <strong>Verb:</strong> &quot;The judge will sentence him&quot;</li>
                <li>• <strong>Subject:</strong> &quot;This sentence makes sense&quot;</li>
                <li>• <strong>Object:</strong> &quot;I wrote a sentence&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Sentence structure matters&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Sentencing the criminal&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Why do people misspell &quot;sentence&quot; as &quot;sentance&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because the &quot;c&quot; sound in &quot;sentence&quot; can be subtle when spoken quickly. Many people rely on phonetic spelling and forget that &quot;sentence&quot; has a &quot;c&quot; before the &quot;e.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;sentance&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sentance&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the etymology of &quot;sentence&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sentence&quot; comes from the Latin word &quot;sententia&quot; meaning &quot;thought&quot; or &quot;opinion.&quot; The English word was formed from this Latin root, maintaining the &quot;c&quot; throughout its evolution.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sentence&quot; is spelled the same way in all English-speaking regions. Both American and British English use the same spelling with the &quot;c&quot; before &quot;e.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word as &quot;sen-C-ence&quot; - emphasize the &quot;C&quot; sound. You can also remember that &quot;sentence&quot; means &quot;complete thought,&quot; and both words contain the letter &quot;c.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;sentence&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: statement, phrase, clause, expression, utterance, declaration, and remark.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Can &quot;sentence&quot; be used as both a noun and verb?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sentence&quot; is versatile. As a noun: &quot;This sentence is long.&quot; As a verb: &quot;The judge will sentence him.&quot; This dual function makes it a useful word in English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;sentence&quot; and &quot;phrase&quot;?</h3>
              <p className="text-lg text-gray-700">A: A &quot;sentence&quot; is a complete thought with a subject and verb, while a &quot;phrase&quot; is a group of words that doesn&apos;t form a complete thought. All sentences contain phrases, but not all phrases are sentences.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sentence&quot;</strong> has a &quot;c&quot; before the &quot;e&quot; and means &quot;a complete thought.&quot; 
          <br />
          <strong>&quot;Sentance&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;sen-C-ence&quot; - emphasize the &quot;C&quot; sound!</p>
        </div>
      </div>
    </div>
  )
}
