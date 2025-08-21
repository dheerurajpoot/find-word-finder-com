import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spoke vs Speaked - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spoke&quot; and &quot;speaked&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpokeVsSpeakedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Spoke vs Speaked
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
            <span className="text-2xl mr-3">🗣️</span>
            <span className="text-2xl font-bold text-blue-600">&quot;Spoke&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Speaked&quot; is always incorrect - remember that &quot;spoke&quot; is the past tense of &quot;speak&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Speaked</h3>
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
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Spoke</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                This is the proper spelling for the past tense of &quot;speak&quot; meaning &quot;to have said something.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Speak&quot; (Base)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Present tense</li>
                <li>• Regular verb</li>
                <li>• Means &quot;to talk&quot;</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Spoke&quot; (Past)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Irregular past tense</li>
                <li>• Must be memorized</li>
                <li>• No &quot;ed&quot; ending</li>
                <li>• Standard English form</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Spoken&quot; (Past Participle)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Past participle form</li>
                <li>• Used with &quot;have&quot;</li>
                <li>• Perfect tenses</li>
                <li>• Passive voice</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">✅ Correct: &quot;Spoke&quot;</h3>
              <div className="space-y-3">
                <p className="text-blue-800"><strong>•</strong> &quot;I spoke to her yesterday.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;He spoke at the meeting.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;She spoke clearly.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;They spoke about the issue.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Speaked&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;I speaked to her yesterday&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;He speaked at the meeting&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;She speaked clearly&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;They speaked about the issue&quot; ❌</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Irregular Verb</h3>
              <p className="text-yellow-800">&quot;Speak&quot; is irregular like &quot;break/broke&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Break</h3>
              <p className="text-blue-800">&quot;Speak/spoke&quot; like &quot;break/broke&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;spoke&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Proofread</h3>
              <p className="text-indigo-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Why do people misspell &quot;spoke&quot; as &quot;speaked&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error occurs because many English verbs follow the regular pattern of adding &quot;-ed&quot; for past tense. People incorrectly apply this rule to &quot;speak&quot;, which is an irregular verb.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;spoke&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spoke&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard past tense form of &quot;speak.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the etymology of &quot;spoke&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spoke&quot; comes from Old English &quot;spæc&quot;, which is the past tense of &quot;sprecan&quot; (to speak). The word has maintained its irregular form throughout English history.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;spoke&quot; is spelled the same way across all English-speaking regions. The spelling &quot;speaked&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of other irregular verbs with similar patterns: speak/spoke, break/broke, steal/stole, wake/woke. They all change their vowel sound in the past tense.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;spoke&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: said, talked, communicated, expressed, stated, mentioned, and addressed.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;spoke&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spoke&quot; can refer to verbal communication, public speaking, conversations, presentations, and any form of oral expression in the past tense.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;spoke&quot; and &quot;said&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both are past tense forms, &quot;spoke&quot; is specifically the past tense of &quot;speak&quot;, while &quot;said&quot; is the past tense of &quot;say.&quot; They can often be used interchangeably.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;spoke&quot; always about talking?</h3>
              <p className="text-lg text-gray-700">A: Primarily yes, but &quot;spoke&quot; can also refer to addressing an audience, giving a speech, or communicating in any verbal form. It&apos;s most commonly about oral communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: What are some common phrases with &quot;spoke&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;spoke to,&quot; &quot;spoke about,&quot; &quot;spoke with,&quot; &quot;spoke up,&quot; &quot;spoke out,&quot; and &quot;spoke volumes.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spoke&quot;</strong> is the past tense of &quot;speak&quot;. 
          <br />
          <strong>&quot;Speaked&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPEAK → SPOKE&quot; (irregular verb)</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
            Browse All Spelling Guides
          </a>
          <a href="/word-finders" className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
            Explore Word Tools
          </a>
        </div>
      </div>
    </div>
  )
}
