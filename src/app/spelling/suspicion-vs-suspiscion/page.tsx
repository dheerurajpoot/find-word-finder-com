import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suspicion vs Suspiscion - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;suspicion&quot; vs &quot;suspiscion&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SuspicionVsSuspiscionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Suspicion vs Suspiscion
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8 rounded-2xl mb-10 border border-indigo-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Suspicion&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Suspiscion&quot; is always incorrect - remember the &quot;ion&quot; ending!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Suspiscion</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suspicion</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a feeling of doubt or mistrust.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Suspic&quot; (Root)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Core meaning</li>
                <li>• Like &quot;suspect&quot;</li>
                <li>• Latin origin</li>
                <li>• Easy to remember</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;I&quot; (Vowel)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Short &quot;i&quot; sound</li>
                <li>• Like &quot;in&quot;</li>
                <li>• Common pattern</li>
                <li>• Not &quot;e&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Ion&quot; (Ending)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Noun ending</li>
                <li>• Like &quot;action&quot;</li>
                <li>• Common suffix</li>
                <li>• Never &quot;ion&quot;</li>
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
                <p className="text-lg text-green-800">&quot;I have a <strong>suspicion</strong> about this.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;His <strong>suspicion</strong> was confirmed.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She cast <strong>suspicion</strong> on the plan.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>suspicion</strong> grew stronger.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I have a <strong>suspiscion</strong> about this&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspicion&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;His <strong>suspiscion</strong> was confirmed&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspicion&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She cast <strong>suspiscion</strong> on the plan&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspicion&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>suspiscion</strong> grew stronger&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspicion&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">ION Rule</h3>
              <p className="text-yellow-800">&quot;Suspicion&quot; ends with &quot;ion&quot; like &quot;action&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Action</h3>
              <p className="text-blue-800">&quot;Suspicion&quot; = &quot;ion&quot; ending, &quot;Suspiscion&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;suspicion&quot; to build muscle memory</p>
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
                <li>• <strong>Beyond suspicion</strong> - completely trustworthy</li>
                <li>• <strong>Cast suspicion</strong> - create doubt</li>
                <li>• <strong>Raise suspicion</strong> - cause concern</li>
                <li>• <strong>Under suspicion</strong> - being doubted</li>
                <li>• <strong>Grounded suspicion</strong> - justified doubt</li>
                <li>• <strong>Vague suspicion</strong> - unclear doubt</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The suspicion grew&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Suspicion is natural&quot;</li>
                <li>• <strong>Object:</strong> &quot;I have suspicion&quot;</li>
                <li>• <strong>Prepositional:</strong> &quot;Under suspicion&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;My suspicion&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Many suspicions&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;suspicion&quot; and &quot;suspiscion&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from similar pronunciation and the fact that some words can have multiple &quot;s&quot; sounds. Many people don&apos;t realize that &quot;suspicion&quot; ends with &quot;ion.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;suspicion&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Suspicion&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;suspicion&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suspicion&quot; comes from Latin &quot;suspicio&quot; meaning &quot;act of looking up&quot; and is related to words like &quot;suspect&quot; and &quot;suspicious.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;suspicion&quot; is standard across all English-speaking regions. However, some dialects might use different pronunciations, but the spelling remains the same.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;suspicion&quot; ends with &quot;ion&quot; (like &quot;action&quot;), and emphasize that &quot;suspiscion&quot; is not a real word. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;suspicion&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: doubt, mistrust, uncertainty, wariness, skepticism, and apprehension. The specific meaning depends on context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;suspicion&quot; be used in business contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suspicion&quot; is very common in business contexts, especially when referring to suspicious activities, fraud detection, or risk assessment.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;suspicion&quot; and &quot;doubt&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suspicion&quot; often implies distrust or belief that something is wrong, while &quot;doubt&quot; refers to uncertainty about truth or likelihood.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How do you remember the correct spelling of &quot;suspicion&quot;?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;suspicion&quot; as ending with &quot;ion&quot; like other nouns: suspicion, action, reaction. The &quot;ion&quot; pattern is consistent and easy to remember.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common misspellings of &quot;suspicion&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common misspellings include: suspiscion, suspision, suspition, and suspision. The correct spelling always ends with &quot;ion.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How is &quot;suspicion&quot; used in legal contexts?</h3>
              <p className="text-lg text-gray-700">A: In legal contexts, &quot;suspicion&quot; refers to reasonable grounds for believing that someone has committed a crime, often requiring probable cause.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What is the difference between suspicion and mistrust?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suspicion&quot; implies a feeling of doubt about something specific, while &quot;mistrust&quot; is a general lack of trust in someone or something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people often misspell &quot;suspicion&quot; with &quot;sc&quot; instead of &quot;c&quot;?</h3>
              <p className="text-lg text-gray-700">A: People often confuse &quot;sc&quot; and &quot;c&quot; because they may not pronounce the word clearly or confuse it with other words that have &quot;sc&quot; sounds, but &quot;suspicion&quot; specifically uses &quot;c.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How is &quot;suspicion&quot; used in medical contexts?</h3>
              <p className="text-lg text-gray-700">A: In medical contexts, &quot;suspicion&quot; refers to a clinical impression that suggests a potential diagnosis, often requiring further investigation or testing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What are the different meanings of &quot;suspicion&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suspicion&quot; can mean: a feeling of doubt or mistrust, a slight trace or hint, a belief that something is wrong, or a cautious attitude toward something.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suspicion&quot;</strong> ends with &quot;ion&quot; and means &quot;a feeling of doubt or mistrust.&quot; 
          <br />
          <strong>&quot;Suspiscion&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUSPIC + I + ON = SUSPICION&quot;</p>
        </div>
      </div>
    </div>
  )
}
