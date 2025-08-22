import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Scroll vs Scrol - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;scroll&quot; and &quot;scrol&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ScrollVsScrolPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Scroll vs Scrol
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">📜</span>
            <span className="text-2xl font-bold text-blue-600">&quot;Scroll&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Scrol&quot; is always incorrect - remember &quot;scroll&quot; has two &quot;l&quot;s!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Scrol</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Scroll</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                This is the proper spelling meaning &quot;to move up and down&quot; or &quot;ancient document.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Scroll&quot; (Correct)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;to move up/down&quot;</li>
                <li>• Has two &quot;l&quot;s</li>
                <li>• Old English origin</li>
                <li>• Used as verb/noun</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Scrol&quot; (Wrong)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Missing second &quot;l&quot;</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;Scrol&quot; is not a word</li>
                <li>• Missing letter &quot;l&quot;</li>
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
            <h3 className="text-2xl font-bold text-blue-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;Scroll down the page.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;Ancient scroll.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;Scroll through photos.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;Scroll wheel.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Scrol down the page&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scroll&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Ancient scrol&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scroll&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Scrol through photos&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scroll&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Scrol wheel&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scroll&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Double L Rule</h3>
              <p className="text-blue-800">&quot;Scroll&quot; has two &quot;l&quot;s - think &quot;sc-LL-oll&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Think Roll</h3>
              <p className="text-indigo-800">&quot;Scroll&quot; rhymes with &quot;roll&quot; - both have &quot;ll&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Write It Out</h3>
              <p className="text-purple-800">Practice writing &quot;scroll&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Proofread</h3>
              <p className="text-cyan-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Scroll wheel</strong> - mouse navigation</li>
                <li>• <strong>Scroll bar</strong> - navigation element</li>
                <li>• <strong>Scroll lock</strong> - keyboard function</li>
                <li>• <strong>Scroll view</strong> - display mode</li>
                <li>• <strong>Scroll speed</strong> - movement rate</li>
                <li>• <strong>Scroll position</strong> - current location</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Verb:</strong> &quot;Scroll the page&quot;</li>
                <li>• <strong>Noun:</strong> &quot;The scroll contains&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Scroll reveals content&quot;</li>
                <li>• <strong>Object:</strong> &quot;Use the scroll&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Scroll&apos;s content&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple scrolls&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Why do people misspell &quot;scroll&quot; as &quot;scrol&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling occurs when people drop the second &quot;l&quot; from &quot;scroll.&quot; Remember that &quot;scroll&quot; has two &quot;l&quot;s and means to move up and down.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;scrol&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;scrol&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What does &quot;scroll&quot; mean?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scroll&quot; can mean: to move content up or down on a screen, an ancient document made of rolled parchment, or to move smoothly through digital content.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;scroll&quot; has two &quot;l&quot;s. Think &quot;sc-LL-oll&quot; - the double &quot;l&quot; is in the middle of the word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;scroll&quot; and &quot;roll&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scroll&quot; specifically refers to moving through digital content or ancient documents, while &quot;roll&quot; is more general and can mean to move by turning over and over.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;scroll&quot; be used in technology contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Scroll&quot; is commonly used in technology: &quot;scroll wheel,&quot; &quot;scroll bar,&quot; &quot;scroll view,&quot; or &quot;scroll speed&quot; are all tech terms.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: scroller (noun), scrolling (gerund), scrollable (adjective), scrollbar (noun), and scrollwheel (noun).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the origin of the word &quot;scroll&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scroll&quot; comes from the Old English &quot;scroel&quot; meaning &quot;scroll&quot; or &quot;roll of parchment.&quot; It entered English in the 14th century and refers to rolled documents.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How is &quot;scroll&quot; used in ancient history?</h3>
              <p className="text-lg text-gray-700">A: In ancient history, scrolls were documents written on rolled parchment or papyrus. They were the primary form of written communication before books were invented.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What&apos;s the difference between &quot;scroll&quot; and &quot;swipe&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scroll&quot; refers to moving content up and down, while &quot;swipe&quot; refers to moving content left and right. Both are touch gestures used on mobile devices.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Scroll&quot;</strong> has two &quot;l&quot;s and means &quot;to move up and down.&quot;
          <br />
          <strong>&quot;Scrol&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;sc-LL-oll&quot; - remember the double &quot;l&quot;!</p>
        </div>
      </div>
    </div>
  )
}
