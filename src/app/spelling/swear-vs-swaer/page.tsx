import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Swear vs Swaer - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;swear&quot; vs &quot;swaer&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SwearVsSwaerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Swear vs Swaer
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
            <span className="text-2xl font-bold text-green-600">&quot;Swear&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Swaer&quot; is always incorrect - remember the &quot;ea&quot; in &quot;swear&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Swaer</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Swear</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to make a solemn promise or use profanity.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Sw&quot; (Prefix)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Starts the word</li>
                <li>• Common sound</li>
                <li>• Like &quot;swim&quot;</li>
                <li>• Easy to remember</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Ea&quot; (Vowel)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Long &quot;e&quot; sound</li>
                <li>• Like &quot;ear&quot;</li>
                <li>• Common pattern</li>
                <li>• Not &quot;a&quot;</li>
                </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;R&quot; (Ending)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Ends the word</li>
                <li>• Like &quot;bear&quot;</li>
                <li>• Common ending</li>
                <li>• Easy to spell</li>
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
                <p className="text-lg text-green-800">&quot;I <strong>swear</strong> to tell the truth.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Don&apos;t <strong>swear</strong> in front of children.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He <strong>swears</strong> by that brand.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>swore</strong> an oath.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>swaer</strong> to tell the truth&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;swear&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Don&apos;t <strong>swaer</strong> in front of children&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;swear&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>swaers</strong> by that brand&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;swears&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>swaered</strong> an oath&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;swore&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">EA Rule</h3>
              <p className="text-yellow-800">&quot;Swear&quot; has &quot;ea&quot; like &quot;ear&quot; and &quot;bear&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Promise</h3>
              <p className="text-blue-800">&quot;Swear&quot; = promise, &quot;Swaer&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;swear&quot; to build muscle memory</p>
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
                <li>• <strong>Swear an oath</strong> - make a solemn promise</li>
                <li>• <strong>Swear by something</strong> - strongly recommend</li>
                <li>• <strong>Swear in</strong> - administer an oath</li>
                <li>• <strong>Swear off</strong> - promise to give up</li>
                <li>• <strong>Swear to secrecy</strong> - promise to keep quiet</li>
                <li>• <strong>Swear allegiance</strong> - pledge loyalty</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Verb:</strong> &quot;I swear to tell the truth&quot;</li>
                <li>• <strong>Present:</strong> &quot;He swears by it&quot;</li>
                <li>• <strong>Past:</strong> &quot;She swore an oath&quot;</li>
                <li>• <strong>Past Participle:</strong> &quot;He has sworn&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Swearing is inappropriate&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To swear an oath&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;swear&quot; and &quot;swaer&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from similar pronunciation and the fact that &quot;a&quot; and &quot;ea&quot; can sound similar in some accents. Many people don&apos;t realize that &quot;swear&quot; is spelled with &quot;ea&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;swear&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;swear&quot; is perfectly acceptable in formal writing when referring to making solemn promises or oaths. However, when referring to profanity, it&apos;s often avoided in formal contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;swear&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Swear&quot; comes from Old English &quot;swerian&quot; meaning &quot;to take an oath&quot; and is related to German &quot;schwören&quot; and Dutch &quot;zweren&quot; meaning the same thing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;swear&quot; is standard across all English-speaking regions. However, the acceptability of profanity varies greatly between cultures and contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;swear&quot; has &quot;ea&quot; in the middle (like &quot;ear&quot; and &quot;bear&quot;), and emphasize that &quot;swaer&quot; is not a real word. Focus on the solemn promise meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;swear&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: vow, pledge, promise, affirm, declare, testify, curse, and cuss. The specific meaning depends on context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;swear&quot; be used in legal contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Swear&quot; is very common in legal contexts, especially when referring to taking oaths in court, making sworn statements, or swearing in witnesses.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;swear&quot; and &quot;vow&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Swear&quot; typically refers to making a solemn promise, often in legal or formal contexts, while &quot;vow&quot; usually refers to a personal promise or commitment, often religious in nature.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How do you remember the correct spelling of &quot;swear&quot;?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;swear&quot; as having &quot;ea&quot; in the middle like other words: ear, bear, swear. The &quot;ea&quot; pattern is consistent and easy to remember.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common misspellings of &quot;swear&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common misspellings include: swaer, swear, swear, swear, and swear. The correct spelling always has &quot;ea&quot; in the middle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How is &quot;swear&quot; used in religious contexts?</h3>
              <p className="text-lg text-gray-700">A: In religious contexts, &quot;swear&quot; refers to making solemn oaths before God, taking vows, or making sacred promises. It&apos;s often used in ceremonies and rituals.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What is the difference between swear and curse?</h3>
              <p className="text-lg text-gray-700">A: &quot;Swear&quot; can mean making a solemn promise or using profanity, while &quot;curse&quot; specifically refers to using offensive language or wishing harm on someone.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people often misspell &quot;swear&quot; with &quot;a&quot; instead of &quot;ea&quot;?</h3>
              <p className="text-lg text-gray-700">A: People often confuse &quot;a&quot; and &quot;ea&quot; because they may not pronounce the &quot;e&quot; clearly, but &quot;swear&quot; specifically has &quot;ea&quot; in the middle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How is &quot;swear&quot; used in military contexts?</h3>
              <p className="text-lg text-gray-700">A: In military contexts, &quot;swear&quot; refers to taking oaths of allegiance, swearing in new recruits, or making solemn promises to serve and protect.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What are the different forms of &quot;swear&quot;?</h3>
              <p className="text-lg text-gray-700">A: The verb forms include: swear (present), swears (third person), swore (past), sworn (past participle), and swearing (gerund).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Swear&quot;</strong> has &quot;ea&quot; in the middle and means &quot;to make a solemn promise.&quot; 
          <br />
          <strong>&quot;Swaer&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SW + EA + R = SWEAR&quot;</p>
        </div>
      </div>
    </div>
  )
} 