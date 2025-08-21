import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sense vs Scense - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sense&quot; and &quot;scense&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SenseVsScensePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          Sense vs Scense
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-violet-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-purple-600">&quot;Sense&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Scense&quot; is always incorrect - remember &quot;sense&quot; starts with &quot;s&quot;, not &quot;sc&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Scense</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-purple-800 mb-4">Sense</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-purple-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-purple-700 leading-relaxed">
                This is the proper spelling meaning &quot;perception&quot; or &quot;understanding.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Sense&quot; (Correct)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Means &quot;perception&quot;</li>
                <li>• Starts with &quot;s&quot;</li>
                <li>• Latin origin: &quot;sensus&quot;</li>
                <li>• Used as noun and verb</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Scense&quot; (Wrong)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Starts with &quot;sc&quot;</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• &quot;Scense&quot; is not a word</li>
                <li>• Wrong starting letters</li>
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
            <h3 className="text-2xl font-bold text-purple-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;That makes perfect <strong>sense</strong>.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;I can <strong>sense</strong> your concern.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;Use your common <strong>sense</strong>.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;She has a keen <strong>sense</strong> of smell.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;That makes perfect <strong>scense</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sense&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I can <strong>scense</strong> your concern&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sense&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Use your common <strong>scense</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sense&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She has a keen <strong>scense</strong> of smell&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sense&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">S Start Rule</h3>
              <p className="text-yellow-800">&quot;Sense&quot; starts with &quot;s&quot; - think &quot;S-ense&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Simple</h3>
              <p className="text-blue-800">&quot;Sense&quot; is simple, &quot;Scense&quot; is wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sense&quot; to build muscle memory</p>
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
                <li>• <strong>Common sense</strong> - practical wisdom</li>
                <li>• <strong>Make sense</strong> - be logical</li>
                <li>• <strong>Sense of duty</strong> - feeling of responsibility</li>
                <li>• <strong>Sixth sense</strong> - intuition</li>
                <li>• <strong>Sense of accomplishment</strong> - feeling of achievement</li>
                <li>• <strong>Lost my senses</strong> - acting irrationally</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;That makes sense&quot;</li>
                <li>• <strong>Verb:</strong> &quot;I can sense it&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Sense is vital&quot;</li>
                <li>• <strong>Object:</strong> &quot;Use your sense&quot;</li>
                <li>• <strong>Plural:</strong> &quot;All five senses&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The sense&apos;s clarity&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Why do people misspell &quot;sense&quot; as &quot;scense&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs when people confuse it with words that start with &quot;sc&quot; like &quot;scene&quot; or &quot;science.&quot; However, &quot;sense&quot; starts with just &quot;s.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Is &quot;scense&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;scense&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: What words do start with &quot;sc&quot;?</h3>
              <p className="text-lg text-gray-700">A: Many words start with &quot;sc&quot; such as: scene, science, scope, score, scale, and school. But &quot;sense&quot; is not one of them - it starts with just &quot;s.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;sense&quot; starts with just &quot;s&quot; like &quot;simple,&quot; &quot;smart,&quot; or &quot;sound.&quot; Think of it as &quot;S-ense&quot; to emphasize the simple start.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are the different meanings of &quot;sense&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sense&quot; can mean physical perception (sight, hearing), understanding (meaning), practical wisdom (common sense), or intuitive feeling (sixth sense).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;sense&quot; be used in scientific contexts?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! In science, we discuss &quot;sensory perception,&quot; &quot;sense organs,&quot; &quot;magnetic sense&quot; in animals, or &quot;chemical senses&quot; like smell and taste.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between &quot;sense&quot; and &quot;scene&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sense&quot; refers to perception or understanding, while &quot;scene&quot; refers to a view, setting, or part of a play/movie. They&apos;re completely different words with different meanings.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: sensible (practical), sensitive (easily affected), sensor (detection device), sensory (relating to senses), and sensation (feeling).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some idioms using &quot;sense&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common idioms include: &quot;come to your senses&quot; (become reasonable), &quot;knock some sense into&quot; (make someone think clearly), and &quot;dollars and cents&quot; (practical matters).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sense&quot;</strong> starts with &quot;s&quot; and means &quot;perception&quot; or &quot;understanding.&quot; 
          <br />
          <strong>&quot;Scense&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;S-ense&quot; - simple start with just &quot;s&quot;!</p>
        </div>
      </div>
    </div>
  )
}
